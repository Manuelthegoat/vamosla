import React from "react";

const About = () => {
  return (
    <>
      <section class="inner-page-wrap">
        <div class="inner-banner-wrap">
          <div
            class="inner-baner-container"
            style={{ "background-image": "url('assets/images/img7.jpg')" }}
          >
            <div class="container p-up-2">
              <div class="inner-banner-content">
                <h1 class="page-title">About Us</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="inner-about-wrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="about-content">
                  <figure class="about-image">
                    <img src="assets/images/img27.jpg" alt="" />
                    <div class="about-image-content">
                      <h3>WE ARE BEST FOR TOURS & TRAVEL SINCE 1985 !</h3>
                    </div>
                  </figure>
                  <h2>HOW WE ARE BEST FOR TRAVEL !</h2>
                  <p>
                    Welcome to Vamos La Limited, a trusted name dedicated to
                    delivering excellence across multiple industries. We take
                    great care in providing world-class services in travel and
                    tourism, hospitality, events management, agriculture,
                    manufacturing, fashion, education, and general commerce. Our
                    mission is to create value and build lasting relationships
                    by offering innovative solutions tailored to the needs of
                    our clients.
                  </p>
                  <p>
                    We operate with integrity, professionalism, and a deep
                    commitment to customer satisfaction. Our extensive network
                    of partners and skilled professionals allows us to meet
                    diverse demands with unmatched efficiency.
                  </p>
                  <p>
                    We are more than just a business—we are a team driven by
                    passion and a desire to positively impact lives. When you
                    choose us, you choose reliability, authenticity, and a
                    partner who truly cares about your success.
                  </p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="icon-box">
                  <div class="box-icon">
                    <i aria-hidden="true" class="fas fa-umbrella-beach"></i>
                  </div>
                  <div class="icon-box-content">
                    <h3>AFFORDABLE TOURS</h3>
                    <p>
                      Iure doloremque saepe? Ultrices mi aliquam dis tempore
                      incididunt sint, cumque dis temp!
                    </p>
                  </div>
                </div>
                <div class="icon-box">
                  <div class="box-icon">
                    <i aria-hidden="true" class="fas fa-user-tag"></i>
                  </div>
                  <div class="icon-box-content">
                    <h3>BEST TOUR GUIDES</h3>
                    <p>
                      Iure doloremque saepe? Ultrices mi aliquam dis tempore
                      incididunt sint, cumque dis temp!
                    </p>
                  </div>
                </div>
                <div class="icon-box">
                  <div class="box-icon">
                    <i aria-hidden="true" class="fas fa-headset"></i>
                  </div>
                  <div class="icon-box-content">
                    <h3>AFFORDABLE TOURS</h3>
                    <p>
                      Iure doloremque saepe? Ultrices mi aliquam dis tempore
                      incididunt sint, cumque dis temp!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-img-fullcallback"
          style={{ "background-image": "url('assets/images/img7.jpg')" }}
        >
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 offset-lg-2 text-center">
                <div class="callback-content">
                  <div class="video-button">
                    <a
                      id="video-container"
                      data-fancybox="video-gallery"
                      href="https://www.youtube.com/watch?v=2OYar8OHEOU"
                    >
                      <i class="fas fa-play"></i>
                    </a>
                  </div>
                  <h2 class="section-title">
                    ARE YOU READY TO TRAVEL? REMEMBER US !!
                  </h2>
                  <p>
                    Fusce hic augue velit wisi quibusdam pariatur, iusto primis,
                    nec nemo, rutrum. Vestibulum cumque laudantium. Sit ornare
                    mollitia tenetur, aptent.
                  </p>
                  <div class="callback-btn">
                    <a href="package.html" class="round-btn">
                      View Packages
                    </a>
                    <a href="about.html" class="outline-btn outline-btn-white">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
