import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"

import {FaWhatsappSquare} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import "./Al_haram_header.css"
import {Link} from "react-router-dom"
import insta from "../Assets/insta.png"
import  twiiter from  "../Assets/twiiter.png"
import  facebook from  "../Assets/facebook.png"
import  w from  "../Assets/w.png"
import  w1 from  "../Assets/w1.png"


function Al_haram_header() {
  return (
    <div className='main_header_main_bg'>
        
            
        <div className='upper_header_bg'>
        <div className="d-flex resP_DIr justify-content-end px-3">
            {/* <div className='social_icons_header  d-flex justify-content-center align-items-center'>
                  <img src={insta} className='headiiiier' alt="" />
                  <img src={twiiter} className='headiiiier' alt="" />
                  <img src={facebook} className='headiiiier' alt="" />
                  <div className='d-flex justify-content-center align-items-center'>
                    <img src={w} alt="" className='position-relative' />
                    <img src={w1} alt="" className='position-absolute' />
                    
                  </div>
             
            </div> */}
            <div className='REspon_pro'>
              <Link to='/sinng'>  <button className='btn al_haram_header_btn btn_hvr'>Become a travel agent</button></Link>
            <Link to='/loogin'>    <button className='btn al_haram_header_btn btn_hvr  ms-2'>log in</button> </Link>
            </div>
        </div>
        </div>
        
      
        </div>
   
  )
}

export default Al_haram_header
