import React from "react";

const Discount = () => {
    const startWhatsAppChat = () => {
    // Replace with your actual WhatsApp number (with country code, remove +)
    const whatsappNumber = "2349137610861";
    
    const whatsappMessage = 
      `*Discount Inquiry*\n\n` +
      `Hello Vamos La Limited!\n\n` +
      `I saw your special discount offer and would like to:\n` +
      `- Get more information\n` +
      `- Claim my chat discount\n` +
      `- Learn about your services\n\n` +
      `Please assist me.`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <section
        class="home-client client-section"
        style={{ "background-image": "url('assets/images/banner-img1.jpg')" }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="client-content">
                <h5 class="sub-title">DISCOUNT OFFER</h5>
                <h2 class="section-title">GET SPECIAL DISCOUNT WHEN YOU CHAT WITH US !</h2>
                <p>
                  Planning a trip, study abroad, or booking a stay? Chat with
                  our representative today and get an instant discount on our
                  travel, education, or hospitality services! 🎁 Exclusive Chat
                  Offer Includes: Reduced service fees Special package pricing
                  Priority support and guidance 📲 Start a chat now and unlock
                  your savings — it’s that easy!
                </p>
                <a onClick={startWhatsAppChat} class="round-btn">
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
