import React from "react";

const Hero = () => {
  return (
    <>
      <section class="home-banner-section home-banner-slider">
        <div
          class="home-banner d-flex flex-wrap align-items-center"
          style={{ "background-image": "url('assets/images/banner-img1.jpg')" }}
        >
          <div class="overlay"></div>
          <div class="container">
            <div class="banner-content text-center">
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <h2 class="banner-title">Welcome to Vamos La Limited</h2>
                  <p>
                    a trusted name dedicated to delivering excellence across
                    multiple industries. We take great care in providing
                    world-class services in travel and tourism, hospitality,
                    events management, agriculture, manufacturing, fashion,
                    education, and general commerce. Our mission is to create
                    value and build lasting relationships by offering innovative
                    solutions tailored to the needs of our clients.
                  </p>
                  <div class="banner-btn">
                    <a href="about" class="round-btn">
                      LEARN MORE
                    </a>
                    <a
                      href="booking"
                      class="outline-btn outline-btn-white"
                    >
                      BOOK NOW
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

export default Hero;
