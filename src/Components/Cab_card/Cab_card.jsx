import React from 'react'
import Swipper from '../Swipper/Swipper'
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation,Pagination} from "swiper"
import cab_car_1 from "../Assets/cab_car_1.png"
import cab_car_2 from "../Assets/cab_car_2.png"
import cab_car_3 from "../Assets/cab_car_3.png"
import makah_cab from "../Assets/makah_cab.png"
import madina_cab from "../Assets/madina_cab.png"
import riydh_cab from "../Assets/riydh_cab.png"


function Cab_card() {
  return (
    <div className='container'>
        <div className='flight_main'>
        <div className="first">
        <div className="first_text ">
        <h4 className='hhh text-start '>BROWSE BY CABS</h4>
        <p className='flight_p text-start'>DISCOVER BEST THINGS TO DO RESTAURANTS,SHOPPING,HOTELS,CAFES AND PLACES</p>
        </div>

      <Swipper/>

        
        </div>

        <div className="second ">
        <h3 className='hhh text-start'> POPULAR DESTINATION</h3>
        <p className='flight_p text-start'>DISCOVER BEST THINGS TO DO RESTAURANTS,SHOPPING,HOTELS,CAFES AND PLACES</p>

   
         <div className="swipppr mt-5">

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
       
      
       <img src={makah_cab} alt="" />
       <figcaption className=" fig_ham ">
            

            <b className='fs-3'>MAKKHA</b>  <br /> (123,4560)      

            </figcaption> 
            </div>
            </SwiperSlide>
        <SwiperSlide className='silde_img_cab'>
        <div>
      
      <img src={madina_cab} alt="" />
      <figcaption className=" fig_ham ">

<b className='fs-3'>MADINA</b>  <br /> (123,4560)      
</figcaption>
</div>
       </SwiperSlide>
        <SwiperSlide className='silde_img_cab'>
        <div>
     
     <img src={riydh_cab} alt="" />
   
     <figcaption className=" fig_ham">
                
                <b className='fs-3'>RIYADH</b>  <br /> (123,4560)              
                    </figcaption>

               </div>
                </SwiperSlide>
                <SwiperSlide className='silde_img_cab '>
        <div>
    
       <img src={makah_cab} alt="" />
       <figcaption className=" fig_ham ">
            

            <b className='fs-3'>MAKKHA</b>  <br /> (123,4560)      

            </figcaption> 
            </div>
            </SwiperSlide>
            <SwiperSlide className='silde_img_cab'>
        <div>
      
      <img src={madina_cab} alt="" />
      <figcaption className=" fig_ham ">

<b className='fs-3'>MADINA</b>  <br /> (123,4560)      
</figcaption>
</div>
       </SwiperSlide>
          
        
      </Swiper>
        </div>
        </div>
    </div>
      
    </div>
  )
}

export default Cab_card
