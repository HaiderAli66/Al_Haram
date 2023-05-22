import React from 'react'
import "./Sinup.css"
import { MdOutlineLocalAirport } from 'react-icons/md';
import { BiBed } from 'react-icons/bi';
import { FaBus } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { FaMosque } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import Planee from "../Assets/Planee.png"
import Bed from "../Assets/Bed.png"
import Bus from "../Assets/Bus.png"
import Visa from "../Assets/Visa.png"
import Mosque from "../Assets/Mosque.png"
function Sinup() {
  return (
    <div className="  b_agent">
         <div className=' heading py-2  '>
      <div className="maini row mx-0 d-flex ">
        <div className="al col-lg-2 col-sm-12   ">
            AL
        </div>
        <div className='harmiry col-lg-2    pt-1 mt-2'>haram</div>
        <div className=' text-white fs-4 col-lg-7 mt-2 pt-1 col-sm-12 text-uppercase'>Unmatched opprtunities for travel agents</div>
      </div>
      
      </div>
    <div className=' container-fluid'>
       

      <div className="row justify-content-center">
        {/* <div className="col-lg-2 col-sm-12"></div> */}
        <div className="col-lg-8 col-sm-12 ">
            <div className="row justify-content-around">
                <div className="col-lg-2 col-sm-6  ">
                    <div className='sing_up_box_bg mt-5 sign_box_size d-flex justify-content-center align-items-center   p-2'> <img src={Planee} className='' alt="" />
                    
                    
                    </div>
                <span className='icotext text-center'>FLIGHTS</span>
                    
                </div>
                <div className="col-lg-2 col-sm-6 ">
                    <div className='sing_up_box_bg mt-5 sign_box_size d-flex justify-content-center align-items-center p-2'><img src={Bed} alt="" /></div>
                    <span className='icotext text-center '>HOTELS</span></div>
                <div className="col-lg-2 col-sm-6 ">
                    <div className='sing_up_box_bg mt-5 sign_box_size   d-flex justify-content-center align-items-center    p-2'><img src={Bus} alt="" /> </div>
                    <span className='icotext text-center'>TRANSPORT</span></div>
                <div className="col-lg-2 col-sm-6 ">
                    <div className='sing_up_box_bg mt-5 sign_box_size  d-flex justify-content-center align-items-center   p-2'><img src={Visa} alt="" /></div>
                    <span className='icotext text-center'>VISA</span></div>
                <div className="col-lg-2 col-sm-6 ">
                    <div className='sing_up_box_bg mt-5  sign_box_size  d-flex justify-content-center align-items-center  p-2'><img src={Mosque} alt="" /></div>
                    <span className='icotext text-center'>Umrah</span></div>
            </div>
        </div>
        {/* <div className="col-lg-2 col-sm-12"></div> */}
      </div>
      <div className='container ucode  sign_baba mt-5 mb-5 '>
      <div className="row text-start text-white  ">
        {/* <div className="col-lg-9"></div> */}
        <div className="col-lg-6 col-sm-12 pt-3">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Travel Agency Name</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Travel Agency Name'/>
  
  </div></div>

  <div className="col-lg-6 col-sm-12 pt-3">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Phone Number'/>
  
  </div></div>



  <div className="col-lg-6 col-sm-12 ">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">City</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Al bushra Travels & Tours'/>
    
  </div></div>

  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Address'/>
  
  </div></div>

  
  <div className="col-lg-6 col-sm-12 d-flex">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">City</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter City Name' />
    
  </div>
  <div class="mb-3 ms-5">
    <label for="exampleInputEmail1" class="form-label">Country</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Country Name' />
    
  </div>
  </div>
  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Contact person name</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter your Name'/>
    
  </div></div>

  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Password</label>
    <input type="password" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Password'/>
    
  </div></div>
  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Confirm  Password</label>
    <input type="password" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Confirm Password'/>
    
  </div></div>
<div className="col-lg-12 d-flex mb-3">
Are you licensed umrah agent/umrah agent
<div class="form-check ms-3">

  <label class="form-check-label" for="flexRadioDefault1">
 Yes
  </label>
  
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>


</div>
<div class="form-check ms-3">

  <label class="form-check-label" for="flexRadioDefault1">
 No
  </label>
  
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>


</div>
</div>

  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">License Number of Ministry of Umrah or Hajj</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your License Number'/>
    
  </div></div>
  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Iban Number</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter  Iban Number'/>
    
  </div></div>
 
      {/* <div className="d-flex">
      <button className='btn  btooo mt-4 mb-4 bg-white text-uppercase'>Create Account</button>
        
        <button className='btn  float-end mt-4 text-bolda mb-4 bg-white'><FaWhatsappSquare className='whattw'/> HELP</button>
        </div> */}
        <div className="row">
          <div className="col-md-6 offset-md-4">
          <button className='btn  btooo mt-4  bg-white text-uppercase'>Create Account</button>
          <p  className="text-white alhaa pb-3 mt-2 ms-3">Already have an account..? <a href="#" className='decoratin-none text-white alhaa ms-3'>Login</a></p>
          </div>
          <div className="col-md-2 d-flex justify-content-end p-0">
            <div> <button className='btn  float-end mt-4 text-bolda mb-4 bg-white'><FaWhatsappSquare className='whattw'/> HELP</button></div>
            
          </div>
        </div>
        </div>




        


        {/* <div className="text-white alhaa pb-3 ">Already have an account..? <a href="#" className='decoratin-none text-white alhaa'>Login</a> </div> */}
      </div></div>
      </div>
  )
}

export default Sinup
