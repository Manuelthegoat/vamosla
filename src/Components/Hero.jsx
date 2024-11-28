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
                      Drive innovation with
                      <span>advanced</span>
                      technology
                    </h2>
                    <p class=" wow fadeInUp" data-wow-delay=".3s">
                      {" "}
                      IT company that provides a seamless and intuitive
                      experience for users. The design will focus on clear
                      navigation, easy access{" "}
                    </p>
                  </div>
                  <div class="btn-wrapper">
                    <a
                      class="theme-btn wow fadeInUp"
                      href="/"
                      data-wow-delay=".3s"
                    >
                      Get Started <i class="fa fa-arrow-right"></i>
                    </a>
                    <div
                      class="intro_content_info_btn wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <div class="video-wrap ripple-effect rounded-0">
                        <a
                          href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
                          class="play-btn popup-video"
                        >
                          <img
                            class="playerImg"
                            src="assets/images/icon/playerIcon1_1.svg"
                            alt="icon"
                          />
                        </a>
                      </div>
                      Watch Video
                    </div>
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
