import React,{ useRef, useState } from 'react';
import './Flights.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import one from '../../Assets/one.png';
import two from '../../Assets/two.png';
import three from '../../Assets/three.png';
import makkah from '../../Assets/makkah.png';
import madina from '../../Assets/madina.png';
import riyadh from '../../Assets/riyadh.png';



function Flights() {
  return (
    <div className='flight_main'>
        <div className="first">
        <div className="first_text">
        <h3 className='hhh'>BROWSE BY AIRLINES</h3>
        <p className='flight_p'>DISCOVER BEST THINGS TO DO RESTAURANTS,SHOPPING,HOTELS,CAFES AND PLACES</p>
        </div>

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
        <SwiperSlide className='silde ms-4'><img src={one} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={two} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={three} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={one} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={two} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={three} alt="" /></SwiperSlide>
      </Swiper>
        </div>
        </div>

        <div className="second">
        <h3 className='hhh'>TRENDING CITIES</h3>
        <p className='flight_p'>DISCOVER BEST THINGS TO DO RESTAURANTS,SHOPPING,HOTELS,CAFES AND PLACES</p>

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
        <SwiperSlide className='silde ms-4'><img src={makkah} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={madina} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={riyadh} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={makkah} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={madina} alt="" /></SwiperSlide>
        <SwiperSlide className='silde'><img src={riyadh} alt="" /></SwiperSlide>
      </Swiper>
        </div>
        </div>
    </div>
  )
}

export default Flights