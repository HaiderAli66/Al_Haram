import React from 'react'
import "./Hotal_second_page.css"
import Slidercor from '../Slidercor/Slidercor';
import { BsTelephoneFill } from 'react-icons/bs';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TbMap2 } from 'react-icons/tb';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import TabPark from '../TabPark/TabPark';
import Similar from '../Similar/Similar';
function Hotal_second_page() {
  return (
    <div className=' mt-5'>
      <div className="text-capitalize   text-start ms-1 ms-md-5 capstan-lef">al khobar resturant </div>
<div className='capstan-lef2 text-capitalize text-start ms-1 ms-md-5 py-2'> <TbMap2 className='me-1 fs-3'/> 

28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A</div> 
      <div className="row px-3 m-0">
        <div className="col-lg-8 col-md-6 col-sm-12">
        <div className='mt-3'>
        <Slidercor sliderlan1="Mesa 1.png" sliderlan2="Mesa 1.png" sliderlan3="Mesa 1.png"/>
       </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3 naya-color  text-white  "> 
        <div className="">
            <div className="row fs-4 mt-4 text-center ">
                
                <div className="col-12 justify-content-center d-flex ">
                <BsTelephoneFill className=' mt-2'/>  +91 1234 567 8910
                </div>
                <div className="text-capitalize mt-2">
                opening hours   &nbsp;&nbsp;  09:00am
                </div>
               
                <div className="text-capitalize mt-2">
                closing hours   &nbsp;&nbsp;  05:00pm
                </div>
            </div>

           
            <div className="fs-4 row mt-3 text-center">
           <p>Direction</p> 
            </div>
            </div>
            <div className="row  mt-3">
                <img src="Screenshot 2022-07-25 065204 1.png"  alt="" />
            </div>
            <div className="text-capitalize fs5 text-start py-3">
            Opposite Raheja Garden, <br/>
Mohan Koppikar Road, Teen Hath<br/>
Naka, Wagle Estate, Thane West,Thane
            </div>
        </div>
      </div>
      <TabPark/>
      <div className="mt-5 container">
      <div className='flight_main'>
        <div className="first">
        

        <div className="swipppr">
   

        <div className="secondly">
      
        <p className='fli text-start text-capitalize ms-'>similar amusement parks</p>

        <div className="swipppr">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 70,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='silde '><Similar/> </SwiperSlide>
        <SwiperSlide className='silde'><Similar/> </SwiperSlide>
        <SwiperSlide className='silde'><Similar/> </SwiperSlide>
        <SwiperSlide className='silde'><Similar/> </SwiperSlide>
        <SwiperSlide className='silde'><Similar/> </SwiperSlide>
        
      </Swiper>
        </div>
        </div>
    </div>
      </div></div>
    </div></div>
  )
}

export default Hotal_second_page
