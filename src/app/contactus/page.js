import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <section
            id="subheader"
            className="bg-dark text-light relative jarallax"
          >
            <img
              src="images/background/6.webp"
              className="jarallax-img"
              alt=""
            />
            <div className="container relative z-2">
              <div className="row gy-4 gx-5 align-items-center">
                <div className="col-lg-12">
                  <div className="spacer-double sm-hide"></div>
                  <h5 className="wow fadeInUp">
                    Power Your Future with Clean Energy
                  </h5>
                  <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">
                    Contact
                  </h1>
                  <div className="border-bottom mb-3"></div>
                  <ul className="crumb wow fadeInUp">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="gradient-edge-bottom h-50"></div>
            <div className="sw-overlay"></div>
          </section>

          <section>
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="subtitle">Get In Touch</div>
                  <h2 className="wow fadeInUp">
                    We are always ready to help you and answer your questions
                  </h2>

                  <p>
                    Whether you have a question, a suggestion, or just want to
                    say hello, this is the place to do it. Please fill out the
                    form below with your details and message, and we'll get back
                    to you as soon as possible.
                  </p>

                  <div className="row g-4 gx-5">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-clock-time me-2 id-color"></i>
                        <span>We're Open</span>
                      </div>
                      Monday - Friday 08.00 - 18.00
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-location-pin me-2 id-color"></i>
                        <span>Office Location</span>
                      </div>
                      100 Solar Ave, San Diego, CA
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-phone me-2 id-color"></i>
                        <span>Call Us Directly</span>
                      </div>
                      +1 800 987 654
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center fw-bold text-dark">
                        <i className="icofont-envelope me-2 id-color"></i>
                        <span>Send a Message</span>
                      </div>
                      support@solaria.com
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="p-40 bg-light rounded-1">
                    <h3>Get In Touch</h3>
                    <form
                      name="contactForm"
                      id="contact_form"
                      className="relative z1000"
                      method="post"
                      action="contact.php"
                    >
                      <div className="field-set">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Your Name"
                          required
                        />
                      </div>

                      <div className="field-set">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                        />
                      </div>

                      <div className="field-set">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder="Your Phone"
                          required
                        />
                      </div>

                      <div className="field-set mb20">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>

                      <div id="submit" className="mt20">
                        <input
                          type="submit"
                          id="send_message"
                          value="Send Message"
                          className="btn-main"
                        />
                      </div>

                      <div id="success_message" className="success">
                        Your message has been sent successfully. Refresh this
                        page if you want to send more messages.
                      </div>
                      <div id="error_message" className="error">
                        Sorry there was an error sending your form.
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
