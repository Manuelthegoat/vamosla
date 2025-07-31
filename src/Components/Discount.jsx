import React from "react";

const Discount = () => {
  return (
    <>
      <section
        class="home-client client-section"
        style={{"background-image": "url('assets/images/banner-img1.jpg')"}}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="client-content">
                <h5 class="sub-title">DISCOUNT OFFER</h5>
                <h2 class="section-title">GET SPECIAL DISCOUNT ON SIGN UP !</h2>
                <p>
                  Fusce hic augue velit wisi quibusdam pariatur, iusto primis,
                  nec nemo, rutrum. Vestibulum cumque laudantm sit.
                </p>
                <a href="contact.html" class="round-btn">
                  Sign Up Now
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="client-logo">
                <ul>
                  <li>
                    <img src="assets/images/client-img1.png" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/client-img2.png" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/client-img3.png" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/client-img4.png" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/client-img5.png" alt="" />
                  </li>
                  <li>
                    <img src="assets/images/client-img6.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="overlay"></div>
      </section>
    </>
  );
};

export default Discount;
