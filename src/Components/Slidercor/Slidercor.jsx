import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slidercor.css";

// import required modules
import {  Autoplay,Pagination } from "swiper";

export default function Slidercor(props) {
  return (
    <>
      <Swiper
       spaceBetween={30}
	   centeredSlides={true}
	   autoplay={{
		 delay: 2500,
		 disableOnInteraction: false,
	   }}
	   pagination={{
		 clickable: true,
	   }}
	   navigation={true}
	   modules={[Autoplay, Pagination]}
	   className="mySwiper"
	 >
        <SwiperSlide ><img src={props.sliderlan1} className="SwiperSlide12" alt="" /></SwiperSlide>
        <SwiperSlide ><img src={props.sliderlan2} className="SwiperSlide12" alt="" /></SwiperSlide>
        <SwiperSlide ><img src={props.sliderlan3} className="SwiperSlide12" alt="" /></SwiperSlide>
       
       
        
      </Swiper>
    </>
  );
}
