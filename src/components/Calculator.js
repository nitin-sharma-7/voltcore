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

    // Simulate calculation delay for better UX
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
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 py-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10"></div>
        <div className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Solar Cost Calculator
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Discover your potential savings and environmental impact with
                our advanced solar calculator
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Input Section */}
        <div className="relative -mt-8 mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 sm:p-12">
            <div className="max-w-md mx-auto">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Monthly Electricity Bill
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={bill}
                      onChange={(e) => setBill(e.target.value)}
                      placeholder="Enter your bill amount"
                      className="w-full pl-8 pr-4 py-4 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Enter amount between ₹500 - ₹10,000
                  </p>
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={isCalculating}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Calculating...</span>
                    </div>
                  ) : (
                    "Calculate Solar Savings"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {data && (
          <div className="space-y-8 animate-in fade-in duration-700">
            {/* System Requirements */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white text-center">
                  System Requirements
                </h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        System Size
                      </h3>
                      <p className="text-3xl font-bold text-blue-600">
                        {data.systemSize} kW
                      </p>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-700 transition-colors">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Roof Area Required
                      </h3>
                      <p className="text-3xl font-bold text-emerald-600">
                        {data.roofArea} sq.ft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Overview */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-blue-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white text-center">
                  Your Solar Savings
                </h2>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">
                      Monthly Savings
                    </h3>
                    <p className="text-2xl sm:text-3xl font-bold text-green-600">
                      ₹{data.monthlySavings.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105">
                    <h3 className="text-sm font-medium text-gray-600 mb-2">
                      Yearly Savings
                    </h3>
                    <p className="text-2xl sm:text-3xl font-bold text-green-600">
                      ₹{data.yearlySavings.toLocaleString()}
                    </p>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 h-full flex flex-col justify-center">
                      <h3 className="text-sm font-medium text-gray-600 mb-2">
                        5-Year Guaranteed
                      </h3>
                      <p className="text-2xl sm:text-3xl font-bold text-orange-600">
                        ₹{data.guaranteedSavings.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white text-center">
                  Investment Overview
                </h2>
              </div>
              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-700">
                      Total System Cost
                    </span>
                    <span className="font-bold text-lg">
                      ₹{data.totalCost.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                    <span className="font-medium text-gray-700">
                      Central Subsidy
                    </span>
                    <span className="font-bold text-lg text-red-600">
                      ₹{data.centralSubsidy.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border-2 border-blue-200">
                    <span className="font-bold text-gray-800">
                      Net Investment
                    </span>
                    <span className="font-bold text-xl text-blue-600">
                      ₹{data.netCost.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700">
                          Lifetime Savings
                        </h3>
                        <p className="text-xl font-bold text-green-600">
                          ₹{data.lifetimeSavings.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-700">
                          Return on Investment
                        </h3>
                        <p className="text-xl font-bold text-purple-600">
                          {data.roi}% p.a.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Zero Investment Option */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white text-center">
                  ₹0 Down Payment Option
                </h2>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="font-medium text-gray-700">
                      Required Down Payment
                    </span>
                    <span className="font-bold text-lg">
                      ₹{data.minDownPayment.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                    <span className="font-medium text-gray-700">
                      Subsidy Coverage
                    </span>
                    <span className="font-bold text-lg text-green-600">
                      -₹{data.minDownPayment.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                    <span className="font-bold text-gray-800">
                      Net Down Payment
                    </span>
                    <span className="font-bold text-xl text-green-600">
                      ₹{data.netDownPayment.toLocaleString()}
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 text-center">
                      <h3 className="font-medium text-gray-700 mb-1">
                        EMI Tenure
                      </h3>
                      <p className="text-lg font-bold text-blue-600">
                        {data.emiTenure}
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl p-4 text-center">
                      <h3 className="font-medium text-gray-700 mb-1">
                        Monthly EMI
                      </h3>
                      <p className="text-lg font-bold text-purple-600">
                        ₹{data.emiAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white text-center">
                  Environmental Impact
                </h2>
                <p className="text-center text-green-100 mt-2">
                  Your contribution to a cleaner planet
                </p>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="group">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-700 mb-2">
                        CO₂ Mitigated
                      </h3>
                      <p className="text-xl font-bold text-blue-600">
                        {data.co2Mitigated} kg
                      </p>
                    </div>
                  </div>

                  <div className="group">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-700 transition-colors">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Trees Equivalent
                      </h3>
                      <p className="text-xl font-bold text-green-600">
                        {data.treesPlanted} trees
                      </p>
                    </div>
                  </div>

                  <div className="group sm:col-span-2 lg:col-span-1">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 transition-colors">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-700 mb-2">
                        Car Miles Saved
                      </h3>
                      <p className="text-xl font-bold text-purple-600">
                        {data.distanceEquivalent} km
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-700/20 text-white">
              <div className="px-8 py-6 border-b border-gray-700/30">
                <h2 className="text-2xl font-bold text-center">
                  Important Disclaimer
                </h2>
              </div>
              <div className="p-8">
                <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      1
                    </span>
                    <p>
                      Monthly, yearly and 5-year savings are calculated based on
                      total savings over 25 years, assuming 1% annual
                      degradation and 3% annual inflation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                      2
                    </span>
                    <p>
                      Prices and EMI shown are indicative and may vary based on
                      location, system specifications, roof conditions, local
                      regulations, financing options, and service packages
                      selected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
