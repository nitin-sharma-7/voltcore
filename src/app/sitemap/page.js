import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const Sitemap = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/servicespage" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Cost Calculator", path: "/costcalculate" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const resources = [
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Careers", path: "/careers" },
    { name: "Projects", path: "/projects" },
  ];

  const legal = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookie-policy" },
  ];

  return (
    <div>
      <Header />
      <div className="no-bottom no-top" id="content">
        <section
          id="subheader"
          className="bg-dark text-light relative jarallax"
        >
          <div className="container relative z-2">
            <div className="row gy-4 gx-5 align-items-center">
              <div className="col-lg-12">
                <div className="spacer-double sm-hide"></div>
                <h5 className="wow fadeInUp">
                  Power Your Future with Clean Energy
                </h5>
                <h1 className="mb-3 wow fadeInUp" data-wow-delay=".2s">
                  Sitemap
                </h1>
                <div className="border-bottom mb-3"></div>
                <ul className="crumb wow fadeInUp">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">Sitemap</li>
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
              <div className="col-lg-12">
                <div className="mb-5">
                  <h2 className="mb-4">Main Pages</h2>
                  <div className="row g-3">
                    {pages.map((page, index) => (
                      <div className="col-md-4" key={index}>
                        <Link 
                          href={page.path} 
                          className="d-block p-3 border rounded-1 text-decoration-none hover-bg-light"
                        >
                          {page.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <h2 className="mb-4">Resources</h2>
                  <div className="row g-3">
                    {resources.map((resource, index) => (
                      <div className="col-md-4" key={index}>
                        <Link 
                          href={resource.path} 
                          className="d-block p-3 border rounded-1 text-decoration-none hover-bg-light"
                        >
                          {resource.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <h2 className="mb-4">Legal</h2>
                  <div className="row g-3">
                    {legal.map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <Link 
                          href={item.path} 
                          className="d-block p-3 border rounded-1 text-decoration-none hover-bg-light"
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
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

export default Sitemap;