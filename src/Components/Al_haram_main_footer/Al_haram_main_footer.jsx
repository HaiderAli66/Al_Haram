import React from 'react'
import "./Al_haram_main_footer.css"
import { RiPlaystationFill } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { HiOutlineLocationMarker } from "react-icons/hi"
import message from "../Assets/message.png"
import play from "../Assets/play.png"
import app from "../Assets/app.png"
import { TiMessage } from "react-icons/ti"
import ico from "../Assets/ico.png"
import { Link } from 'react-router-dom'
import insta from "../Assets/insta.png"
import twiiter from "../Assets/twiiter.png"
import facebook from "../Assets/facebook.png"
import w from "../Assets/w.png"
import w1 from "../Assets/w1.png"
import fl from "../Assets/fl.png"

function Al_haram_main_footer() {
  return (
    <div className='Al_haram_main_footer'>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-4 text-start justify-content-start d-flex flex-column">
            {/* <h5 className='text-start pb-md-4'><span className='text-white fs-1 fw-bolder'>A</span><span className='text-white fs-2 fw-bolder'>I</span><span className='ms-2 text-dark fs-1 fw-bolder'>haram</span></h5> */}
         <div className='d-flex justify-content-start'>  <img src={fl} alt=""  className='d-flex justify-content-start w-50 borderssss'/>
         </div> 
            <p className='text-start text-white pb-md-4 foooter_logo_para_main'>One of the most trusted travel group providing best services with to its clients since decades. Our director’s lorem ipsum a sons of Maxim’s founder lorem ipsum, are running these companies.lorem ipsum and glow is offering personalised services at every step, as not only a travel agency but also for exclusive.</p>
          </div>
          <div className="col-md-2 mt-3 text-start responsive_pro mac_mar">
            <h6 className='text-white fw-bold  text-uppercase pb-md-4'><Link to=' ' className='text-white text-decoration-none  '> Company </Link></h6>
            <div className='footer_links_mac'>
            <p className='m-0'>   <Link to='/' className='footer_links_main'><a href="" className='footer_links_main'>Home </a></Link></p>
            <p className='m-0'>     <a href="" className='footer_links_main'><Link to='footer_about_us' className='footer_links_main'>about us </Link> </a></p>
            <p className='m-0'> <a href="" className='footer_links_main'> <Link to='footer_buses' className='text-white text-decoration-none footer_links_main'> career</Link> </a></p>
            <p className='m-0'> <a href="" className='footer_links_main'><Link to='/press_pro' className='text-white text-decoration-none footer_links_main' > press </Link></a></p>
            <p className='m-0'> <a href="" className='footer_links_main'><Link to='/foooter_cabsss' className='text-white text-decoration-none footer_links_main'> travel agent </Link></a></p>
            <p className='m-0'> <a href="" className='footer_links_main'> <Link to='/footer_blog' className='footer_links_main'> blog</Link></a></p>
            </div>
          </div>

          <div className="col-md-2 text-start mt-3 responsive_pro mac_mar">
        
            <h6 className='text-white fw-bold  text-uppercase pb-md-4'>Services</h6>
            <div className='footer_links_mac'>
            <p className='m-0'>  <Link to='/Umrah_package' className='footer_links_main'> <a href="" className='footer_links_main'>Umrah package </a></Link></p>
            <p className='m-0'>    <Link to='/hajj_packages' className='footer_links_main'> <a href="" className='footer_links_main'>Hajj package  </a></Link></p>
            <p className='m-0'> <Link to='/Explore_resturant' className='footer_links_main'><a href="" className='footer_links_main'>Hotels </a></Link></p>
            <p className='m-0'> <Link to='/flight' className='footer_links_main'><a href="" className='footer_links_main'>Flights </a></Link></p>
            <p className='m-0'> <a href="" className='footer_links_main'>Umrah Guide </a></p>
            <p className='m-0'> <a href="" className='footer_links_main'>Hajj Guide </a></p>
            <p className='m-0'> <a href="" className='footer_links_main'> <Link to='/cab_booking' className='footer_links_main'> cab</Link></a></p>
         </div>
          </div>
          <div className="col-md-2 mt-3 text-start responsive_pro mac_mar">
            <h6 className='text-white fw-bold  text-uppercase pb-md-4'>Get in touch</h6>
            <div   className='footer_links_mac'>
            <p className='m-0'>   <a href="" className='footer_links_main'> al haram </a></p>
            <p className='m-0'>     <a href="" className='footer_links_main'><HiOutlineLocationMarker></HiOutlineLocationMarker>  Al-Aqsa Business Park 8711, Alrehab
              Dist. Jeddah, Unit No 310, Saudi Arabia
            </a></p>
            <p className='m-0'> <a href="" className='footer_links_main'><img src={message} alt="" /> Arabia
              support@alharam.com
              91 12345678910

            </a></p>
            </div>
          </div>
          <div className="col-md-2 mt-3 text-start mac_mar">
            <h6 className='text-white text-uppercase pb-md-4 fs-6 fw-bold text-start'>download our app</h6>
            <div  className='footer_links_mac'>
            <div className='d-flex foooter text-start main_footer_button'>
             

              <img src={play} className='play_img' alt="" />
              <div>
              <span className='ms-2 text-white m-0 android_fs   '>android app available on</span> <br />
              <span className='ms-2 text-white m-0 fw-bold'>google play store</span>
              </div>
            </div>
            <div className='d-flex foooter  main_footer_button mt-2'>

              <img src={app} className='play_img' alt="" />
              <div>
              <span className='ms-2 text-white m-0 android_fs '>ios app available on</span><br />
              <span className='ms-2 text-white m-0 fw-bold'>app store</span>
              </div>
            </div>
            </div>
            <div className='mt-3 text-start'>
              <div className='social_icons_header  d-flex justify-content-around align-items-center'>
                <img src={insta} className='headiiiier me-3 ms-0' alt="" />
                <img src={twiiter} className='headiiiier me-3 ms-0' alt="" />
                <img src={facebook} className='headiiiier me-3 ms-0' alt="" />
                <div className='d-flex justify-content-center align-items-center'>
                  <img src={w} alt="" className='position-relative' />
                  <img src={w1} alt="" className='position-absolute' />

                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6 mt-3">
            <p className='text-white text-start'><span className='text-white fw-bold'>Newsletter</span>: subscribe to our newsletter to get your weekly dose of news</p>

      

<div class="input-group mt-3">
<div className=''>
           
                < input type="email" className="form-control main_footer_btn  border-none" placeholder="Enter Your Email Adress" aria-label="Input group example" aria-describedby="btnGroupAddon" />

              </div>

    <div class="input-group-text subbbmmmit footer_submit_btn_sub" id="btnGroupAddon">Submit</div>
  </div>

          </div>

          <div className="col-md-6 mt-3">
     

            <p className='text-end text-white mt-3'> <Link to='terms' className='text-white text-decoration-none'>  Terms of Use </Link>
              <Link className='text-white text-decoration-none' to='/pravi'>
                | Privacy Policy
              </Link>

            </p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Al_haram_main_footer
