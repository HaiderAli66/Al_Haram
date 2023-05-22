import React from 'react'

import "./Al_haram_footer.css"
import she from "../Assets/she.png"
import smi from "../Assets/smi.png"

import box from "../Assets/box.png"
import boxx from "../Assets/boxx.png"

function Al_haram_footer() {
  return (
    <div className='al_haam_footer'>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-3 mt-3">
            <div className='d-flex align-items-center justify-content-start justify-content-md-center '>
              <div>

                <img src={she} className='width_img_home' alt="" />
              </div>
              <div className="text-start">
                <span className='footer_icons_para mt-3 ms-3 '>1500+ verified agents</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className='d-flex align-items-center justify-content-start justify-content-md-center'>
              <div> <img src={smi} className='width_img_home' alt="" /></div>
              <div className="text-start">

                <span className='footer_icons_para mt-3 ms-1 '>1 Lakh+ verified guests</span></div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className='d-flex align-items-center justify-content-start justify-content-md-center'>
              <div>

                <img src={box} className='width_img_home rsponSIVE_mr' alt="" /></div>
              <div className="text-start">
                <span className='footer_icons_para mt-3 ms-3 '> 1k + Packages</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className='d-flex align-items-center justify-content-start justify-content-md-center'>
              <div>

                <img src={boxx} alt="" className='width_img_home rsponSIVE_mr' />
              </div>
              <div className="text-start">
                <span className='footer_icons_para mt-3 resssssspon  ms-3  '>2 Lakh+ Booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Al_haram_footer
