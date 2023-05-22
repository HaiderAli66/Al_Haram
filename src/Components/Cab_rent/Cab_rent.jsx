import React from 'react'
import Just from '../Just/Just'
import "./Cab_rent.css" 
import Phone_flag  from "../Phone_flag/Phone_flag"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'
import {Link } from "react-router-dom"

function Cab_rent(props) {
  return (
    <div className='pb-5'>


      <Typography className='text-white py-3' variant="h6" style={{ background: "#02A3C1" }} sx={{ flexGrow: 1 }}>
        <div className='text-center pt-1 py-3'><p className='fs-3  upper_list_properties'>Booking Summary <br /></p>
        </div>
      </Typography>
<Just/>







<div className="card container-fluid mb-5 add_travel ">
<div className="container-fluid">
<div className="row">
<h2>Trip Details</h2>
<div className="col-12 p-0">
  <p className='text-start mb-1'> Pick-Your Address</p>

<input className='w-100 p-2' type="text" placeholder=''/>
</div>
<div className="col-12 p-0">
   
   <p className='text-start mt-3 mb-1'> Drop-Off Address</p>
   <input className='w-100 p-2' type="text" placeholder=''/>
</div>


</div>



</div>
<h3 className='pt-3 text-start'>Adult</h3>
<p className='text-start'> Name should be same as in Passport</p>
<div className='row'>
    <div className="col-lg-4 pb-2">
        <select class="form-select p-2" aria-label="Default select example">
  <option selected>Title</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 pb-2">
      <input className='w-100 p-2' type="text" placeholder='FirstName'/>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 pb-2">
    <input className='w-100 p-2' type="text" placeholder='LastName'/>
    </div>
</div>
      
      

<div className='row mt-4'>
    <div className="col-lg-4 pb-2 ">
        <select class="form-select p-2 " aria-label="Default select example ">
  <option selected>No of passenger</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 pb-2">
      <input className='w-100 p-2' type="email" placeholder='Enter Email Id'/>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12 pb-2">
   <Phone_flag/>
    </div>
</div>

       </div>

<div className="add_travel d-flex">
              <div className="">
              <img src="Ellipse 248.png" className='ps-3' alt="" />

              </div>
              <div className="add_travel_text">
                <h5 className='text-start ps-3 text-start'>Use GST For This Booking</h5>
                <p className='text-start'>(To Claim Credit Of Gst Charged By Airline/Al Haram Please Enter Your Company Gst Number)</p>
              </div>
          </div>


        <div className="add_travel d-flex">
              <div className="add_travel_emg">
                <img src="Vector.png" alt="" />
                {/* <img src="Ellipse 248.png" className='ps-3' alt="" /> */}
              </div>
              <div className="add_travel_text text-start  ps-2">
                <h5>Add Travel Insurance And Secure Your Trip With ACKO Travel Insurance For INR 59/Person</h5>
                <p>(Upon Selecting Travel Insurance ,You Accept The Terms And Conditions Of The Travel Insurance Policy)</p>
              </div>
          </div>
            
          
         
            
             



<div className="add_travel d-flex">
              <div className="add_travel_text">
                <h3 className='text-start'>IMPORTANT INFORMATION</h3>
<ul className='text-start text-muted m-0 p-0'>
    <li>Airline Cancellation Fee is Rs 4500 per passenger for your selected flight on the sector Delhi to Dubai
</li>
    <li>Certify your health status through the Aarogya Setu app or the self-declaration form at the airport
</li>
    <li>Remember to web check-in before arriving at the airport</li>
<li> Face masks are compulsory</li>

</ul>
              </div>
          </div> 
          

          <div className="price_summary">
            <h5 className="text-center">Price Summary</h5>
          <table class="table price_tbl">
  <tbody>
    <tr>
      <td colspan="2">Adult : 1</td>
      <td className="price">28,500.00</td>
    </tr>
    <tr>
      <td colspan="2">All Taxes</td>
      <td className="price">1500.00</td>
    </tr>
    <tr>
      <td className="price grand" colspan="2">Grand Total</td>
      <td className="price grand">30,000.00</td>
    </tr>
  </tbody>
</table>
           
           <div className="price_btn">
           <Link to='/Paynow' className='text-decoration-none fw-bolder text-white'>     <div className="btn price_bkng bto mt-5 py-2 text-white"><b>   <h6 className='m-0 py-2'>PAY NOW</h6> </b> </div> </Link>
           </div>

           
          </div>
      
    </div>
  )
}

export default Cab_rent




