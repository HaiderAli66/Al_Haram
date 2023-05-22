// import React from 'react'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Model_book.css"
// import tick_yes from "../Assets/tick_yes.png"
// import tc from "../Assets/tc.png"
// import tko from "../Assets/tko.png"npm
function Model_book() {
    
    const [lgShow, setLgShow] = useState(false);
  return (
    <div>
     
      <Button onClick={() => setLgShow(true)} className="colorofmodels fw-bold ">Book Now</Button>
    
      <Modal
     
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton
         className='colorofmodel text-white'>
          <Modal.Title id="example-modal-sizes-title-lg">
          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
         className='colorofmodel p-0'>
        <div className="container  ">
      
      <div className="row pt-2 mt-3 ">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Name</h6>
              <input type="text" className='w-100 p-2 ' placeholder='Enter Name' />
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Phone Number</h6>
              <input type="number" className='w-100 p-2'  placeholder='Enter Number'/>
          </div>
      </div>
      <div className="row  mt-3">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Email</h6>
              <input type="email" className='w-100 p-2' placeholder='Enter Email'/>
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Package Name</h6>
              <input type="text" className='w-100 p-2' placeholder='Enter package'/>
          </div>
      </div>
      <div className="row  mt-3">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Departure City</h6>
              <input type="text" className='w-100 p-2' placeholder='Enter City' />
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Travel Date</h6>
              <input type="text" className='w-100 p-2' placeholder='Enter Data' />
          </div>
      </div>
      <div className="row  mt-3">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>No of person</h6>
              <input type="password" className='w-100 p-2' placeholder='Enter Password'/>
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white' >Confirm password</h6>
              <input type="password" className='w-100 p-2'placeholder='Enter Confirm Password' />
          </div>
      </div>
      <div className="send mt-5 text-center ">
      {/* <button className='btn btn-outline-light  btn-lg mb-5 '><b>Submit</b></button> */}
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Demo Modal
</button> */}
     {/* <!-- Button trigger modal --> */}
     <button type="button" className="btn modal_submit_buttn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Submit
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-body gr">
        <div className='text-end'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <div className='main'>
            <div className='p-5'>
                {/* <img src={tko} alt="" className='tick_ok' /> */}
                <img src="./images/success_msg_img/tick_yes.png" alt="" className='tick_ok' />
            </div>
            <div className='text-white'>
                <h3>Your Booking Is Confirmed <br /> Successfully</h3>
            </div>
        </div>
      </div>

      <div class="modal-footer pt-3 pb-3 d-flex justify-content-center">
        <div>
            <h4 className='text-capitalize' >all the details have been sent to your registered e-mail</h4>
        </div>
      </div>

    </div>
  </div>
</div>
      </div>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Model_book
