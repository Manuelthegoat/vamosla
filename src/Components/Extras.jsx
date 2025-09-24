import React from "react";

const Extras = () => {
  return (
    <>
      <a id="backTotop" class="to-top-icon">
        <i class="fas fa-chevron-up"></i>
      </a>
      <div class="header-search-form">
        <div class="container">
          <div class="header-search-container">
            <form class="search-form" role="search" method="get">
              <input type="text" name="s" placeholder="Enter your text..." />
            </form>
            <a class="search-close">
              <i class="fas fa-times"></i>
            </a>
          </div>
        </div>
      </div>
      <div id="offCanvas" class="offcanvas-container">
        <div class="offcanvas-inner">
          <div class="offcanvas-sidebar">
            <aside class="widget author_widget">
              <h3 class="widget-title">OUR PROPRIETOR</h3>
              <div class="widget-content text-center">
                <div class="profile">
                  <figure class="avatar">
                    <img src="assets/images/img21.jpg" alt="" />
                  </figure>
                  <div class="text-content">
                    <p>
                      Whether you're dreaming of tropical beaches, ancient
                      cities, or scenic adventures, our travel services are
                      tailored to match your style. We offer:<br/><br/> Custom travel
                      packages <br/>Guided local and international tours <br/>Group and
                      solo travel planning<br/> 24/7 support throughout your journey<br/><br/>
                      Let us handle the logistics while you enjoy the
                      experience.
                    </p>
                  </div>
                  <div class="socialgroup">
                    <ul>
                      <li>
                        {" "}
                        <a target="_blank">
                          {" "}
                          <i class="fab fa-facebook"></i>{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a target="_blank">
                          {" "}
                          <i class="fab fa-google"></i>{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a target="_blank">
                          {" "}
                          <i class="fab fa-twitter"></i>{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a target="_blank">
                          {" "}
                          <i class="fab fa-instagram"></i>{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a target="_blank">
                          {" "}
                          <i class="fab fa-pinterest"></i>{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            <aside class="widget widget_text text-center">
              <h3 class="widget-title">CONTACT US</h3>
              <div class="textwidget widget-text">
                <p>
                  Feel free to contact and
                  <br /> reach us !!
                </p>
                <ul>
                  <li>
                    <a href="tel:+2349137610861">
                      <i aria-hidden="true" class="icon icon-phone1"></i>
                      +234 913 761 0861
                    </a>
                  </li>
                  <li>
                    <a href="mailtop:info@vamosla.com">
                      <i aria-hidden="true" class="icon icon-envelope1"></i>
                      info@vamosla.com
                    </a>
                  </li>
                  <li>
                    <i aria-hidden="true" class="icon icon-map-marker1"></i>
                    Nigeria
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <a class="offcanvas-close" onClick={() => window.location.reload()}>
            <i class="fas fa-times"></i>
          </a>
        </div>
        <div class="overlay"></div>
      </div>
    </>
  );
};

export default Extras;
