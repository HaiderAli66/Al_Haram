import React from 'react'
import "./Testimonials.css"
import K from "../Assets/K.png"
import { AiFillStar } from "react-icons/ai"
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";


function Testimonials() {
    return (
        <div className='testimonials_main'>



            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className='card_testimonials'>
                            <h1 className='Testimonials_main_heading'>What our Travelers are saying</h1>
                            <div className="row ">
                                <div className="col-md-4 p-0 ">
                                    <div className="inner_div_img">

                                    <img src={K} alt="" className='img_ssssaasa w-100' />
                                    </div>

                                </div>
                                <div className="col-md-8 mt-md-0 mt-5 home_page_swiper">

                                    <Swiper

                                        slidesPerView={1}
                                        spaceBetween={10}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        // autoplay={{
                                        //     delay: 2500,
                                        //     disableOnInteraction: false,
                                        //   }}

                                        loop={true}
                                        breakpoints={{
                                            640: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 40,
                                            },
                                            1024: {
                                                slidesPerView: 2,
                                                spaceBetween: 50,
                                            },
                                        }}
                                        modules={[Pagination, Autoplay]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className="card w-100 h-100 py-2 slider_card_here">
                                                <div className="card-body">
                                                    <div className='d-flex'>
                                                        <AiFillStar className='clr_star mb-3'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>
                                                    </div>
                                                    <p className='text-start card_para text-capitalize'>It was entertaining from the
                                                        beginning till the end. The
                                                        singing and acting was great.</p>
                                                    <div className='d-flex justify-content-start align-items-center main_jony'>
                                                        <div className="cirle">
                                                        </div>
                                                        <div className="card_test_name ms-3">
                                                            <h6 className='jony_baba'>john smith</h6></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card  h-100 py-2 slider_card_here">
                                                <div className="card-body">
                                                    <div className='d-flex'>
                                                        <AiFillStar className='clr_star mb-3'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>
                                                    </div>
                                                    <p className='text-start card_para text-capitalize'>It was entertaining from the
                                                        beginning till the end. The
                                                        singing and acting was great.</p>
                                                    <div className='d-flex justify-content-start align-items-center main_jony'>
                                                        <div className="cirle">
                                                        </div>
                                                        <div className="card_test_name ms-3">
                                                            <h6 className='jony_baba'>john smith</h6></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card w-100 h-100 py-2 slider_card_here">
                                                <div className="card-body">
                                                    <div className='d-flex'>
                                                        <AiFillStar className='clr_star mb-3'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>
                                                    </div>
                                                    <p className='text-start card_para'>It was entertaining from the
                                                        beginning till the end. The
                                                        singing and acting was great.</p>
                                                    <div className='d-flex justify-content-start align-items-center main_jony'>
                                                        <div className="cirle">
                                                        </div>
                                                        <div className="card_test_name ms-3">
                                                            <h6 className='jony_baba'>john smith</h6></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="card w-100 h-100 py-2 slider_card_here">
                                                <div className="card-body">
                                                    <div className='d-flex'>
                                                        <AiFillStar className='clr_star mb-3'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>   <AiFillStar className='clr_star'></AiFillStar>
                                                    </div>
                                                    <p className='text-start card_para'>It was entertaining from the
                                                        beginning till the end. The
                                                        singing and acting was great.</p>
                                                    <div className='d-flex justify-content-start align-items-center main_jony'>
                                                        <div className="cirle">
                                                        </div>
                                                        <div className="card_test_name ms-3">
                                                            <h6 className='jony_baba'>john smith</h6></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
