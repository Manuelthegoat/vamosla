import React from 'react'

const About = () => {
  return (
    <>
          <div class="about style2 fix">
        <div class="container">
            <div class="section-title style3">
                <h2 class="title wow fadeInUp" data-wow-delay=".3s">
                    Simplify <span>complexity</span> with innovative tech
                </h2>
            </div>
            <div class="row gx-5 gy-5">
                <div class="col-xl-6 col-lg-5">
                    <div class="about-content">
                        <p class="wow fadeInDown" data-wow-delay=".3s"> IT company that provides a seamless and
                            intuitive experience for users. The design will
                            focus on clear navigation, easy access to information IT company that provides a seamless
                            and intuitive experience for users. The design will focus on clear navigation, easy access
                            to information. </p>
                        <div class="btn-wrapper wow fadeInDown" data-wow-delay=".6s">
                            <a href="contact">
                                <span class="theme-btn-2">
                                    Read More <i class="fa fa-arrow-right"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-7">
                    <div class="about-right-content fix">
                        <div class="about-thumb img-custom-anim-right wow fadeInUp" data-wow-delay=".3s">
                            <img src="assets/images/about/aboutThumb2_1.png" alt="thumb"/>
                            <img src="assets/images/about/aboutThumb2_2.png" alt="thumb"/>
                        </div>
                        <div class="counter">
                            <div class="counter_item wow fadeInUp" data-wow-delay=".3s">
                                <h3><span class="counter-number">2.8</span>k+</h3>
                                <p>World wide clients</p>
                            </div>
                            <div class="counter_item wow fadeInUp" data-wow-delay=".6s">
                                <h3><span class="counter-number">300</span>+</h3>
                                <p>Happy customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="brand-slider-section">
                <div class="brand-slider-container-wrapper style1">
                    <div class="container">
                        <div class="row">
                            <div class="slider-area brandSliderOne">
                                <div class="swiper gt-slider" id="brand-slider"
                                    data-slider-options='{"loop": true,"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":2,"centeredSlides":true},"768":{"slidesPerView":3},"992":{"slidesPerView":4},"1200":{"slidesPerView":5}}}'>
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="brand-logo">
                                                <img src="assets/images/brand/brandLogo1_1.png" alt="logo"/>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="brand-logo">
                                                <img src="assets/images/brand/brandLogo1_2.png" alt="logo"/>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="brand-logo">
                                                <img src="assets/images/brand/brandLogo1_3.png" alt="logo"/>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="brand-logo">
                                                <img src="assets/images/brand/brandLogo1_4.png" alt="logo"/>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="brand-logo">
                                                <img src="assets/images/brand/brandLogo1_5.png" alt="logo"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About