import React, { useState } from "react";

const Banner = () => {
  const [formData, setFormData] = useState({
    destination: "",
    paxNumber: "",
    checkinDate: "",
    checkoutDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappMessage = 
      `*Travel Inquiry*\n\n` +
      `*Destination:* ${formData.destination}\n` +
      `*Number of People:* ${formData.paxNumber}\n` +
      `*Check-in Date:* ${formData.checkinDate}\n` +
      `*Check-out Date:* ${formData.checkoutDate}\n\n` +
      `I'm interested in this travel package. Please provide more details.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Replace with your actual WhatsApp number (with country code, remove +)
    const whatsappNumber = "1234567890";
    
    // Open WhatsApp chat
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="home-trip-search primary-bg">
      <div className="container">
        <form onSubmit={handleSubmit} className="trip-search-inner d-flex">
          <div className="group-input">
            <label> Search Destination* </label>
            <input 
              type="text" 
              name="destination" 
              placeholder="Enter Destination" 
              value={formData.destination}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="group-input">
            <label> Pax Number* </label>
            <input 
              type="number" 
              name="paxNumber" 
              placeholder="No.of People" 
              value={formData.paxNumber}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="group-input width-col-3">
            <label> Checkin Date* </label>
            <input
              className="input-date-picker"
              type="date"
              name="checkinDate"
              placeholder="MM / DD / YY"
              value={formData.checkinDate}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="group-input width-col-3">
            <label> Checkout Date* </label>
            
            <input
              className="input-date-picker"
              type="date"
              name="checkoutDate"
              placeholder="MM / DD / YY"
              value={formData.checkoutDate}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="group-input width-col-3">
            <input 
              type="submit" 
              name="travel-search" 
              value="INQUIRE NOW" 
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;