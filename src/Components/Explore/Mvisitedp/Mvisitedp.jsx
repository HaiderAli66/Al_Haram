import React from 'react'
import Cities_card from '../Cities_card/Cities_card'

export default function Mvisitedp() {
  return (
    <div style={{background:" #E1FAFF"}}className='py-5' >
      <div className="container">
        <div className="row">
            <div className="col-12 mt-3">
            <h4 className='text-uppercase text-dark fw-bold'>explore by categories </h4>
            </div>
           
        </div>
      </div>
     <div className='py-5 text-uppercase text-center'  >
     <Cities_card
     className='text-center'
      title="food & drink"
      sub_title="200 Listings"
      title2="Shoping Mall"
      sub_title1="100 Listing"
      title3="amusement park"
      imgsrc="res_e.png"
      imgsrc2="Shp_m.png"
      imgsrc3="am_p.png"
      sub_title2="50 Listings"
     />
     </div>
    </div>
  )
}
