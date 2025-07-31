import React from "react";

const Header = () => {
  return (
    <>
      <header id="masthead" class="site-header">
        <div class="top-header">
          <div class="container">
            <div class="top-header-inner">
              <div class="header-contact text-left">
                <a href="telto:2349137610861">
                  <i aria-hidden="true" class="icon icon-phone-call2"></i>
                  <div class="header-contact-details d-none d-sm-block">
                    <span class="contact-label">For Further Inquires :</span>
                    <h5 class="header-contact-no">+234 913 761 0861</h5>
                  </div>
                </a>
              </div>
              <div class="site-logo text-center">
                <h1 class="site-title">
                  <a href="/">
                    <img src="assets/images/logo.png" alt="Logo" />
                  </a>
                </h1>
              </div>
              <div class="header-icon text-right">
                <div class="header-search-icon d-inline-block">
                  <a >
                    <i aria-hidden="true" class="fas fa-search"></i>
                  </a>
                </div>
                <div class="offcanvas-menu d-inline-block">
                  <a >
                    <i aria-hidden="true" class="icon icon-burger-menu"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-header">
          <div class="container">
            <div class="bottom-header-inner d-flex justify-content-between align-items-center">
              <div class="header-social social-icon">
                <ul>
                  <li>
                    <a href="https://www.facebook.com" target="_blank">
                      <i class="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com" target="_blank">
                      <i class="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com" target="_blank">
                      <i class="fab fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="navigation-container d-none d-lg-block">
                <nav id="navigation" class="navigation">
                  <ul>
                    <li class="menu-active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">about us</a>
                    </li>
                    <li>
                      <a href="/destination">destination</a>
                    </li>

                    <li>
                      <a href="/contact">contact us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="header-btn">
                <a href="booking" class="round-btn">
                   Chat with Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-menu-container"></div>
      </header>
    </>
  );
};

export default Header;
