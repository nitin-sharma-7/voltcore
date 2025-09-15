"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="transparent">
      <div id="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between xs-hide">
                <div className="d-flex">
                  <div className="topbar-widget me-5">
                    <Link href="#">
                      <i className="icofont-location-pin"></i>100 Solar Ave, San
                      Diego, CA
                    </Link>
                  </div>
                  <div className="topbar-widget me-5">
                    <Link href="#">
                      <i className="icofont-phone"></i>+1 800 987 654
                    </Link>
                  </div>
                  <div className="topbar-widget me-5">
                    <Link href="#">
                      <i className="icofont-envelope"></i>support@solaria.com
                    </Link>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="social-icons">
                    <Link href="#">
                      <i className="fa-brands fa-facebook fa-lg"></i>
                      <span className="visually-hidden">Facebook</span>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-x-twitter fa-lg"></i>
                      <span className="visually-hidden">Twitter</span>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-youtube fa-lg"></i>
                      <span className="visually-hidden">YouTube</span>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-pinterest fa-lg"></i>
                      <span className="visually-hidden">Pinterest</span>
                    </Link>
                    <Link href="#">
                      <i className="fa-brands fa-instagram fa-lg"></i>
                      <span className="visually-hidden">Instagram</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                {/* logo begin */}
                <div id="logo">
                  <Link href="/">
                    <Image
                      className="logo-main"
                      src="/images/new-logo.png"
                      alt="Solaria Logo"
                      width={200}
                      height={60}
                    />
                    <Image
                      className="logo-mobile"
                      src="/images/new-logo.png"
                      alt="Solaria Logo"
                      width={150}
                      height={45}
                    />
                  </Link>
                </div>
                {/* logo end */}
              </div>
              <div className="de-flex-col header-col-mid">
                {/* mainemenu begin */}
                <ul id="mainmenu">
                  <li>
                    <Link className="menu-item" href="/">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link className="menu-item" href="/servicespage">
                      Services
                    </Link>
                    <ul>
                      <li>
                        <Link href="/servicespage">Solar Panel</Link>
                      </li>
                      <li>
                        <Link href="/costcalculate">Cost Calulator</Link>
                      </li>
                      {/* <li>
                        <Link href="/">Service Single</Link>
                      </li>
                      <li>
                        <Link href="/">Industries We Serve</Link>
                      </li>
                      <li>
                        <Link href="/">Service Area</Link>
                      </li>
                      <li>
                        <Link href="/">How It Works</Link>
                      </li>
                      <li>
                        <Link href="/">FAQ</Link>
                      </li> */}
                    </ul>
                  </li>
                  {/* <li>
                    <Link className="menu-item" href="/">
                      Projects
                    </Link>
                    <ul>
                      <li>
                        <Link href="/">Projects Default</Link>
                      </li>
                      <li>
                        <Link href="/">Projects Slider</Link>
                      </li>
                      <li>
                        <Link href="/">Projects Carousel</Link>
                      </li>
                      <li>
                        <Link href="/">Project Details</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link className="menu-item" href="/aboutus">
                      About Us
                    </Link>
                    {/* <ul>
                      <li>
                        <Link href="/aboutus">About Us</Link>
                      </li>
                      <li>
                        <Link href="/">Our Team</Link>
                      </li>
                      <li>
                        <Link href="/">Careers</Link>
                      </li>
                      <li>
                        <Link href="/testimonials">Testimonials</Link>
                      </li>
                    </ul> */}
                  </li>
                  {/* <li>
                    <Link className="menu-item" href="/">
                      Blog
                    </Link>
                  </li> */}
                  <li>
                    <Link className="menu-item" href="/contactus">
                      Contact
                    </Link>
                  </li>
                </ul>
                {/* mainmenu end */}
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link
                    href="/"
                    className="btn-main btn-line fx-slide hover-white"
                  >
                    <span>Get Link Quote</span>
                  </Link>
                  <span id="menu-btn"></span>
                </div>

                {/* <div id="btn-extra">
                  <span></span>
                  <span></span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
