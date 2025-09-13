import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="no-bottom no-top" id="content">
        <section
          id="subheader"
          className="bg-dark text-light relative jarallax"
        >
          <img src="images/background/2.webp" className="jarallax-img" alt="" />
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-lg-12">
                <div className="spacer-double sm-hide"></div>
                <h5 className="wow fadeInUp">
                  Power Your Future with Clean Energy
                </h5>
                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">
                  About Us
                </h1>
                <div className="border-bottom mb-3"></div>
                <ul className="crumb wow fadeInUp">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">About Us</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gradient-edge-bottom h-50"></div>
          <div className="sw-overlay"></div>
        </section>

        <section>
          <div className="container">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-lg-6">
                <div className="relative">
                  <div className="bg-dark text-light text-center rounded-1 abs w-200px p-4 m-4 bottom-0 z-3 overflow-hidden wow zoomIn">
                    <h2 className="mb-0">325%</h2>
                    <p className="lh-1-5">Average increase in solar panel</p>
                  </div>
                  <div className="rounded-1 w-90 overflow-hidden wow zoomIn">
                    <img
                      src="images/misc/s6.webp"
                      className="w-100 wow scaleIn"
                      alt=""
                    />
                  </div>
                  <div
                    className="rounded-1 w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn"
                    data-wow-delay=".2s"
                  >
                    <img
                      src="images/misc/s4.webp"
                      className="w-100 wow scaleIn"
                      data-wow-delay=".2s"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="subtitle s2 mb-3 wow fadeInUp"
                  data-wow-delay=".0s"
                >
                  About Us
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  Solar Solutions for Maximum Energy Savings
                </h2>
                <p>
                  At Solaria, we are passionate about harnessing the power of
                  the sun to create a cleaner, more sustainable future. Since
                  our founding, we’ve been committed to making solar energy
                  accessible and affordable for homeowners and businesses alike.
                  Our team of experts specializes in designing and installing
                  high-efficiency solar systems tailored to each customer’s
                  unique energy needs, helping them reduce electricity bills
                  while lowering their carbon footprint.
                </p>

                <p>
                  We believe that switching to solar shouldn’t be complicated.
                  That’s why we offer end-to-end solutions, from consultation
                  and financing to installation and ongoing support. With a
                  focus on quality, transparency, and customer satisfaction,
                  Solaria is more than just a solar provider, we’re your
                  long-term energy partner, dedicated to powering your world
                  with confidence and care.
                </p>
              </div>
            </div>
          </div>

          <div className="spacer-double"></div>
        </section>

        <section className="bg-light">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="bg-white relative border-gray rounded-1 overflow-hidden">
                  <img src="images/team/1.webp" className="w-100" alt="" />
                  <div className="p-3 text-center">
                    <h4 className="mb-0">Thomas Bennett</h4>
                    <p className="mb-2">Solar Panel Installer</p>
                    <div className="social-icons">
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="bg-white relative border-gray rounded-1 overflow-hidden">
                  <img src="images/team/2.webp" className="w-100" alt="" />
                  <div className="p-3 text-center">
                    <h4 className="mb-0">Barbara Charline</h4>
                    <p className="mb-2">Solar Energy Consultant</p>
                    <div className="social-icons">
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="bg-white relative border-gray rounded-1 overflow-hidden">
                  <img src="images/team/3.webp" className="w-100" alt="" />
                  <div className="p-3 text-center">
                    <h4 className="mb-0">Joshua Henry</h4>
                    <p className="mb-2">Solar Maintenance Technician</p>
                    <div className="social-icons">
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="bg-white relative border-gray rounded-1 overflow-hidden">
                  <img src="images/team/4.webp" className="w-100" alt="" />
                  <div className="p-3 text-center">
                    <h4 className="mb-0">Madison Jane</h4>
                    <p className="mb-2">Solar Project Coordinator</p>
                    <div className="social-icons">
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bg-hover-2 text-hover-white fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative jarallax overflow-hidden">
          <img
            src="images/background/gradient-2.webp"
            className="jarallax-img"
            alt=""
          />
          <div className="container">
            <div className="row g-4 gx-5">
              <div className="col-lg-6">
                <h4 className="mb-4 wow fadeInRight">Our Vision</h4>
                <p className="fs-24 fw-600 lh-1-4 wow fadeInUp">
                  To empower communities, homes, and businesses by delivering
                  clean, affordable, and reliable solar energy solutions that
                  reduce environmental impact, promote energy independence, and
                  enhance long-term economic resilience. We envision a world
                  where every individual has access to sustainable power,
                  enabling a healthier planet and a brighter future for
                  generations to come.
                </p>
              </div>

              <div className="col-lg-6">
                <h4 className="mb-4 wow fadeInRight">Our Mission</h4>
                <ol className="ol-style-1">
                  <li className="wow fadeInUp" data-wow-delay=".2s">
                    <span className="fw-bold text-dark">
                      Clean Energy Access:
                    </span>{" "}
                    We aim to make solar power accessible and affordable for
                    all, reducing dependence on fossil fuels and promoting
                    energy independence.
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".4s">
                    <span className="fw-bold text-dark">Sustainability:</span>{" "}
                    Our focus is on driving environmental sustainability through
                    innovative solar technologies that reduce carbon footprints
                    and promote green living.
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".6s">
                    <span className="fw-bold text-dark">
                      Excellence & Reliability:
                    </span>{" "}
                    We are committed to delivering top-quality solar systems
                    backed by exceptional service, ensuring long-term
                    performance and customer satisfaction.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <img
            src="images/misc/flowers-crop-4.webp"
            className="w-20 absolute start-0 bottom-0 sw-anim"
            alt=""
          />
        </section>

        <section className="bg-dark text-light pt-60 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="relative">
                  <div className="row g-4 grid-divider sm-hide">
                    <div className="col-lg-4 col-md-6 mb-sm-30">
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 id-color icon_phone"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Need Our Services?</h4>
                          <p>Call: +1 800 987 654</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-sm-30">
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 id-color icon_clock"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Work Hours</h4>
                          <p>Mon to Sat 08:00 - 17:00</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-sm-30">
                      <div className="d-flex justify-content-center">
                        <i className="fs-60 id-color icon_mail"></i>
                        <div className="ms-3">
                          <h4 className="mb-0">Email Us</h4>
                          <p>support@solaria.com</p>
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
      <Footer />
    </div>
  );
};

export default AboutUs;
