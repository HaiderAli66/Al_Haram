import React from 'react'
import "./Login.css"
import { MdOutlineLocalAirport } from 'react-icons/md';
import { BiBed } from 'react-icons/bi';
import { FaBus } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { FaMosque } from 'react-icons/fa';
import Phone_flag2 from '../Phone_flag2/Phone_flag2';
import Slidercor from '../Slidercor/Slidercor';
function Login() {
  return (
    <div className=" pb-5  ">
    <div className=' heading py-2  '>
 <div className="maini row mx-0 d-flex ">
   <div className="al col-lg-2 col-sm-12  ms-5 ">
       AL
   </div>
   <div className='harmiry col-lg-2    pt-1 mt-2'>haram</div>
   <div className=' text-white fs-4 col-lg-7 mt-2 pt-1 col-sm-12 text-capitalize'>Unmatched opprtunities for travel agents</div>
 </div>
 
 </div>
<div className=' container-fluid pt-5'>
  

 <div className="row justify-content-center">

   <div className="col-lg-7 col-sm-12 ">
       <div className="row">
           <div className="col-lg-2 col-sm-6  ">
               <div className='icoland mt-5  m-0  p-2'> <MdOutlineLocalAirport className='icoblod'/></div>
               
           <span className='icotext text-center'>FLIGHTS</span></div>
           <div className="col-lg-2 col-sm-6 ">
               <div className='icoland mt-5  m-0 p-2'> <BiBed  className='icoblod'/></div>
               <span className='icotext text-center'>HOTELS</span></div>
           <div className="col-lg-2 col-sm-6 ">
               <div className='icoland mt-5  m-0 p-2'><FaBus  className='icoblod'/> </div>
               <span className='icotext text-center'>TRANSPORT</span></div>
           <div className="col-lg-2 col-sm-6 ">
               <div className='icoland mt-5 m-0  p-2'> <FaCcVisa  className='icoblod'/></div>
               <span className='icotext text-center'>VISA</span></div>
           <div className="col-lg-2 col-sm-6 ">
               <div className='icoland mt-5  m-0 p-2'> <FaMosque  className='icoblod'/></div>
               <span className='icotext text-center'>Umrah</span></div>
       </div>

       <div className='mt-3'>
        <Slidercor sliderlan1="Advance 1.png" sliderlan2="Advance 1.png" sliderlan3="Advance 1.png"/>
       </div>
   </div>
   <div className="col-lg-4 col-sm-12 side-al ucode">

<div className='' >
<h4 className="welo text-white text-center">Welcome to al haram!</h4>
</div>
<p className=' text-white text-center'>Please sign-in to your account and start the adventure</p>
<div className="inputy text-start text-white mt-5">
<label for="exampleFormControlInput1" class="form-label" style={{fontSize:"18px",position: "relative",bottom:"-17px" }}>Phone Number</label>
<Phone_flag2 />
<div class="mb-5">

  <label for="exampleFormControlInput1" class="form-label " style={{fontSize:"18px"}}>Password</label>
  <input type="password" class="form-control " style={{padding:"12px"}} id="exampleFormControlInput1" placeholder="Password"/>
</div>
   
   </div>

<div>
    <button className='btn bg-white btn-lg px-5 '>SIGN IN</button>
    <div className="text-white mt-4 pb-3">New on our platform? Create an account

</div>
</div>

   </div>
   
 </div>
       
   </div>
   </div>
               
   
  )
}

export default Login
