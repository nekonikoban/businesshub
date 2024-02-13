import Script from 'next/script';

export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>BusinessHub</title>
      <meta name="description" content="" />
      <meta name="author" content="" />
      {/* mobile specific metas
        ================================================== */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* CSS
        ================================================== */}
      <link rel="stylesheet" href="css/base.css" />
      <link rel="stylesheet" href="css/vendor.css" />
      <link rel="stylesheet" href="css/main.css" />
      {/* script
        ================================================== */}
        <Script src="js/modernizr.js"></Script>
        <Script src="js/pace.min.js"></Script>
      {/* favicons
        ================================================== */}
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="icon" href="favicon.ico" type="image/x-icon" />
      {/* header
        ================================================== */}
      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src="./images/logo.svg" alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav">
          <a href="#0" className="header-nav__close" title="close">
            <span>Close</span>
          </a>
          <div className="header-nav__content">
            <h3>Navigation</h3>
            <ul className="header-nav__list">
              <li className="current">
                <a className="smoothscroll" href="#home" title="home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="services">
                  Services
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#works" title="works">
                  Works
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#clients" title="clients">
                  Clients
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" title="contact">
                  Contact
                </a>
              </li>
            </ul>
            <p>
              Perspiciatis hic praesentium nesciunt. Et neque a dolorum{" "}
              <a href="#0">voluptatem</a> porro iusto sequi veritatis libero enim.
              Iusto id suscipit veritatis neque reprehenderit.
            </p>
            <ul className="header-nav__social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* end header-nav__content */}
        </nav>{" "}
        {/* end header-nav */}
        <a className="header-menu-toggle" href="#0">
          <span className="header-menu-text">Menu</span>
          <span className="header-menu-icon" />
        </a>
      </header>{" "}
      {/* end s-header */}
      {/* home
        ================================================== */}
      <section
        id="home"
        className="s-home target-section"
        data-parallax="scroll"
        data-image-src="images/hero-bg-satin.png"
        data-natural-width={3000}
        data-natural-height={2000}
        data-position-y="center"
      >
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>Welcome Business Owners</h3>
            <h1>
              Showcase Your Business
              <br />
              Connect with Entrepreneurs
              <br />
              Grow Your Influence
            </h1>
            <div className="home-content__buttons">
              <a href="#contact" className="smoothscroll btn btn--stroke">
                Start Posting
              </a>
              <a href="#about" className="smoothscroll btn btn--stroke">
                Learn More
              </a>
            </div>
          </div>
          <div className="home-content__scroll">
            <a href="#about" className="scroll-link smoothscroll">
              <span>Scroll Down</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div>{" "}
        {/* end home-content */}
        <ul className="home-social">
          <li>
            <a href="#0">
              <i className="fa fa-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-twitter" aria-hidden="true" />
              <span>Twiiter</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-behance" aria-hidden="true" />
              <span>Behance</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-dribbble" aria-hidden="true" />
              <span>Dribbble</span>
            </a>
          </li>
        </ul>
        {/* end home-social */}
      </section>{" "}
      {/* end s-home */}
      {/* about
        ================================================== */}
      <section id="about" className="s-about">
        <div className="row section-header has-bottom-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead subhead--dark">Welcome Entrepreneurs</h3>
            <h1 className="display-1 display-1--light">Meet BusinessHub</h1>
          </div>
        </div>{" "}
        {/* end section-header */}
        <div className="row about-desc" data-aos="fade-up">
          <div className="col-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt.
            </p>
          </div>
        </div>{" "}
        {/* end about-desc */}
        <div
          className="row about-stats stats block-1-4 block-m-1-2 block-mob-full"
          data-aos="fade-up"
        >
          <div className="col-block stats__col ">
            <div className="stats__count">127</div>
            <h5>Businesses Featured</h5>
          </div>
          <div className="col-block stats__col">
            <div className="stats__count">1505</div>
            <h5>Cups of Coffee Shared</h5>
          </div>
          <div className="col-block stats__col">
            <div className="stats__count">109</div>
            <h5>Projects Showcased</h5>
          </div>
          <div className="col-block stats__col">
            <div className="stats__count">102</div>
            <h5>Satisfied Entrepreneurs</h5>
          </div>
        </div>{" "}
        {/* end about-stats */}
        <div className="about__line" />
      </section>{" "}
      {/* end s-about */}
      {/* services
        ================================================== */}
      <section id="services" className="s-services">
        <div className="row section-header has-bottom-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Business Solutions</h3>
            <h1 className="display-2">Discover How We Can Elevate Your Business</h1>
          </div>
        </div>{" "}
        {/* end section-header */}
        <div className="row services-list block-1-2 block-tab-full">
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-paint-brush" />
            </div>
            <div className="service-text">
              <h3 className="h2">BusinessHub Branding</h3>
              <p>
                Create a compelling brand identity that resonates with your audience
                and sets your business apart. Our experts will guide you through the
                process of building a strong and memorable brand.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-group" />
            </div>
            <div className="service-text">
              <h3 className="h2">BusinessHub Illustration</h3>
              <p>
                Illustrate your business story with visually appealing graphics. Our
                illustrators can bring your ideas to life, creating engaging visuals
                that communicate your business message effectively.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-megaphone" />
            </div>
            <div className="service-text">
              <h3 className="h2">BusinessHub Marketing</h3>
              <p>
                Drive business growth with our comprehensive marketing strategies.
                From digital marketing to traditional methods, we'll help you reach
                your target audience and increase brand visibility.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-earth" />
            </div>
            <div className="service-text">
              <h3 className="h2">BusinessHub Web Design</h3>
              <p>
                Enhance your online presence with a professional website. Our web
                design services focus on creating user-friendly and visually
                appealing websites that reflect the essence of your business.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-cube" />
            </div>
            <div className="service-text">
              <h3 className="h2">BusinessHub Packaging Design</h3>
              <p>
                Create a lasting impression with unique packaging designs. Our
                experts can help you design packaging that not only protects your
                products but also adds value to your brand image.
              </p>
            </div>
          </div>
          <div className="col-block service-item" data-aos="fade-up">
            <div className="service-icon">
              <i className="icon-lego-block" />
            </div>
            <div className="service-text">
              <h3 className="h2">BusinessHub Web Development</h3>
              <p>
                Transform your business ideas into functional websites. Our web
                development services cover everything from custom features to
                e-commerce solutions, ensuring a seamless online experience for your
                customers.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* end services-list */}
      </section>{" "}
      {/* end s-services */}
      {/* works
        ================================================== */}
      <section id="works" className="s-works">
        <div className="intro-wrap">
          <div
            className="row section-header has-bottom-sep light-sep"
            data-aos="fade-up"
          >
            <div className="col-full">
              <h3 className="subhead">Explore</h3>
              <h1 className="display-2 display-2--light">
                Discover Featured Business
              </h1>
            </div>
          </div>{" "}
          {/* end section-header */}
        </div>{" "}
        {/* end intro-wrap */}
        <div className="row works-content">
          <div className="col-full masonry-wrap">
            <div className="masonry">
              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="images/portfolio/gallery/portfolio_1.jpg"
                      className="thumb-link"
                      title="CoffeeShop"
                      data-size="1050x700"
                    >
                      <img
                        src="images/portfolio/portfolio_1.jpg"
                        srcSet="images/portfolio/portfolio_1.jpg 1x, images/portfolio/portfolio_1.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Coffee Shop</h3>
                    <p className="item-folio__cat">Food &amp; Beverage</p>
                  </div>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>
                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* end masonry__brick */}
              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="images/portfolio/gallery/portfolio_2.jpg"
                      className="thumb-link"
                      title="Design"
                      data-size="1050x700"
                    >
                      <img
                        src="images/portfolio/portfolio_2.jpg"
                        srcSet="images/portfolio/portfolio_2.jpg 1x, images/portfolio/portfolio_2.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Design</h3>
                    <p className="item-folio__cat">Web Design</p>
                  </div>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>
                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* end masonry__brick */}
              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="images/portfolio/gallery/portfolio_3.png"
                      className="thumb-link"
                      title="Webapp"
                      data-size="1050x700"
                    >
                      <img
                        src="images/portfolio/portfolio_3.png"
                        srcSet="images/portfolio/portfolio_3.png, images/portfolio/portfolio_3.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Webapp</h3>
                    <p className="item-folio__cat">Web Development</p>
                  </div>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>
                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* end masonry__brick */}
              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="images/portfolio/gallery/portfolio_4.jpg"
                      className="thumb-link"
                      title="Shisha Bar"
                      data-size="1050x700"
                    >
                      <img
                        src="images/portfolio/portfolio_4.jpg"
                        srcSet="images/portfolio/portfolio_4.jpg 1x, images/portfolio/portfolio_4.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Sihsha Bar</h3>
                    <p className="item-folio__cat">Tastes</p>
                  </div>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>
                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* end masonry__brick */}
              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="images/portfolio/gallery/portfolio_5.jpg"
                      className="thumb-link"
                      title="Fragnances"
                      data-size="1050x700"
                    >
                      <img
                        src="images/portfolio/portfolio_5.jpg"
                        srcSet="images/portfolio/portfolio_5.jpg 1x, images/portfolio/portfolio_5@2x.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Fragnances</h3>
                    <p className="item-folio__cat">Parfeum Shops</p>
                  </div>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>
                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* end masonry__brick */}
              <div className="masonry__brick" data-aos="fade-up">
                <div className="item-folio">
                  <div className="item-folio__thumb">
                    <a
                      href="images/portfolio/gallery/portfolio_6.jpg"
                      className="thumb-link"
                      title="Fashion"
                      data-size="1050x700"
                    >
                      <img
                        src="images/portfolio/portfolio_6.jpg"
                        srcSet="images/portfolio/portfolio_6.jpg 1x, images/portfolio/portfolio_6@2x.jpg 2x"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="item-folio__text">
                    <h3 className="item-folio__title">Fashion</h3>
                    <p className="item-folio__cat">Chlotes &amp; Shoes</p>
                  </div>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                  >
                    <i className="icon-link" />
                  </a>
                  <div className="item-folio__caption">
                    <p>
                      Vero molestiae sed aut natus excepturi. Et tempora numquam.
                      Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* end masonry__brick */}
            </div>{" "}
            {/* end masonry */}
          </div>{" "}
          {/* end col-full */}
        </div>{" "}
        {/* end works-content */}
      </section>{" "}
      {/* end s-works */}
      {/* clients
        ================================================== */}
      <section id="clients" className="s-clients">
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Our Business Partners</h3>
            <h1 className="display-2">Businesses That Trust Us</h1>
          </div>
        </div>{" "}
        {/* end section-header */}
        <div className="row clients-outer" data-aos="fade-up">
          <div className="col-full">
            <div className="clients">
              <a href="#0" title="" className="clients__slide">
                <img src="images/clients/apple.png" />
              </a>
              <a href="#0" title="" className="clients__slide">
                <img src="images/clients/atom.png" />
              </a>
              <a href="#0" title="" className="clients__slide">
                <img src="images/clients/blackberry.png" />
              </a>
              <a href="#0" title="" className="clients__slide">
                <img src="images/clients/dropbox.png" />
              </a>
              <a href="#0" title="" className="clients__slide">
                <img src="images/clients/envato.png" />
              </a>
              <a href="#0" title="" className="clients__slide">
                <img src="images/clients/firefox.png" />
              </a>
              <a href="#0" title="" className="clients__slide">
                <img src="images/clients/joomla.png" />
              </a>
              <a href="#0" title="" className="clients__slide">
                <img src="images/clients/magento.png" />
              </a>
            </div>{" "}
            {/* end clients */}
          </div>{" "}
          {/* end col-full */}
        </div>{" "}
        {/* end clients-outer */}
        <div className="row clients-testimonials" data-aos="fade-up">
          <div className="col-full">
            <div className="testimonials">
              <div className="testimonials__slide">
                <p>
                  Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio
                  nam accusantium ipsum. Laudantium quia consequatur molestias
                  delectus culpa facere hic dolores aperiam. Accusantium quos qui
                  praesentium corpori. Excepturi nam cupiditate culpa doloremque
                  deleniti repellat.
                </p>
                <img
                  src="images/avatars/user-01.jpg"
                  alt="Author image"
                  className="testimonials__avatar"
                />
                <div className="testimonials__info">
                  <span className="testimonials__name">John Doe</span>
                  <span className="testimonials__pos">CEO, BusinessHub</span>
                </div>
              </div>
              <div className="testimonials__slide">
                <p>
                  Excepturi nam cupiditate culpa doloremque deleniti repellat.
                  Veniam quos repellat voluptas animi adipisci. Nisi eaque
                  consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui
                  ipsam temporibus quisquam vel.
                </p>
                <img
                  src="images/avatars/user-05.jpg"
                  alt="Author image"
                  className="testimonials__avatar"
                />
                <div className="testimonials__info">
                  <span className="testimonials__name">Schmoe Doe</span>
                  <span className="testimonials__pos">CEO, BusinessHub</span>
                </div>
              </div>
              <div className="testimonials__slide">
                <p>
                  Repellat dignissimos libero. Qui sed at corrupti expedita voluptas
                  odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam. Autem eaque
                  officia cum exercitationem sunt voluptatum accusamus. Quasi
                  voluptas eius distinctio.
                </p>
                <img
                  src="images/avatars/user-02.jpg"
                  alt="Author image"
                  className="testimonials__avatar"
                />
                <div className="testimonials__info">
                  <span className="testimonials__name">Satya Nadella</span>
                  <span className="testimonials__pos">CEO, BusinessHub</span>
                </div>
              </div>
            </div>
            {/* end testimonials */}
          </div>{" "}
          {/* end col-full */}
        </div>{" "}
        {/* end client-testimonials */}
      </section>{" "}
      {/* end s-clients */}
      {/* contact
        ================================================== */}
      <section id="contact" className="s-contact">
        <div className="overlay" />
        <div className="contact__line" />
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Business Inquiry</h3>
            <h1 className="display-2 display-2--light">
              Connect with us to post about your business
            </h1>
          </div>
        </div>
        <div className="row contact-content" data-aos="fade-up">
          <div className="contact-primary">
            <h3 className="h6">Share Your Business</h3>
            <form
              name="contactForm"
              id="contactForm"
              method="post"
              action=""
              noValidate={true}
            >
              <fieldset>
                <div className="form-field">
                  <input
                    name="contactName"
                    type="text"
                    id="contactName"
                    placeholder="Your Name"
                    defaultValue=""
                    minLength={2}
                    required=""
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactEmail"
                    type="email"
                    id="contactEmail"
                    placeholder="Your Email"
                    defaultValue=""
                    required=""
                    aria-required="true"
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <input
                    name="contactSubject"
                    type="text"
                    id="contactSubject"
                    placeholder="Subject"
                    defaultValue=""
                    className="full-width"
                  />
                </div>
                <div className="form-field">
                  <textarea
                    name="contactMessage"
                    id="contactMessage"
                    placeholder="Your Message"
                    rows={10}
                    cols={50}
                    required=""
                    aria-required="true"
                    className="full-width"
                    defaultValue={""}
                  />
                </div>
                <div className="form-field">
                  <button className="full-width btn--primary">Submit</button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            {/* contact-warning */}
            <div className="message-warning">
              Something went wrong. Please try again.
            </div>
            {/* contact-success */}
            <div className="message-success">
              Your business details were submitted successfully! We'll get in touch
              soon.
              <br />
            </div>
          </div>{" "}
          {/* end contact-primary */}
          <div className="contact-secondary">
            <div className="contact-info">
              <h3 className="h6 hide-on-fullwidth">Contact Info</h3>
              <div className="cinfo">
                <h5>Where to Find Us</h5>
                <p>
                  123 Business Street
                  <br />
                  City, Country
                  <br />
                  ZIP Code
                </p>
              </div>
              <div className="cinfo">
                <h5>Email Us At</h5>
                <p>
                  info@businessposting.com
                  <br />
                  support@businessposting.com
                </p>
              </div>
              <div className="cinfo">
                <h5>Call Us At</h5>
                <p>
                  Phone: (+1) 555-1234
                  <br />
                  Mobile: (+1) 555-5678
                  <br />
                  Fax: (+1) 555-9876
                </p>
              </div>
              <ul className="contact-social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" aria-hidden="true" />
                  </a>
                </li>
              </ul>{" "}
              {/* end contact-social */}
            </div>{" "}
            {/* end contact-info */}
          </div>{" "}
          {/* end contact-secondary */}
        </div>{" "}
        {/* end contact-content */}
      </section>{" "}
      {/* end s-contact */}
      {/* footer
        ================================================== */}
      <footer>
        <div className="row footer-main">
          <div className="col-six tab-full left footer-desc">
            <div className="footer-logo" />
            Welcome to Business Posting - the platform where business enthusiasts
            can showcase and connect. Share your business journey with the world.
          </div>
          <div className="col-six tab-full right footer-subscribe">
            <h4>Get Updates</h4>
            <p>
              Stay informed about new businesses and exciting ventures. Subscribe to
              receive updates and news about Business Posting.
            </p>
            <div className="subscribe-form">
              <form id="mc-form" className="group" noValidate={true}>
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="email"
                  id="mc-email"
                  placeholder="Email Address"
                  required=""
                />
                <input type="submit" name="subscribe" defaultValue="Subscribe" />
                <label htmlFor="mc-email" className="subscribe-message" />
              </form>
            </div>
          </div>
        </div>{" "}
        {/* end footer-main */}
        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© 2024 Business Posting</span>
              <span>
                Website crafted with <i className="fa fa-heart" /> by{" "}
                <a href="#">BusinessHub</a>
              </span>
            </div>
            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                <i className="icon-arrow-up" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>{" "}
        {/* end footer-bottom */}
      </footer>{" "}
      {/* end footer */}
      {/* photoswipe background
        ================================================== */}
      <div aria-hidden="true" className="pswp" role="dialog" tabIndex={-1}>
        <div className="pswp__bg" />
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter" />
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              />{" "}
              <button className="pswp__button pswp__button--share" title="Share" />{" "}
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              />{" "}
              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              />
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>
            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            />{" "}
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            />
            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end photoSwipe background */}
      {/* preloader
        ================================================== */}
      <div id="preloader">
        <div id="loader">
          <div className="line-scale-pulse-out">
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      {/* Java Script
        ================================================== */}
        <Script src="js/jquery-3.2.1.min.js"></Script>
        <Script src="js/plugins.js"></Script>
        <Script src="js/main.js"></Script>
    </>
  );
}
