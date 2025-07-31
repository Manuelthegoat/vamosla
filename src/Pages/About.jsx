import React from "react";
import Travel from "../Components/Travel";

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
                  <h2>HOW WE ARE BEST FOR TRAVEL & GUIDE TO STUDY ABROAD !</h2>
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
                    <h3>UNIVERSITIES AROUND THE WORLD</h3>
                    <b>
                      🎓 Our expert advisors help you make confident choices.
                      We connect you to opportunities that shape your future.
                    </b>
                  </div>
                </div>
                <div class="icon-box">
                  <div class="box-icon">
                    <i aria-hidden="true" class="fas fa-umbrella-beach"></i>
                  </div>
                  <div class="icon-box-content">
                    <h3>AFFORDABLE TOURS</h3>
                    <b>
                      Our tours are budget-friendly, well-planned, and packed
                      with value. Perfect for students, families, and solo
                      travelers.
                    </b>
                  </div>
                </div>
                <div class="icon-box">
                  <div class="box-icon">
                    <i aria-hidden="true" class="fas fa-user-tag"></i>
                  </div>
                  <div class="icon-box-content">
                    <h3>BEST TOUR GUIDES</h3>
                    <b>
                      Discover more with the best tour guides by your side.
                      Local experts, rich insights, and personalized
                      experiences.
                    </b>
                  </div>
                </div>
                <div class="icon-box">
                  <div class="box-icon">
                    <i aria-hidden="true" class="fas fa-headset"></i>
                  </div>
                  <div class="icon-box-content">
                    <h3>AFFORDABLE HOTELS</h3>
                    <b>
                      Feel at home wherever you go. Our hospitality team ensures
                      a seamless, comfortable stay. Your comfort is our
                      priority.
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Travel />
    </>
  );
};

export default About;
