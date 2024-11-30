import React from "react";

const About = () => {
  return (
    <>
      <div class="about style2 fix">
        <div class="container">
          <div class="section-title style3">
            <h2 class="title wow fadeInUp" data-wow-delay=".3s">
              Top 10 rated MSP and <span>multi-award winner</span> – we know
              that success is putting you first.
            </h2>
          </div>
          <div class="row gx-5 gy-5">
            <div class="col-xl-6 col-lg-5">
              <div class="about-content">
                <p class="wow fadeInDown" data-wow-delay=".3s">
                  {" "}
                  At near 100% client retention and established for more than 13
                  years, our technology-focused and relationship-driven approach
                  to IT assures that we stay ahead of the pace of change in the
                  workplace.
                </p>
              
              </div>
            </div>
            <div class="col-xl-6 col-lg-7">
              <div class="about-right-content fix">
                <div
                  class="about-thumb img-custom-anim-right wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <img
                    src="assets/images/about/aboutThumb2_1.png"
                    alt="thumb"
                  />
                  <img
                    src="assets/images/about/aboutThumb2_2.png"
                    alt="thumb"
                  />
                </div>
                <div class="counter">
                  <div class="counter_item wow fadeInUp" data-wow-delay=".3s">
                    <h3>
                      <span class="counter-number">2.8</span>k+
                    </h3>
                    <p>World wide clients</p>
                  </div>
                  <div class="counter_item wow fadeInUp" data-wow-delay=".6s">
                    <h3>
                      <span class="counter-number">300</span>+
                    </h3>
                    <p>Happy customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default About;
