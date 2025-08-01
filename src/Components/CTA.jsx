import React from 'react'

const CTA = () => {
     const startWhatsAppChat = () => {
    // Replace with your actual WhatsApp number (with country code, remove +)
    const whatsappNumber = "2349137610861";
    
    const whatsappMessage = 
      `*Travel Inquiry*\n\n` +
      `Hello Vamos La Limited!\n\n` +
      `I'm ready for an unforgettable travel experience.\n` +
      `Please contact me to discuss:\n` +
      `- Travel packages\n` +
      `- Booking options\n` +
      `- Special offers\n\n` +
      `Looking forward to your response!`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <section class="home-callback bg-color-callback primary-bg">
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-md-8">
                        <h5 class="sub-title">CALL TO ACTION</h5>
                        <h2 class="section-title">READY FOR A REMARKABLE GROWTH? REMEMBER US!</h2>
                     </div>
                     <div class="col-md-4 text-md-end">
                        <a onClick={startWhatsAppChat} class="outline-btn outline-btn-white">Contact Us !</a>
                     </div>
                  </div>
               </div>
            </section> 
    </>
  )
}

export default CTA
