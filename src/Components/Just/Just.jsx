import React from 'react'
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import WorkIcon from "@mui/icons-material/Work";
import SpeedIcon from "@mui/icons-material/Speed";

function Just() {
  return (
    <div>
   
    <div className='mb-5 container-fluid'>
            <h3 className='my-3'>Cab Informaton</h3>
                <div className=" card  m-auto ">
                  
                    <div className="row">
                    <div className="col-lg-3 col-sm-12 ">
                        <div className='mt-4'>
                            <h5>Toyota camry</h5>
                            <p>Tl-767854</p>
                        </div>
<img src="kindpng_6053405 1.png" className='car-moto mb-5 mt-4' alt="" />

                    </div>
                    <div className="col-lg-9 col-sm-12 ">
<div className="toto text-start ms-3 mt-3 d-md-flex d-block align-items-center ps-md-0 ps-2">

    <h5>Toyota camry or similar</h5>
  
    <p className=" fs-8-white mt-2 ms-0 ms-md-2">WHITE</p>
    <p className="  px-1 white mt-2 ms-0 ms-md-2 border text649">649 rating</p>
    
    </div>

<div className='col-sm-12 ps-4 text-start ps-md-2' >Best Priced Car With Best Promise</div>

<div className='row m-0 p-0 '>
  <ul className='d-flex  ps-3 mt-3 res'>
    <div className='  px-3 text-start'>
    <li >Toll and State Tax: Included               
</li>
</div>
<div className='px-3 text-start'>
    <li>Free cancellation</li>
    </div>
    <div className='px-3 '>
    <li className='text-start'>24/7 customer helpline</li>
    </div>

  </ul>
</div>









    <div className="row d-flex  text-muted mt-3">

<div className="col-lg-2 col-6">
<h6 className=' '>
<DirectionsCarFilledIcon/>
   <p>1 Unit</p>
</h6>
</div>
<div className="col-lg-2 col-6">
<h6 className=''>
<EventSeatIcon />
    
    <p> 4 SEATS</p>
  </h6>
  </div>
<div className="col-lg-2 col-6">
<h6 className='h6'>
    <WorkIcon />
    <p> 2 LUGGAGE BAGS</p>
     
  </h6>
</div>
  <div className="col-lg-2 col-6">
  <h6 className=''>
    <SpeedIcon />
    
    <p> 123 KM</p>
  </h6>
  </div>
        
    </div> 


                    </div>
                </div>
               
                </div>
            </div>
      


    </div>
  )
}

export default Just
