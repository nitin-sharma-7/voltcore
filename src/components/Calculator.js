"use client";
import React, { useState } from "react";

export const Calculator = () => {
  const [bill, setBill] = useState("");
  const [data, setData] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    const avgBill = parseFloat(bill);
    if (isNaN(avgBill) || avgBill < 500 || avgBill > 10000) {
      alert("Please enter a valid electricity bill between ₹500 and ₹10,000.");
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const systemSize = +((avgBill / 1000) * 1.2).toFixed(1);
      const roofArea = Math.ceil(systemSize * 60);
      const monthlySavings = Math.round(avgBill * 0.8);
      const yearlySavings = monthlySavings * 12;
      const guaranteedSavings = yearlySavings * 5;
      const totalCost = Math.round(systemSize * 80000);
      const centralSubsidy = -Math.round(totalCost * 0.33);
      const netCost = totalCost + centralSubsidy;
      const lifetimeSavings = yearlySavings * 25;
      const roi = (((lifetimeSavings - netCost) / netCost) * 100).toFixed(2);
      const minDownPayment = Math.round(totalCost * 0.33);
      const netDownPayment = 0;
      const emiTenure = "5 year";
      const emiAmount = Math.round(netCost / 5 / 12);
      const co2Mitigated = (systemSize * 1500).toLocaleString();
      const treesPlanted = Math.round(systemSize * 40);
      const distanceEquivalent = (systemSize * 10000).toLocaleString();

      setData({
        systemSize,
        roofArea,
        monthlySavings,
        yearlySavings,
        guaranteedSavings,
        totalCost,
        centralSubsidy,
        netCost,
        lifetimeSavings,
        roi,
        minDownPayment,
        netDownPayment,
        emiTenure,
        emiAmount,
        co2Mitigated,
        treesPlanted,
        distanceEquivalent,
      });

      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 py-10 px-2 mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Solar Cost Calculator
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Discover your potential savings and environmental impact
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-md border border-white/20 p-4 mb-4">
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Monthly Electricity Bill
          </label>
          <div className="relative">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-sm">
              ₹
            </span>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="Enter amount"
              className="w-full pl-6 pr-3 py-2 text-sm rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-0 bg-white/50"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">₹500 - ₹10,000</p>
          <button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="w-full mt-3 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-emerald-700 disabled:opacity-50"
          >
            {isCalculating ? "Calculating..." : "Calculate Solar Savings"}
          </button>
        </div>

        {data && (
          <div className="space-y-4 text-xs">
            {/* System Requirements */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-md border border-white/20 p-3">
              <h2 className="text-sm font-bold text-center text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg py-1 mb-2">
                System Requirements
              </h2>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-blue-50 rounded-lg p-2">
                  <p className="font-semibold">System Size</p>
                  <p className="text-blue-600">{data.systemSize} kW</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-2">
                  <p className="font-semibold">Roof Area</p>
                  <p className="text-emerald-600">{data.roofArea} sq.ft</p>
                </div>
              </div>
            </div>

            {/* Savings Overview */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-md border border-white/20 p-3">
              <h2 className="text-sm font-bold text-center text-white bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg py-1 mb-2">
                Your Solar Savings
              </h2>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="font-medium">Monthly</p>
                  <p className="text-green-600">
                    ₹{data.monthlySavings.toLocaleString()}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="font-medium">Yearly</p>
                  <p className="text-green-600">
                    ₹{data.yearlySavings.toLocaleString()}
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-2">
                  <p className="font-medium">5-Year</p>
                  <p className="text-orange-600">
                    ₹{data.guaranteedSavings.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Investment Overview */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-md border border-white/20 p-3">
              <h2 className="text-sm font-bold text-center text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg py-1 mb-2">
                Investment Overview
              </h2>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p>Total Cost</p>
                  <p className="text-gray-800 font-semibold">
                    ₹{data.totalCost.toLocaleString()}
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-2">
                  <p>Subsidy</p>
                  <p className="text-red-600 font-semibold">
                    ₹{data.centralSubsidy.toLocaleString()}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-2 col-span-2">
                  <p>Net Investment</p>
                  <p className="text-blue-600 font-semibold">
                    ₹{data.netCost.toLocaleString()}
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p>Lifetime</p>
                  <p className="text-green-600 font-semibold">
                    ₹{data.lifetimeSavings.toLocaleString()}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-2">
                  <p>ROI</p>
                  <p className="text-purple-600 font-semibold">{data.roi}%</p>
                </div>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-md border border-white/20 p-3">
              <h2 className="text-sm font-bold text-center text-white bg-gradient-to-r from-green-600 to-teal-600 rounded-lg py-1 mb-2">
                Environmental Impact
              </h2>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-blue-50 rounded-lg p-2">
                  <p>CO₂ Mitigated</p>
                  <p className="text-blue-600 font-semibold">
                    {data.co2Mitigated} kg
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p>Trees Equivalent</p>
                  <p className="text-green-600 font-semibold">
                    {data.treesPlanted}
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-2">
                  <p>Car Miles Saved</p>
                  <p className="text-purple-600 font-semibold">
                    {data.distanceEquivalent} km
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
