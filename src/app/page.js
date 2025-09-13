'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
// import { Calculator } from '@/components/Calculator';

export default function Home() {
  useEffect(() => {
    // Initialize any required scripts after component mounts
    const initScripts = () => {
      // This would normally initialize swiper and other plugins
      // For now, we'll just ensure the page loads properly
      console.log('Page scripts initialized');
    };
    
    initScripts();
  }, []);

  return (
    <div id="wrapper">
      <a href="#" id="back-to-top"></a>

      {/* preloader begin */}
      {/* <div id="de-loader"></div> */}
      {/* preloader end */}

      {/* header begin */}
      <Header />
      {/* header end */}

      {/* content begin */}
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        
        <Hero />
        {/* <Calculator/> */}

        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h5 className="wow fadeInRight">About Us</h5>
              </div>
              <div className="col-lg-9">
                <h3 className="wow fadeInRight" data-wow-delay=".2s">
                  Switch to solar and save money while saving the planet. Our
                  expert team provides clean, reliable energy solutions for
                  homes and businesses.
                  <span className="op-3">
                  Go green, reduce your bills, and enjoy energy independence
                  today!
                  </span>
                </h3>

                <div className="spacer-single"></div>

                <div className="row g-4 gx-5">
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="de_count lh-1-6 wow fadeInRight"
                      data-wow-delay=".2s"
                    >
                      <h3 className="fs-40 mb-0">
                        <span className="timer" data-to="100" data-speed="3000">
                          0
                        </span>
                        K+
                      </h3>
                      Solar Panels Installed
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="de_count lh-1-6 wow fadeInRight"
                      data-wow-delay=".4s"
                    >
                      <h3 className="fs-40 mb-0">
                        <span className="timer" data-to="25" data-speed="3000">
                          0
                        </span>
                        K+
                      </h3>
                      Homes Powered
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div
                      className="de_count lh-1-6 wow fadeInRight"
                      data-wow-delay=".6s"
                    >
                      <h3 className="fs-40 mb-0">
                        <span className="timer" data-to="16" data-speed="3000">
                          0
                        </span>
                        +
                      </h3>
                      Years of Solar Expertise
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-top">
          <div className="container">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="relative">
                  <div
                    className="relative overflow-hidden z-2 mb-5 rounded-1 mb-4 w-60 soft-shadow wow zoomIn"
                  >
                    <Image
                      src="/images/misc/p1.webp"
                      className="w-100 wow scaleIn"
                      data-wow-duration="1s"
                      alt="Solar panel installation"
                      width={600}
                      height={400}
                    />
                  </div>

                  <div
                    className="abs overflow-hidden top-0 end-0 mt-5 rounded-1 mb-4 w-60 wow zoomIn"
                    data-wow-delay=".2s"
                  >
                    <Image
                      src="/images/misc/p2.webp"
                      className="w-100 wow scaleIn"
                      data-wow-duration="1s"
                      alt="Solar energy system"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className="subtitle id-color wow fadeInUp"
                  data-wow-delay=".0s"
                >
                  Solar Power for Smarter Future
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Clean, Reliable Energy Made
                  <span className="op-3">Simple and Affordable</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Discover the power of the sun with our end-to-end solar energy
                  solutions. Whether you&apos;re looking to reduce your electricity
                  bills, increase property value, or lower your carbon
                  footprint, we make it easy to go solar.
                </p>

                <div className="border-bottom mb-4"></div>

                <ul
                  className="ul-check fw-600 mb-4 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <li>Save money by generating your own power.</li>
                  <li>Reduce your carbon footprint and protect the planet.</li>
                  <li>Solar homes often see a higher resale value.</li>
                  <li>Reduce reliance on the grid and rising utility costs.</li>
                </ul>

                <a
                  className="btn-main fx-slide wow fadeInUp"
                  data-wow-delay=".9s"
                  href="get-a-quote.html"
                >
                  <span>Get a Quote</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle wow fadeInUp mb-3">
                  Solar Energy Services
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Reliable, Renewable, and
                  <span className="op-3">Cost-Effective Energy</span>
                </h2>
                <p className="lead mb-0 wow fadeInUp">
                  Switch to solar and enjoy lower bills, clean energy, and
                  expert service designed for homes, businesses, and beyond.
                </p>
                <div className="spacer-single"></div>
                <div className="spacer-half"></div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-4 col-sm-6">
                <div className="hover">
                  <div className="relative overflow-hidden">
                    <a href="service-single.html" className="d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <Image
                          src="/images/services/1.webp"
                          className="w-100 hover-scale-1-2"
                          alt="Solar panel installation service"
                          width={400}
                          height={300}
                        />
                      </div>
                    </a>
                    <div
                      className="p-30 relative bg-white rounded-1 mx-4 mt-min-100"
                    >
                      <div
                        className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px"
                      >
                        <a href="project-single.html">
                          <Image
                            src="/images/misc/up-right-arrow.webp"
                            className="w-60px p-20"
                            alt="View details"
                            width={60}
                            height={60}
                          />
                        </a>
                      </div>
                      <h4>Solar Panel Installation</h4>
                      <p className="mb-0">
                        Fast, safe, and certified installation by experienced
                        technicians.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="hover">
                  <div className="relative overflow-hidden">
                    <a href="service-single.html" className="d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <Image
                          src="/images/services/2.webp"
                          className="w-100 hover-scale-1-2"
                          alt="Solar panel maintenance service"
                          width={400}
                          height={300}
                        />
                      </div>
                    </a>
                    <div
                      className="p-30 relative bg-white rounded-1 mx-4 mt-min-100"
                    >
                      <div
                        className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px"
                      >
                        <a href="project-single.html">
                          <Image
                            src="/images/misc/up-right-arrow.webp"
                            className="w-60px p-20"
                            alt="View details"
                            width={60}
                            height={60}
                          />
                        </a>
                      </div>
                      <h4>Solar Panel Maintenance</h4>
                      <p className="mb-0">
                        Ensure peak performance with regular inspections and
                        cleaning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="hover">
                  <div className="relative overflow-hidden">
                    <a href="service-single.html" className="d-block hover">
                      <div className="relative overflow-hidden rounded-1">
                        <Image
                          src="/images/services/3.webp"
                          className="w-100 hover-scale-1-2"
                          alt="Custom solar system design service"
                          width={400}
                          height={300}
                        />
                      </div>
                    </a>
                    <div
                      className="p-30 relative bg-white rounded-1 mx-4 mt-min-100"
                    >
                      <div
                        className="abs top-0 end-0 mt-min-30 me-4 circle bg-color w-60px h-60px"
                      >
                        <a href="project-single.html">
                          <Image
                            src="/images/misc/up-right-arrow.webp"
                            className="w-60px p-20"
                            alt="View details"
                            width={60}
                            height={60}
                          />
                        </a>
                      </div>
                      <h4>Custom System Design</h4>
                      <p className="mb-0">
                        We create efficient solar setups tailored to your energy
                        goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a className="btn-main fx-slide" href="services.html">
                  <span>View All Services</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-dark text-light">
          <div className="container relative z-1">
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="relative">
                  <div
                    className="bg-blur text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden wow zoomIn"
                  >
                    <h2 className="mb-0">325%</h2>
                    <p className="lh-1-5">Average increase in solar panel</p>
                  </div>
                  <div className="rounded-1 w-90 overflow-hidden wow zoomIn">
                    <Image
                      src="/images/misc/s4.webp"
                      className="w-100 wow scaleIn"
                      alt="Solar panel efficiency"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div
                    className="rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn"
                    data-wow-delay=".2s"
                  >
                    <Image
                      src="/images/misc/s1.webp"
                      className="w-100 wow scaleIn"
                      data-wow-delay=".2s"
                      alt="Solar installation"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="subtitle id-color wow fadeInUp">
                  Trusted & Affordable
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Why Choose Us?
                </h2>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".0s">
                        <h4>Professional Team</h4>
                        <p className="mb-0">
                          Certified professionals with years of solar
                          installation experience.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".2s">
                        <h4>Customized Solutions</h4>
                        <p className="mb-0">
                          Systems tailored to your energy needs and property
                          layout.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".4s">
                        <h4>Affordable Plans</h4>
                        <p className="mb-0">
                          Flexible financing and guidance on maximizing
                          incentives.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".6s">
                        <h4>Ongoing Support</h4>
                        <p className="mb-0">
                          Full-service maintenance and system monitoring after
                          installation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay=".8s">
                        <h4>Top-Tier Equipment</h4>
                        <p className="mb-0">
                          We use premium solar panels and inverters for maximum
                          efficiency.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="h-100 rounded-1">
                      <div className="relative wow fadeInUp" data-wow-delay="1s">
                        <h4>Fast Installation</h4>
                        <p className="mb-0">
                          Efficient project turnaround without compromising on
                          safety or quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer-double"></div>
        </section>

        <section>
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-6 text-center">
                <div className="subtitle wow fadeInUp mb-3">Our Solar Projects</div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Powering a Brighter Future
                  <span className="op-3">with Clean Energy</span>
                </h2>
                <p className="lead mb-0 wow fadeInUp">
                  Explore our latest solar installations—from residential
                  rooftops to commercial systems—each designed for maximum
                  efficiency and sustainability.
                </p>
                <div className="spacer-single"></div>
                <div className="spacer-half"></div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-12 wow fadeInUp">
                <div className="overflow-hidden rounded-1">
                  <div className="relative wow fadeIn">
                    <div
                      className="owl-custom-nav menu-float"
                      data-target="#project-single-carousel"
                    >
                      <a className="btn-next"></a>
                      <a className="btn-prev"></a>

                      <div
                        id="project-single-carousel"
                        className="owl-3-cols owl-carousel owl-theme"
                      >
                        <div className="item">
                          <a href="project-single.html">
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>BrightHome Energy</h3>
                                <p className="mb-0 hover-mh-60">
                                  Home Installation
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/1.webp"
                                className="w-100 hover-scale-1-2"
                                alt="BrightHome Energy solar project"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </a>
                        </div>

                        <div className="item">
                          <a href="project-single.html">
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>GreenMart Supermarket</h3>
                                <p className="mb-0 hover-mh-60">
                                  Solar Panel Upgrades
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/2.webp"
                                className="w-100 hover-scale-1-2"
                                alt="GreenMart Supermarket solar project"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </a>
                        </div>

                        <div className="item">
                          <a href="project-single.html">
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>EcoSchool Initiative</h3>
                                <p className="mb-0 hover-mh-60">
                                  Custom System Design
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/3.webp"
                                className="w-100 hover-scale-1-2"
                                alt="EcoSchool Initiative solar project"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </a>
                        </div>

                        <div className="item">
                          <a href="project-single.html">
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>UrbanSolar 360</h3>
                                <p className="mb-0 hover-mh-60">
                                  System Monitoring & Reporting
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/4.webp"
                                className="w-100 hover-scale-1-2"
                                alt="UrbanSolar 360 project"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </a>
                        </div>

                        <div className="item">
                          <a href="project-single.html">
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>Solaria Cares</h3>
                                <p className="mb-0 hover-mh-60">
                                  Community Project
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/5.webp"
                                className="w-100 hover-scale-1-2"
                                alt="Solaria Cares community project"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </a>
                        </div>

                        <div className="item">
                          <a href="project-single.html">
                            <div
                              className="hover rounded-1 relative overflow-hidden text-light"
                            >
                              <div className="abs p-40 top-0 z-3">
                                <Image
                                  src="/images/misc/up-right-arrow-white.webp"
                                  className="w-10 mb-3 wow scaleIn"
                                  alt="View project"
                                  width={40}
                                  height={40}
                                />
                              </div>
                              <div className="abs p-40 bottom-0 z-3">
                                <h3>SunSmart Office</h3>
                                <p className="mb-0 hover-mh-60">
                                  Solar Battery Storage
                                </p>
                              </div>
                              <div
                                className="hover-op-05 bg-dark abs w-100 h-100 top-0 start-0 z-2"
                              ></div>
                              <Image
                                src="/images/projects/6.webp"
                                className="w-100 hover-scale-1-2"
                                alt="SunSmart Office solar battery storage project"
                                width={400}
                                height={300}
                              />
                              <div className="gradient-edge-bottom h-50"></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
{/*   yellow section */}
      <section className="p-0" aria-label="section">
  <div className="bg-gray-900 flex  leading-none overflow-hidden">
    <div className="marquee-right flex items-center whitespace-nowrap">
      {/* Duplicate content for smooth scrolling */}
      {[...Array(2)].map((_, idx) => (
        <React.Fragment key={idx}>
          <span className="text-4xl font-bold mx-4 text-yellow-400">Solar Panel Installation</span>
          <Image src="/images/logo-icon.webp" className="w-8 h-8 mx-4" alt="Solaria" width={32} height={32} />
          <span className="text-4xl mx-4 text-white">Energy Storage Systems</span>
          <Image src="/images/logo-icon.webp" className="w-8 h-8 mx-4" alt="Solaria" width={32} height={32} />
          <span className="text-4xl font-bold mx-4 text-yellow-400">Off-Grid Solutions</span>
          <Image src="/images/logo-icon.webp" className="w-8 h-8 mx-4" alt="Solaria" width={32} height={32} />
          <span className="text-4xl mx-4 text-white">System Maintenance</span>
          <Image src="/images/logo-icon.webp" className="w-8 h-8 mx-4" alt="Solaria" width={32} height={32} />
          <span className="text-4xl font-bold mx-4 text-yellow-400">Solar Financing</span>
          <Image src="/images/logo-icon.webp" className="w-8 h-8 mx-4" alt="Solaria" width={32} height={32} />
          <span className="text-4xl mx-4 text-white">Energy Efficiency Audit</span>
          <Image src="/images/logo-icon.webp" className="w-8 h-8 mx-4" alt="Solaria" width={32} height={32} />
          <span className="text-4xl font-bold mx-4 text-yellow-400">EV Charger Installation</span>
          <Image src="/images/logo-icon.webp" className="w-8 h-8 mx-4" alt="Solaria" width={32} height={32} />
        </React.Fragment>
      ))}
    </div>
  </div>
</section>



        {/* faq */}
        <section>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-5">
                <div
                  className="subtitle id-color wow fadeInUp"
                  data-wow-delay=".0s"
                >
                  Everything You Need to Know
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="col-lg-7">
                <div className="accordion s2 wow fadeInUp">
                  <div className="accordion-section">
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a1"
                    >
                      How does solar energy work?
                    </div>
                    <div className="accordion-section-content" id="accordion-a1">
                      Solar panels absorb sunlight using photovoltaic (PV)
                      cells, which convert it into direct current (DC)
                      electricity. An inverter then transforms that into
                      alternating current (AC), which powers your home or
                      business.
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a2"
                    >
                      Will solar panels reduce my energy bills?
                    </div>
                    <div className="accordion-section-content" id="accordion-a2">
                      Yes. By generating your own electricity, you can
                      significantly reduce or even eliminate your monthly
                      utility bills, depending on your system size and energy
                      usage.
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a3"
                    >
                      Is my home suitable for solar panels?
                    </div>
                    <div className="accordion-section-content" id="accordion-a3">
                      Most homes are. Ideally, you&apos;ll need a roof with good sun
                      exposure (minimal shade), enough space for the panels, and
                      a structure in good condition. We provide a free
                      assessment to confirm suitability.
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a4"
                    >
                      What&apos;s the lifespan of a solar system?
                    </div>
                    <div className="accordion-section-content" id="accordion-a4">
                      Solar panels typically last 25-30 years or more. Inverters
                      and batteries may need replacement sooner, but most
                      systems continue to function well with minimal
                      maintenance.
                    </div>
                    <div
                      className="accordion-section-title"
                      data-tab="#accordion-a5"
                    >
                      Do solar panels work on cloudy days?
                    </div>
                    <div className="accordion-section-content" id="accordion-a5">
                      Yes, solar panels still generate electricity in cloudy
                      conditions—just at a lower output. Efficiency may drop by
                      10-25%, but you&apos;ll still be producing power.
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* youtube video  */}
        <section aria-label="section" className="p-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <a
                  className="d-block hover popup-youtube"
                  href="https://www.youtube.com/watch?v=C6rf51uHWJg"
                >
                  <div className="relative overflow-hidden">
                    <div
                      className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2"
                    >
                      <div className="player circle wow scaleIn"><span></span></div>
                    </div>
                    <div
                      className="absolute w-100 h-100 top-0 bg-dark hover-op-05"
                    ></div>
                    <Image
                      src="/images/background/w1.webp"
                      className="w-100 hover-scale-1-1"
                      alt="Watch our solar energy video"
                      width={1920}
                      height={1080}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* yellow bottom section */}
        <section className="bg-color py-5 pb-4">
          <div className="container relative z-1">
            <div className="row g-4 gx-5 align-items-center">
              <div className="col-lg-12">
                <div className="relative">
                  <div className="row g-4 grid-divider sm-hide">
                    <div
                      className="col-lg-4 col-md-6 mb-sm-30 wow fadeIn fadeInRight"
                      data-wow-delay=".2s"
                    >
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 text-dark icon_phone"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">We&apos;re the solar experts</h4>
                          <p className="text-dark">Call: +1 800 987 654</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-4 col-md-6 mb-sm-30 wow fadeIn fadeInRight"
                      data-wow-delay=".4s"
                    >
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 text-dark icon_clock"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Customer&apos;s choice</h4>
                          <p className="text-dark">Mon to Sat 08:00 - 17:00</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-4 col-md-6 mb-sm-30 wow fadeIn fadeInRight"
                      data-wow-delay=".6s"
                    >
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 text-dark icon_mail"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Email Us</h4>
                          <p className="text-dark">support@solaria.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* content end */}

      {/* footer begin */}
      <Footer />
      {/* footer end */}
    </div>
  );
}