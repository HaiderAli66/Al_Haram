import React from 'react'
// import Umrah_card from '../Umrah_card/Umrah_card'
import { Link } from 'react-router-dom';
import Model_book from '../Model_book/Model_book';
import Phone_flag from '../Phone_flag/Phone_flag';
import Adult_card from './Adult-card/Adult-card';
import "./Umrah_Booking.css" 


function Umrah_Booking() {
  return (
    <div>
      <Adult_card/>
       <div className="card container-fluid mb-5 add_travel ">
<h3 className='pt-3'>Adult</h3>
<p>Name should be same as in Passport</p>
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
<div className='mt-3 mb-5'>
    <button className='btn btn-info text-white me-2'>Upload passport copy</button>
    <button className='btn btn-info text-white'>Add adult</button>
</div>
       </div>

<div className="add_travel d-flex">
              <div className="add_travel_text">
             

                <h3 className='text-start'>VISA INFORMATION</h3>
                
<ul className='text-start'>
    <li>Please make sure that you have all relevant visa, transit visa (if applicable), immigration clienton ths from the date of travel.</li>
    <li>All visa rules on our website are just indicative & are updated with best of our efforts. Please refer official website country</li>
    <li>To explore the complete and accurate requirements. EaseMyTrip will not be liable for any claims about non-travel document</li>

</ul>
              </div>
          </div>



        <div className="add_travel d-flex mb-5 mt-5 card">
              
              <div className="add_travel_text d-grid d-md-flex   ">
              <img className='pe-4 pb-2' src="Vector.png" alt="" />
              <img className='pe-4 ms-2 Ellipse' src="Ellipse 248.png" alt="" />
              <div className='text-start '>
                <h5>Add Travel Insurance And Secure Your Trip With ACKO Travel Insurance For INR 59/Person</h5>
                <p>(Upon Selecting Travel Insurance ,You Accept The Terms And Conditions Of The Travel Insurance Policy)</p>
              </div></div>
          </div>

          <div className="add_travel d-flex">
              <div className="">
            
              </div>
              <div className="add_travel_text d-flex text-start">
              <img className='p-1 h-50  Ellipse d-none d-md-block' src="Ellipse 248.png " alt="" />
              <div> <h5 className='text-start ps-3'>Use GST For This Booking</h5>
                <p className='ps-3'>(To Claim Credit Of Gst Charged By Airline/Al Haram Please Enter Your Company Gst Number)</p></div>
               
              </div>
          </div>

          <div className="price_summary container-fluid mb-5">
            <h5 className="text-center">Price Summary</h5>
 <div className="container-fluid">
  <hr/>
<div className="row">
  <div className="col-6 fs-4 utext ps-5">Adult : 1</div>
  <div className="col-6 pe-5 fs-4 utext text-end">28,500.00</div>
</div>
<hr/>

<div className="row">
  <div className="col-6 fs-4 utext ps-5">All Taxes</div>
  <div className="col-6 pe-5 fs-4 utext text-end">1500.00</div>
</div>
<hr/>

<div className="row">
  <div className="col-6 ps-5 fs-4 utext"><b>Grand Total</b></div>
  <div className="col-6 fs-4 pe-5 text-end utext"><b>30,000.00</b> </div>
</div>
<hr/>

 </div>


           
<div className="text-center mt-5">
          <Model_book/>
           </div>

           
          </div>
      
    </div>
  )
}

export default Umrah_Booking