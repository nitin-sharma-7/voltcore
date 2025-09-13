import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <Header />

      <section id="subheader" className="bg-dark text-light relative jarallax">
        <Image src="/images/background/2.webp" className="jarallax-img" alt="Testimonials background" width={1920} height={1080} />
        <div className="container relative z-2">
          <div className="row gy-4 gx-5 align-items-center">
            <div className="col-lg-12">
              <div className="spacer-double sm-hide"></div>
              <h5 className="wow fadeInUp">
                Power Your Future with Clean Energy
              </h5>
              <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">
                Testimonials
              </h1>
              <div className="border-bottom mb-3"></div>
              <ul className="crumb wow fadeInUp">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">Testimonials</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gradient-edge-bottom h-50"></div>
        <div className="sw-overlay"></div>
      </section>

      <section>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div className="col-md-4" key={num}>
                <div className="border-gray rounded-1 p-30">
                  <div className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Image
                        className="w-40px circle me-3"
                        alt={[
                          "Ethan Moore",
                          "Amanda Lee",
                          "Michael Chen",
                          "Lisa Nguyen",
                          "David Rodriguez",
                          "Sarah Thompson",
                          "Ryan Kim",
                          "Emily Davis",
                        ][num - 1]}
                        src={`/images/testimonial/${num}.webp`}
                        width={40}
                        height={40}
                      />
                      <div className="mt-2">
                        <div className="text-dark fw-bold lh-1">
                          {
                            [
                              "Ethan Moore",
                              "Amanda Lee",
                              "Michael Chen",
                              "Lisa Nguyen",
                              "David Rodriguez",
                              "Sarah Thompson",
                              "Ryan Kim",
                              "Emily Davis",
                            ][num - 1]
                          }
                        </div>
                        <small>
                          {
                            [
                              "8 May 2025",
                              "12 January 2025",
                              "5 February 2025",
                              "23 February 2025",
                              "11 March 2025",
                              "26 March 2025",
                              "3 April 2025",
                              "15 April 2025",
                            ][num - 1]
                          }
                        </small>
                      </div>
                    </div>
                    <Image
                      src="/images/misc/google-icon.svg"
                      className="w-30px"
                      alt="Google review icon"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="de-rating-ext mb-2">
                    <span className="d-stars">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </span>
                    <span className="ms-2 text-white">5.0</span>
                  </div>
                  <p>
                    {
                      [
                        `"Professional, efficient, and extremely helpful. They consistently deliver beyond our expectations with every request."`,
                        `"Fantastic service and reliable support every time. They really take the time to understand our needs and offer effective solutions."`,
                        `"We've relied on their expertise for over a year and they never disappoint. Their team is fast, efficient, and friendly."`,
                        `"Super friendly team and quick to respond to any issue. They’ve saved us time and stress more times than I can count."`,
                        `"Dependable and consistent. We always get a clear explanation of the problem and a fast resolution without hidden costs."`,
                        `"They always go the extra mile. It’s rare to find a company that consistently delivers top-tier customer service like this."`,
                        `"Incredible support and very responsive team. We've never had an issue that wasn't solved quickly and professionally."`,
                        `"From day one, we’ve been impressed with their reliability. Great communication and hassle-free maintenance every time."`,
                      ][num - 1]
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      <Footer />
    </div>
  );
};

export default Testimonials;
