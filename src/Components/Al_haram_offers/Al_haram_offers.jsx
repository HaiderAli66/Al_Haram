import React from 'react'
import "./Al-haram_offers.css"
import Alharam from "../Assets/Alharam.png"

function Al_haram_offers() {
  return (
    <div className='offers_main'>
        <div className="container">
            <h1 className='offers_heading_main'>special offers</h1>
            <p className='offers_para'>These popular destinations have a lot to offer</p>
         
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 mt-2  text-start">
                    <div className='img_hh'>
                   <h3 className='text-start offers_heading'>Explore Umrah
Packages</h3>
<div className="d-flex justify-content-center">
<button className='offers_btn btn_hvr'>Veiw More</button>
</div>
                

                </div>
                </div>
                <div className="col-md-4 mt-2 text-start">
                    <div className='img_hh2'>
                   <h3 className='text-start offers_heading'>create your own 
umrah package</h3>
<div className="d-flex justify-content-center">
<button className='offers_btn btn_hvr'>Veiw More</button>
</div>
                

                </div>
                </div>
                <div className="col-md-4 mt-2  text-start">
                    <div className='img_hh3'>
                   <h3 className='text-start offers_heading'>Up to 70%
Discount!</h3>
<div className='d-flex justify-content-center '>
<button className='offers_btn btn_hvr '>Veiw More</button>
</div>

                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Al_haram_offers
