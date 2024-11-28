import React from "react";

const Header = () => {
  return (
    <>
      <div class="fix-area">
        <div class="offcanvas__info">
          <div class="offcanvas__wrapper">
            <div class="offcanvas__content">
              <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div class="offcanvas__logo">
                  <a href="index">
                    <img src="assets/images/logo.png" alt="logo-img" />
                  </a>
                </div>
                <div class="offcanvas__close">
                  <button>
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p class="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div class="mobile-menu fix mb-3"></div>
              <div class="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon">
                      <i class="fal fa-map-marker-alt"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a target="_blank" href="index2#">
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15">
                      <i class="fal fa-envelope"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a href="mailto:info@example.com">
                        <span class="mailto:info@example.com">
                          info@example.com
                        </span>
                      </a>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15">
                      <i class="fal fa-clock"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a target="_blank" href="index2#">
                        Mod-friday, 09am -05pm
                      </a>
                    </div>
                  </li>
                  <li class="d-flex align-items-center">
                    <div class="offcanvas__contact-icon mr-15">
                      <i class="far fa-phone"></i>
                    </div>
                    <div class="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div class="header-button mt-4">
                  <a href="contact" class="theme-btn text-center">
                    <span>
                      Get A Quote<i class="fa-solid fa-arrow-right-long"></i>
                    </span>
                  </a>
                </div>
                <div class="social-icon d-flex align-items-center">
                  <a href="index2#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="index2#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="index2#">
                    <i class="fab fa-youtube"></i>
                  </a>
                  <a href="index2#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offcanvas__overlay"></div>

      <header class="header-section-1" id="scroll">
        <div id="header-sticky" class="header-1">
          <div class="container">
            <div class="mega-menu-wrapper">
              <div class="header-main">
                <div class="header-left">
                  <div class="logo">
                    <a href="index" class="header-logo">
                      <img
                        src="assets/images/logo.png"
                        alt="logo-img"
                        width="100"
                      />
                    </a>
                  </div>
                </div>
                <div class="header-middle">
                  <div class="mean__menu-wrapper">
                    <div class="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about">About Us</a>
                          </li>
                          <li>
                            <a href="/services">Services</a>
                          </li>
                          <li>
                            <a href="/projects">Projects</a>
                          </li>

                          <li>
                            <a href="contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="header-right d-flex justify-content-end align-items-center">
                  <div class="header-button">
                    <div class="btn-wrapper">
                      <a href="contact">
                        <span class="theme-btn"> Contact Us </span>
                      </a>
                    </div>
                  </div>
                  <div class="header__hamburger d-block d-xl-none my-auto">
                    <div class="sidebar__toggle">
                      <i class="fas fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
