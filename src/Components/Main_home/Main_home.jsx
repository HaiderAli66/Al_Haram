import React from 'react'
import Al_haram_footer from '../Al_haram_header/Al_haram_footer'
import Al_haram_header from '../Al_haram_header/Al_haram_header'
import Al_haram_link_header from '../Al_haram_link_header/Al_haram_link_header'
import Al_haram_main_footer from '../Al_haram_main_footer/Al_haram_main_footer'
import Al_haram_offers from '../Al_haram_offers/Al_haram_offers'
import Explore_ksg from '../Explore_ksg/Explore_ksg'
import Home_front from '../Home_front/Home_front'
import Testimonials from '../Testimonials/Testimonials'
import Travel from '../Travel/Travel'
// import Umrah_deals from '../Umrah_deals/Umrah_deals'
import Umrah_deals from "../Umrah_deals/Umrah_deals"

function Main_home() {
  return (
    <div className='w-100 pb-5'>
     
        <Home_front/>
        <Al_haram_footer/>
        <Al_haram_offers/>
        {/* <Umrah_deals/> */}
        <Umrah_deals/>
        <Testimonials/>
        <Explore_ksg/>
        <Travel/>
       
      
    </div>
  )
}

export default Main_home
