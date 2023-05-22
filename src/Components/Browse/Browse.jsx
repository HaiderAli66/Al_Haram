// import React from 'react'
import "./Browse.css"
import React, { useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";





const Browse = () => {
  return (
    <div>

    <div className="container-fluid mt-3 bro">
    <div className="row">
    <div className="col-12 ">
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}       
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        loop={true}
           Swiper navigation={true} 
            modules={[Navigation]} 
            className="mySwiper">

        <SwiperSlide className="border slidecalo text-black pt-3 pb-3">AL BUSHRA TRAVELS</SwiperSlide>
        <SwiperSlide className="border slidecalo text-black">AL BUSHRA TRAVELS</SwiperSlide>
        <SwiperSlide className="border slidecalo text-black">AL BUSHRA TRAVELS</SwiperSlide>
        <SwiperSlide className="border slidecalo text-black">AL BUSHRA TRAVELS</SwiperSlide>
        <SwiperSlide className="border slidecalo text-black">AL BUSHRA TRAVELS</SwiperSlide>
        <SwiperSlide className="border slidecalo text-black">AL BUSHRA TRAVELS</SwiperSlide>
        <SwiperSlide className="border slidecalo text-black">AL BUSHRA TRAVELS</SwiperSlide>
        <SwiperSlide className="border slidecalo text-black">AL BUSHRA TRAVELS</SwiperSlide>
        <SwiperSlide className="border slidecalo text-black">AL BUSHRA TRAVELS</SwiperSlide>
      </Swiper>
    </>
    </div>
    </div>

    <div className="row mt-5 mb-5 text-start text-md-center">
    <span>
        <h1>BROWSE BY CATEREER</h1>
    </span>
    <p className="text-muted txone">
        DISCOVER BEST THINGS TO DO RESTAURANTS, SHOPPING, HOTELS, CAFES AND PLACES <br/>AROUND THE WORLD BY CATEGORIES
    </p>
    </div>

    </div>

    </div>
  )
}

export default Browse
