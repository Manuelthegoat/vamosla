import React from "react";

const Header = () => {
  const startWhatsAppChat = () => {
    // Replace with your actual WhatsApp number (with country code, remove +)
    const whatsappNumber = "2349137610861"; // Using the number from your contact info
    
    // Customize this message as needed
    const whatsappMessage = "Hello! I'd like to get more information about your travel services.";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <header id="masthead" className="site-header">
        <div className="top-header">
          <div className="container">
            <div className="top-header-inner">
              <div className="header-contact text-left">
                <a href="tel:2349137610861">
                  <i aria-hidden="true" className="icon icon-phone-call2"></i>
                  <div className="header-contact-details d-none d-sm-block">
                    <span className="contact-label">For Further Inquires :</span>
                    <h5 className="header-contact-no">+234 913 761 0861</h5>
                  </div>
                </a>
              </div>
              <div className="site-logo text-center">
                <h1 className="site-title">
                  <a href="/">
                    <img src="assets/images/logo.png" alt="Logo" />
                  </a>
                </h1>
              </div>
              <div className="header-icon text-right">
                <div className="header-search-icon d-inline-block">
                  <a>
                    <i aria-hidden="true" className="fas fa-search"></i>
                  </a>
                </div>
                <div className="offcanvas-menu d-inline-block">
                  <a>
                    <i aria-hidden="true" className="icon icon-burger-menu"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container">
            <div className="bottom-header-inner d-flex justify-content-between align-items-center">
              <div className="header-social social-icon">
                <ul>
                  <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navigation-container d-none d-lg-block">
                <nav id="navigation" className="navigation">
                  <ul>
                    <li className="menu-active">
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
              <div className="header-btn">
                <button onClick={startWhatsAppChat} className="round-btn">
                  Chat with Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-container"></div>
      </header>
    </>
  );
};

export default Header;