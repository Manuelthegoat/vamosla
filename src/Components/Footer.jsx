import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="colophon" class="site-footer footer-primary">
        <div class="top-footer">
          <div class="container">
            <div class="lower-footer">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="footer-newsletter">
                    <p>Subscribe our newsletter for more update & news !!</p>
                    <form class="newsletter">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                      />
                      <button
                        type="submit"
                        class="outline-btn outline-btn-white"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
                <div class="col-lg-6 text-right">
                  <div class="social-icon">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i class="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank">
                          <i class="fab fa-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i class="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="footer-menu">
                    <ul>
                      <li>
                        <a href="policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="policy.html">Term & Condition</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-footer">
          <div class="container">
            <div class="copy-right text-center">
              Copyright &copy; 2025 BY Techmint. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
