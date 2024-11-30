import React from "react";

const Hero = () => {
  return (
    <>
      <div class="intro-section fix">
        <div class="intro-container-wrapper style2">
          <div class="container">
            <div class="row gx-253 gy-5">
              <div class="col-xl-6 col-lg-6 order-2 order-md-1">
                <div class="intro_content">
                  <div class="intro_content_info">
                    <div class="intro_content_info_left">
                      <div
                        class="intro_content_info_left_user wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <h3 class="intro_content_info_left_user_title">
                          <span class="counter-number">2,000 </span>+
                        </h3>
                        <p class="intro_content_info_left_user_subtitle">
                          Happy Clients
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="section-title style3">
                    <h2 class="title wow fadeInUp" data-wow-delay=".3s">
                      The trusted
                      <span> IT partner </span>
                      for successful & ambitious businesses
                    </h2>
                    {/* <p class=" wow fadeInUp" data-wow-delay=".3s">
                      {" "}
                      IT company that provides a seamless and intuitive
                      experience for users. The design will focus on clear
                      navigation, easy access{" "}
                    </p> */}
                  </div>
                  <div class="btn-wrapper">
                    <a
                      class="theme-btn widebtn wow fadeInUp"
                      href="/"
                      data-wow-delay=".3s"
                    >
                      Arrange a free IT Audit<i class="fa fa-arrow-right"></i>
                    </a>
                    <a
                      class="theme-btn widebtn wow fadeInUp"
                      href="/"
                      data-wow-delay=".3s"
                    >
                      Book a meeting<i class="fa fa-arrow-right"></i>
                    </a>
                   
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 order-1 order-md-">
                <div class="intro-content-right">
                  <div class="shape1 cir36">
                    <img
                      src="assets/images/shape/introShape2_3.png"
                      alt="shape"
                    />
                  </div>
                  <div class="shape2 cir36">
                    <img
                      src="assets/images/shape/introShape2_4.png"
                      alt="shape"
                    />
                  </div>

                  <div class="intro-content-thumb">
                    <img
                      src="assets/images/intro/introThumb2_1.png"
                      alt="Person 1"
                    />
                    <img
                      class="content-shape-1"
                      src="assets/images/shape/introShape2_2.png"
                      alt="Person 1"
                    />
                  </div>
                  <div class="intro-content-thumb">
                    <img
                      class="content-shape-2"
                      src="assets/images/shape/introShape2_1.png"
                      alt="Person 1"
                    />
                    <img
                      src="assets/images/intro/introThumb2_2.png"
                      alt="Person 2"
                    />
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

export default Hero;
