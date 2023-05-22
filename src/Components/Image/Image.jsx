import React from 'react'
// import TextField from '@mui/material/TextField';
import "./Image.css"

import { Link } from 'react-router-dom';
function Image() {
  return (
    <div>
         
         <div class="container justify-contant-center">
  <div class="row ">
    <div class="col-lg-8 col-md-6 col-sm-12 ">
    <img className='wight d-block w-100 h-100 pb-2' src="adli-wahid-Y9bC2h5V9c8-unsplash 2.png" alt=""  />
    </div>
    <div class="col-lg-4 col-sm-12 col-md-6 card ucard ">
        <div className='   px-3 pb-1 pt-4'>   <h6 className='text-white text-start'>Depature City</h6>
    <select class="form-select p-3" aria-label="Default select example">
  <option selected>Ex Mumbai</option>
  <option value="1">Lahore</option>
  <option value="2">Dehli</option>
  <option value="3">Panjab</option>
</select></div>
     
<div className='   px-3'>   <h6 className='text-white text-start'>Depature Date</h6>
<input type="date" className='p-3 mb-2 w-100  rounded border' />
</div>
<div className='  px-3 pb-3'>   <h6 className='text-white text-start'>Package Category</h6>
    <select class="form-select px-3 pb-2 w-100" aria-label="Default select example">
  <option selected>Luxury</option>
  <option value="1">High</option>
  <option value="2">Medium</option>
  <option value="3">Normal</option>
</select></div>
<div className=' '>

       <div className=' mt-2 pt- pb-1 px-3'><input disabled type="text"  placeholder='Per Person                                  $18000' className='p-3 w-100 text-muted rounded border bg-white' /></div> 
 </div><br/>
 <div className="p-3"> <button className='btn btn-outline-light p-3 w-100 mb-2  text-white uHover'><b>Make an Esnquiry</b></button><br/>
 <Link to="/Main_booking"> <button className='btn btn-outline-light p-3 mb-2 text-white w-100 uHover' ><b>Book Now</b></button></Link></div>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Image
