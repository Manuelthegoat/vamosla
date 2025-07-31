import React from "react";

const Destination = () => {
  return (
    <>
      <section class="home-destination">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-sm-center">
              <div class="section-heading">
                <h5 class="sub-title">UNCOVER PLACE</h5>
                <h2 class="section-title">POPULAR DESTINATION</h2>
                <p>
                  Experience the heart of Africa! From Lagos beaches to Abuja’s
                  city life and the rich heritage of places like Calabar and
                  Kano — Nigeria Accra, Or Kenya offers adventure, culture, and
                  warm hospitality at every turn.
                </p>
              </div>
            </div>
          </div>
          <div class="destination-section">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <article
                  class="destination-item"
                  style={{
                    "background-image": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Kanogate.jpg/1200px-Kanogate.jpg')",
                  }}
                >
                  <div class="destination-content">
                    <div class="rating-start-wrap">
                      <div class="rating-start">
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>
                    <span class="cat-link">
                      <a href="destination.html">Nigeria</a>
                    </span>
                    <h3>
                      <a href="package-detail.html">Kano</a>
                    </h3>
                    <p>
                      Kano is the second largest city in Nigeria after Lagos
                    </p>
                  </div>
                </article>
              </div>
              <div class="col-lg-4 col-md-6">
                <article
                  class="destination-item"
                  style={{
                    "background-image": "url('assets/images/img2.jpg')",
                  }}
                >
                  <div class="destination-content">
                    <div class="rating-start-wrap">
                      <div class="rating-start">
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>
                    <span class="cat-link">
                      <a href="destination.html">Dubai</a>
                    </span>
                    <h3>
                      <a href="package-detail.html">BURJ KHALIFA</a>
                    </h3>
                    <p>
                      A desert dream turned into a city of gold.
                    </p>
                  </div>
                </article>
              </div>
              <div class="col-lg-4 col-md-6">
                <article
                  class="destination-item"
                  style={{
                    "background-image": "url('https://upload.wikimedia.org/wikipedia/commons/2/24/Hand_sculpture_roundabout%2C_Calabar%2C_Cross_River_state2.jpg')",
                  }}
                >
                  {/*  */}
                  <div class="destination-content">
                    <div class="rating-start-wrap">
                      <div class="rating-start">
                        <span style={{ width: "100%" }}></span>
                      </div>
                    </div>
                    <span class="cat-link">
                      <a href="destination.html">Nigeria</a>
                    </span>
                    <h3>
                      <a href="package-detail.html">Calabar</a>
                    </h3>
                    <p>
                      where history whispers through coconut trees and carnival drums.
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div class="section-btn-wrap text-center">
              <a href="destination.html" class="round-btn">
                More Destination
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
