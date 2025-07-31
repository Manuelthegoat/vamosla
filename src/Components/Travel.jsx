import React from 'react'

const Travel = () => {
    const startWhatsAppChat = (isPackageInquiry = false) => {
    // Replace with your actual WhatsApp number (with country code, remove +)
    const whatsappNumber = "2349137610861"; // Using the number from your header
    
    // Custom messages based on button type
    const whatsappMessage = isPackageInquiry 
      ? "Hello Vamos La Limited! I'm interested in your travel packages. Can you send me more details?"
      : "Hello Vamos La Limited! I'd like to learn more about your services.";
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };
  return (
    <>
      <section class="home-callback bg-img-fullcallback" style={{"background-image": "url('assets/images/img7.jpg')"}}>
               <div class="overlay"></div>
               <div class="container">
                  <div class="row">
                     <div class="col-lg-8 offset-lg-2 text-center">
                        <div class="callback-content">
                           <div class="video-button">
                              <a  id="video-container" data-fancybox="video-gallery" href="https://www.youtube.com/watch?v=2OYar8OHEOU">
                                 <i class="fas fa-play"></i>
                              </a>
                           </div>
                           <h2 class="section-title">ARE YOU READY TO TRAVEL? REMEMBER US !!</h2>
                           <p>Discover the world with us. Your trusted partner in unforgettable journeys, smart educational choices, and authentic cultural experiences. Our platform is designed to inspire and assist every kind of explorer, whether you're planning a relaxing getaway, looking into top global study opportunities, or seeking expert hospitality and tour services.</p>
                           <div class="callback-btn">
                              <a onClick={() => startWhatsAppChat(true)}  class="round-btn">Chat About Packages</a>
                              <a onClick={() => startWhatsAppChat(false)} class="outline-btn outline-btn-white">Learn More via WhatsApp</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
    </>
  )
}

export default Travel
