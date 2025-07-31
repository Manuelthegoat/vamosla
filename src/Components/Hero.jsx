import React from "react";

const Hero = () => {
  const startWhatsAppBooking = () => {
    // Replace with your actual WhatsApp number (with country code, remove +)
    const whatsappNumber = "2349137610861"; // Using the number from your header
    
    // Custom booking message
    const whatsappMessage = "Hello Vamos La Limited! I'd like to book a service. Please provide more information.";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <section className="home-banner-section home-banner-slider">
        <div
          className="home-banner d-flex flex-wrap align-items-center"
          style={{ backgroundImage: "url('assets/images/banner-img1.jpg')" }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="banner-content text-center">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h2 className="banner-title">Welcome to Vamos La Limited</h2>
                  <p>
                    a trusted name dedicated to delivering excellence across
                    multiple industries. We take great care in providing
                    world-class services in travel and tourism, hospitality,
                    events management, agriculture, manufacturing, fashion,
                    education, and general commerce. Our mission is to create
                    value and build lasting relationships by offering innovative
                    solutions tailored to the needs of our clients.
                  </p>
                  <div className="banner-btn">
                    <a href="about" className="round-btn">
                      LEARN MORE
                    </a>
                    <button
                      onClick={startWhatsAppBooking}
                      className="outline-btn outline-btn-white"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;