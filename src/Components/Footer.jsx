import React from 'react'

const Footer = () => {
  return (
    <>
 <footer class="footer-section position-relative">
    <div class="footer-widgets-wrapper fix">
      <div class="container">
        <div class="footer_top-head">
          <div class="footer-logo">
            <img src="assets/images/logo/logo.png" alt="logo"/>
          </div>
          <div class="btn-wrapper">
            <a class="theme-btn" href="index#scroll">
              Scroll Up
              <i class="fa fa-long-arrow-up"></i>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <div class="single-footer-widget">
              <div class="widget-head">
                <h3>Resources</h3>
              </div>
              <ul class="list-area">
                <li>
                  <a href="/"> Home </a>
                </li>
                <li>
                  <a href="about"> About </a>
                </li>
                <li>
                  <a href="blog"> Blog </a>
                </li>

                <li>
                  <a href="contact"> Contact </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
            <div class="single-footer-widget">
              <div class="widget-head">
                <h3>Use cases</h3>
              </div>
              <ul class="list-area">
                <li>
                  <a href="index#"> Know Your Business </a>
                </li>
                <li>
                  <a href="index#"> TechSphere Solutions </a>
                </li>
                <li>
                  <a href="index#"> Know Your Customer </a>
                </li>
                <li>
                  <a href="index#"> Onboarding </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div class="single-footer-widget">
              <div class="widget-head">
                <h3>Products</h3>
              </div>
              <ul class="list-area">
                <li>
                  <div class="title">
                    <a href="index#"> Workflow </a>
                  </div>
                </li>
                <li>
                  <a href="index#"> Orchestration </a>
                </li>
                <li>
                  <a href="index#"> No-code onboarding </a>
                </li>
                <li>
                  <a href="index#"> Reports </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
            <div class="single-footer-widget">
              <div class="widget-head">
                <h3>Developers</h3>
              </div>
              <ul class="list-area">
                <li>
                  <a href="about"> Documentation </a>
                </li>
                <li>
                  <a href="services"> API Reference </a>
                </li>
                <li>
                  <h6 class="language">Language</h6>
                  <select name="lang" id="lang-select" class="nice-select">
                    <option value="">English</option>
                    <option value="french">
                      French
                    </option>
                    <option value="spanish">
                      Spanish
                    </option>
                    <option value="chinese">
                      Chinese
                    </option>
                    <option value="arabic">
                      Arabic
                    </option>
                    <option value="portuguese">
                      Portuguese
                    </option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-wrapper d-flex align-items-center justify-content-between">
          <p class="wow fadeInLeft" data-wow-delay=".3s">
            © Yoursitename 2024 | All Rights Reserved
          </p>
          <ul class="brand-logo wow fadeInRight" data-wow-delay=".5s">
            <li>
              <a href="contact">
                Privacy <span class="line"> | </span>
              </a>
            </li>
            <li>
              <a href="contact"> Terms <span class="line"> | </span> </a>
            </li>
            <li>
              <a href="contact"> Sitemap <span class="line"> | </span> </a>
            </li>
            <li>
              <a href="contact"> Help </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer