import React, { useEffect, useState } from "react";

const Packages = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const res = await fetch(
          `http://api.aviationstack.com/v1/flights?access_key=e3e6861d32f3184512478184aa040edb&dep_iata=JFK`
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
                      "background-image": "url('assets/images/img6.jpg')",
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
                    <a
                      href="booking.html"
                      className="outline-btn outline-btn-white"
                    >
                      Book now
                    </a>
                  </div>
                </article>
              ))
            )}
            <div className="section-btn-wrap text-center">
              <a href="package.html" className="round-btn">
                VIEW ALL PACKAGES
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
