import React, { useState, useEffect } from "react";

const Special = () => {
  const [hotels, setHotels] = useState([]);

  const startWhatsAppBooking = (hotel) => {
    // Replace with your actual WhatsApp number (with country code, remove +)
    const whatsappNumber = "2349137610861";
    
    const whatsappMessage = 
      `*Hotel Booking Inquiry*\n\n` +
      `*Package:* ${hotel.title}\n` +
      `*Location:* ${hotel.location}\n` +
      `*Duration:* ${hotel.duration}\n` +
      `*Price:* $${hotel.discountedPrice} (was $${hotel.originalPrice})\n\n` +
      `I'd like to book this special package. Please assist me.`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    // Mock hotel data
    const mockHotels = [
      {
        id: 1,
        title: "Sunset Beach Resort",
        location: "Bali, Indonesia",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/4f/f3/48/exterior.jpg?w=900&h=500&s=1",
        description: "Relax by the ocean in luxury.",
        originalPrice: 1300,
        discountedPrice: 1105,
        duration: "7D/6N",
        pax: 2,
      },
      {
        id: 2,
        title: "City View Inn",
        location: "Paris, France",
        image: "https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/168/253/917/Enhanced_MH_Hero_Image_O.jpg?tr=w-1200%2Cfo-auto",
        description: "Enjoy a weekend getaway in the city of love.",
        originalPrice: 1100,
        discountedPrice: 900,
        duration: "5D/4N",
        pax: 2,
      },
    ];

    setHotels(mockHotels);
  }, []);

  return (
    <section className="home-offer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-sm-center">
            <div className="section-heading">
              <h5 className="sub-title">OFFER & DISCOUNT</h5>
              <h2 className="section-title">OUR SPECIAL PACKAGES</h2>
              <p>Explore amazing hotel deals with real images.</p>
            </div>
          </div>
        </div>

        <div className="offer-section">
          <div className="row">
            {hotels.map((hotel) => (
              <div className="col-md-6" key={hotel.id}>
                <article
                  className="offer-item"
                  style={{
                    backgroundImage: `url('${hotel.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "8px",
                    padding: "20px",
                    color: "white",
                    position: "relative",
                    marginBottom: "30px",
                  }}
                >
                  <div className="offer-badge">
                    UPTO{" "}
                    <span>
                      {Math.round(
                        ((hotel.originalPrice - hotel.discountedPrice) /
                          hotel.originalPrice) *
                          100
                      )}
                      %
                    </span>{" "}
                    off
                  </div>
                  <div className="offer-content">
                    <div className="package-meta">
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li>
                          <i className="fas fa-clock"></i> {hotel.duration}
                        </li>
                        <li>
                          <i className="fas fa-user-friends"></i> pax: {hotel.pax}
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> {hotel.location}
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <a href="#" style={{ color: "white", textDecoration: "underline" }}>
                        {hotel.title}
                      </a>
                    </h3>
                    <p>{hotel.description}</p>
                    <div className="price-list">
                      price: <del>${hotel.originalPrice}</del>{" "}
                      <ins>${hotel.discountedPrice}</ins>
                    </div>
                    <button 
                      onClick={() => startWhatsAppBooking(hotel)} 
                      className="round-btn"
                      style={{
                        cursor: 'pointer',
                        border: 'none',
                        background: 'transparent',
                        color: 'inherit'
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Special;