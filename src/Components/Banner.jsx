import React from 'react'

const Banner = () => {
  return (
    <>
      <div class="home-trip-search primary-bg">
               <div class="container">
                  <form method="get" class="trip-search-inner d-flex">
                     <div class="group-input">
                        <label> Search Destination* </label>
                        <input type="text" name="s" placeholder="Enter Destination"/>
                     </div>
                     <div class="group-input">
                        <label> Pax Number* </label>
                        <input type="text" name="s" placeholder="No.of People"/>
                     </div>
                     <div class="group-input width-col-3">
                        <label> Checkin Date* </label>
                        <i class="far fa-calendar"></i>
                        <input class="input-date-picker" type="text" name="s" placeholder="MM / DD / YY" autocomplete="off" readonly="readonly"/>
                     </div>
                     <div class="group-input width-col-3">
                        <label> Checkout Date* </label>
                        <i class="far fa-calendar"></i>
                        <input class="input-date-picker" type="text" name="s" placeholder="MM / DD / YY" autocomplete="off" readonly="readonly"/>
                     </div>
                     <div class="group-input width-col-3">
                        <input type="submit" name="travel-search" value="INQUIRE NOW"/>
                     </div>
                  </form>
               </div>
            </div>
    </>
  )
}

export default Banner
