import React from 'react'
import { GiRocketThruster } from 'react-icons/gi';
import { BsEye} from 'react-icons/bs';
import Al_haram_footer from '../Al_haram_header/Al_haram_footer';
import b from "../Assets/b.png"
import b1 from "../Assets/b1.png"
import c from "../Assets/c.png"
import c1 from "../Assets/c1.png"
import f from "../Assets/f.png"
import fire from "../Assets/fire.png"
import user from "../Assets/user.png"

import "./About_us.css"
function About_us() {   
  return (
    <div className='pb-5'>
       <div className=' heading py-2 text-white mac_res fs-5 mb-5'>
        <h3 className='mb-0'>About Us</h3> 
        </div>
        <div className="container-fluid px-5 pb-4">
        <div className="row bobiob mt-5">
            <div className="col-lg-6">
<h1 className='text-start who-r mb-5 mac_about_us_heading'>Who We are</h1>
<div className=" text-start who-are   ">
    <p className='mac_about_us_para'>
One of the most trusted travel group providing best services with to its
clients since decades. Our director’s lorem ipsum a sons of Maxim’s on
founder lorem ipsum, are running these companies.lorem ipsum and i  
and glow is offering personalised services at every step, as not only one
a travel agency but also for exclusive.founder lorem ipsum, are running 
and glow is offering personalised services at every step, as not only on i
a travel agency but also for exclusive.founder lorem ipsum, are running 
and glow is offering personalised services at every step.
</p>
</div></div>
            
            <div className="col-lg-6">
<img src="image 29.png" className='w-100' alt="" />
            </div></div>
        </div>
      
<Al_haram_footer/>






        <div className="container-fluid px-5">
        <div className="row bobiob mt-5">
            <div className="col-lg-6">
<img src="image 29.png" className='w-100' alt="" />
            </div>
            
            <div className="col-lg-6">
<h1 className='text-start who-r mb-5 mac_about_us_heading'>Who We Do</h1>
<div className=" text-start who-are mac_about_us_para">
One of the most trusted travel group providing best services with to its
clients since decades. Our director’s lorem ipsum a sons of Maxim’s on
founder lorem ipsum, are running these companies.lorem ipsum and i
and glow is offering personalised services at every step, as not only one
a travel agency but also for exclusive.founder lorem ipsum, are running 
and glow is offering personalised services at every step, as not only on i
a travel agency but also for exclusive.founder lorem ipsum, are running 
and glow is offering personalised services at every step.
</div></div>

            </div>
        </div>

        <div className="container-fluid  px-md-5 mt-5">
        <div className="row bobiob mt-5">
            <div className="col-lg-6 ">
               
            <div className=" text-justify text-white gora p-md-5 p-0">
            <p className='mission text-start'><GiRocketThruster/> Our Mission</p>
  <p className='text-start px-3'> One of the most trusted travel group providing best services with to its
clients since decades. Our director’s lorem ipsum a sons of Maxim’s on
founder lorem ipsum, are running these companies.lorem ipsum and i
and glow is offering personalised services at every step, as not only one
a travel agency but also for exclusive.founder lorem ipsum, are running 
and glow is offering personalised services at every step, as not only on i
a travel agency but also for exclusive.founder lorem ipsum, are running 
and glow is offering personalised services at every step. </p>
</div>

            </div>
            
            <div className="col-lg-6 ">

<div className=" text-justify text-white mt-md-0 mt-3 p-5  gora ">
<p className='mission text-start'><BsEye/> Our Vision</p>
  <p className='text-start px-3 '>
One of the most trusted travel group providing best services with to its
clients since decades. Our director’s lorem ipsum a sons of Maxim’s on
founder lorem ipsum, are running these companies.lorem ipsum and i
and glow is offering personalised services at every step, as not only one
a travel agency but also for exclusive.founder lorem ipsum, are running 
and glow is offering personalised services at every step, as not only on i
a travel agency but also for exclusive.founder lorem ipsum, are running 
and glow is offering personalised services at every step.
</p>
</div>
</div>
<div className='main_chance_bg mt-5'>
        <div className="container  mt-5">
            <div className="row">
                <div className="col-md-6 text-start">
                    <h1 className='choose_us_heading text-start'>why choose us</h1>
                    <h4 className='choose_sub_heading'>Al-Haram Trip is a Worlds Leading
Religious Travel Booking Platform</h4>
<p className='text-start text-white'>


Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
<button className='choose_btn mt-4 '>Veiw More</button>
                </div>
                <div className="col-md-6 ">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className='choose_box mt-3'>
                             
                                <div className='d-flex justify-content-center align-items-center'>
                                <img src={fire} alt="" className='abs' />
                                <img src={f} alt="" className='rel' /></div>
                                <p className='Choose_box_para mt-3'>exciting deals</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='choose_box mt-3'>
            
                                <img src={user} alt="" />
                                <p className='Choose_box_para mt-3'>24/7 support</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-6  d-flex justify-content-end">
                            <div className='choose_box mt-3 '>
                         
                                <div className='d-flex justify-content-center'>
                                <img src={b} alt="" className='abs' />
                                <img src={b1} alt="" className='rel margggg' /></div>
                                <p className='Choose_box_para mt-3'>easy booking</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='choose_box mt-3 '>
                           
                                <div className='d-flex justify-content-center'> 
                                                                   <img src={c} alt="" className='abs'  />
                                                                   <img src={c1} alt="" className='rel c_marr' />
                                                                   </div>

                                <p className='Choose_box_para mt-3'> lowest price</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
<div className="container mt-5">
<div className="row mt-5 gora p-md-5 p-0">
<div className="col-lg-6">
    <h1 className='mb-md-5 mt-md-0 mt-2  text-white'>visit us</h1>
<img src="Screenshot 2022-07-25 065204 1.png" className='w-100' alt="" />
</div>
<div className="col-lg-6 text-white text-start">
<h1 className=' mt-md-0 mt-5 mb-md-5 text-white'>Contact Us</h1>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control input-padd" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="text" class="form-control input-padd" id="exampleFormControlInput1" placeholder="Enter Your Email"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="text" class="form-control input-padd" id="exampleFormControlInput1" placeholder="Enter Your Phone"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Subject</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
</div>



</div>
</div>
</div>
            </div>
        </div>



        
    </div>
  )
}

export default About_us
