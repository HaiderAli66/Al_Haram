import React from 'react'
import "./Similar.css"
import { BsTelephoneFill } from 'react-icons/bs';
import { TbMap2 } from 'react-icons/tb';
function Similar() {
  return (
   
      <div className="card black-devil w-100">
      
            <img src="qui-nguyen-giL2fHNr3Lc-unsplash 2.png" className='w-100' alt="" />
        <div className="row">
            <div className="fs-4 fw-bold py-3 special_moblie alignment">Al Khobar Resturant</div>
            <div className="col-12 justify-content-start ps-4  capstan d-flex ">
                <BsTelephoneFill className='mt-1 '/>  +91 1234 567 8910
                </div>
                <span className='fs-6 py-2 pb-5 capstan special_moblie_para'> <TbMap2 className='me-1 fs-6'/> 
 28800 Orchard Lake Road, saudi arabia</span> 
 <button className='btn  text-white w-75 gold-leaf m-auto mb-4 fw-bold outline-none bg_button_hver'> More Details</button>
        </div>
      </div>
   
  )
}

export default Similar
