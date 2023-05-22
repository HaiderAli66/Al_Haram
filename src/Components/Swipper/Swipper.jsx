import React from 'react'
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation,Pagination} from "swiper"
import cab_car_1 from "../Assets/cab_car_1.png"
import cab_car_2 from "../Assets/cab_car_2.png"
import cab_car_3 from "../Assets/cab_car_3.png"



function Swipper() {
  return (
    <div>
      <div className="swippprerereeeee mt-5">
 
      <Swiper
         loop={true}
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
        className="mySwipererererer"
      >
        <SwiperSlide className='silde_img_cab '>
        <div>
       
       <img src={cab_car_1} alt="" />
           <figcaption className=" ">
           
           <b>HATCH BACK</b>

           </figcaption>
           </div>   </SwiperSlide>
        <SwiperSlide className='silde_img_cab'>
        <div>
      
      <img src={cab_car_2} alt="" />
          <figcaption className=" ">   <b>SEDAN</b></figcaption></div>
       </SwiperSlide>
        <SwiperSlide className='silde_img_cab'>
        <div>
     
     <img src={cab_car_3} alt="" />
   
           <figcaption className="">
               
           <b>SUV</b>                
               </figcaption>

               </div>
                </SwiperSlide>
                <SwiperSlide className='silde_img_cab '>
        <div>
       
       <img src={cab_car_1} alt="" />
           <figcaption className=" ">
           
           <b>HATCH BACK</b>

           </figcaption>
           </div>   </SwiperSlide>
           <SwiperSlide className='silde_img_cab'>
        <div>
      
      <img src={cab_car_2} alt="" />
          <figcaption className=" ">   <b>SEDAN</b></figcaption></div>
       </SwiperSlide>
        
      </Swiper>
        </div>





    </div>
  )
}

export default Swipper
