import React, { useEffect, useState } from "react";

const Packages = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hardcoded images for each flight package
  const flightImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Bole_international_airport.jpg/1200px-Bole_international_airport.jpg",
    "https://www.gacl.com.gh/wp-content/uploads/2018/11/DJI_0041.jpg",
    "https://www.ibomair.com/wp-content/uploads/2023/09/Kotoka-Airport-1080x750.jpg"
  ];

  // WhatsApp number (replace with your actual number)
  const whatsappNumber = "2349137610861"; // Example: "2349012345678" for Nigeria

  const startWhatsAppChat = (flight, isBooking = false) => {
    const messageType = isBooking ? "Booking" : "Enquiry";
    const whatsappMessage = 
      `*Flight ${messageType} Request*\n\n` +
      `*Airline:* ${flight.airline?.name || "Unknown Airline"}\n` +
      `*Flight Number:* ${flight.flight?.iata || "N/A"}\n` +
      `*Route:* ${flight.departure?.airport} (${flight.departure?.iata}) → ${flight.arrival?.airport} (${flight.arrival?.iata})\n` +
      `*Departure Time:* ${new Date(flight.departure?.scheduled).toLocaleString()}\n` +
      `*Destination City:* ${flight.arrival?.city || "Unknown"}\n\n` +
      `I would like to ${isBooking ? "book this flight" : "get more information about this flight"}.`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const res = await fetch(
          `http://api.aviationstack.com/v1/flights?access_key=e3e6861d32f3184512478184aa040edb&dep_iata=LOS`
        );
        const data = await res.json();
        setFlights(data.data?.slice(0, 3) || []);
      } catch (err) {
        console.error("Error fetching flights:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  return (
    <>
      <section className="home-package">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-sm-center">
              <div className="section-heading">
                <h5 className="sub-title">POPULAR PACKAGES</h5>
                <h2 className="section-title">CHECKOUT OUR FLIGHT PACKAGES</h2>
                <p>
                  Explore flights to amazing destinations, updated in real time.
                  Book now and experience hassle-free travel.
                </p>
              </div>
            </div>
          </div>

          <div className="package-section">
            {loading ? (
              <p>Loading flights...</p>
            ) : (
              flights.map((flight, i) => (
                <article className="package-item" key={i}>
                  <figure
                    className="package-image"
                    style={{
                      backgroundImage: `url('${flightImages[i]}')`,
                    }}
                  ></figure>

                  <div className="package-content">
                    <h3>
                      <a href="package-detail.html">
                        {flight.airline?.name || "Unknown Airline"} –{" "}
                        {flight.flight?.iata || "N/A"}
                      </a>
                    </h3>
                    <p>
                      From <strong>{flight.departure?.airport}</strong> (
                      {flight.departure?.iata}) to{" "}
                      <strong>{flight.arrival?.airport}</strong> (
                      {flight.arrival?.iata})
                    </p>
                    <div className="package-meta">
                      <ul>
                        <li>
                          <i className="fas fa-clock"></i>{" "}
                          {new Date(
                            flight.departure?.scheduled
                          ).toLocaleTimeString()}
                        </li>
                        <li>
                          <i className="fas fa-user-friends"></i> pax: 1
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {flight.arrival?.city || "Unknown"}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="package-price">
                    <div className="review-area">
                      <span className="review-text">(Live Flight)</span>
                      <div className="rating-start-wrap d-inline-block">
                        <div className="rating-start">
                          <span style={{ width: "80%" }}></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="price-list">
                      <span>${200 + Math.floor(Math.random() * 300)}</span>/ per
                      person
                    </h6>
                    <button
                      onClick={() => startWhatsAppChat(flight, true)}
                      className="outline-btn outline-btn-white"
                    >
                      Book now
                    </button>
                  </div>
                </article>
              ))
            )}
            <div className="section-btn-wrap text-center">
              <button 
                onClick={() => startWhatsAppChat(flights[0] || {}, false)} 
                className="round-btn"
              >
                Enquire More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;