// import React from 'react'
import "./Buslist.css"
// import Swiper from 'swiper';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'
// import required modules
import { EffectFade, Navigation,Pagination} from "swiper";

function Buslist() {
  return (

    <div>
        <AppBar position="static" sx={{ background: "#02A3C1" }}>
        <Toolbar>
          <Typography variant="h6">

          </Typography>

        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Typography variant="h4" mt={2} mb={2} align={"left"} ml={2}>
            <span className=" rounded-circle p-1 text-white fw-bold " style={{ background: "#02A3C1" }}>AI </span>
            haram
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          < div className='text-center pt-4 pb-4' >
            Budget-Friendly & Luxury Package For A Convenient Hajj & Umrah
            Journey to The Holly Makkah & Madina For Muslim Brothers & Sisters
          </div>
        </Grid>
      </Grid>

      <Typography className='text-white py-3' variant="h6" style={{ background: "#02A3C1" }} sx={{ flexGrow: 1 }}>
        <div className='text-center pt-1 py-3'><p className='fs-6 pb-3 upper_list_properties'>list your buses with us and get maximum bookings <br /></p>
        </div>
      </Typography>

        <div className="container-fluid mt-5 p-0">
            <div className="col-lg-12">

            <div className=''>
                <h2>List YOUR BUSES AND GROW WITH US</h2>
                <p className='text-muted'>Come Aboard India's No. 1 Travel Company & Unfold Infinite Possibilities Of Growth.</p>
            </div>
            <div className='mt-4 d-flex justify-content-end me-5 ay_pro'><button type="button" class="btn btn-lg text-white ayp">ADD YOUR BUSES</button></div>
            </div>

            <div className="swipppr mt-5">
        <Swiper
        slidesPerView={3}
        spaceBetween={20}
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
              slidesPerView: 1,
              spaceBetween: 70,
              loop:true,
            },
          }}
          loop={true}
        modules={[Pagination]}
        className="mySwiper p-5"
      >
        <SwiperSlide className='silde'>
            <img src="./images/list_bus_images/buss 1.png" alt="" className="bus1" />

        </SwiperSlide>
        <SwiperSlide className='silde'>
            <img src="./images/list_bus_images/buss 1.png" alt="" className="bus1" />

            </SwiperSlide>
        <SwiperSlide className='silde'>
            <img src="./images/list_bus_images/buss 1.png" alt=""  className="bus1"/>
            
            </SwiperSlide>
        <SwiperSlide className='silde'>
            <img src="./images/list_bus_images/buss 1.png" alt="" className="bus1" />

            </SwiperSlide>
        <SwiperSlide className='silde'>
            <img src="./images/list_bus_images/buss 1.png" alt="" className="bus1" />

            </SwiperSlide>
        <SwiperSlide className='silde'>
            <img src="./images/list_bus_images/buss 1.png" alt="" className="bus1" />
            
            </SwiperSlide>
      </Swiper>
        </div>
        {/* </div> */}

        </div>

        <div className="container">

            {/* 2nd row */}

            <div className='mt-5'>
                <h2>GROW WITH US</h2>
                <p className='text-muted'>Come Aboard India's No. 1 Travel Company & Unfold Infinite Possibilities Of Growth.</p>
            </div>
            <div className="row partnering_uper">
                <div className="col-lg-6">

                    <div className='partnering d-flex'>
                        <div>
                            <img src="./images/Propertie_images/ero.png" alt="" className='ero' />
                        </div>
                        <div className='text-start ms-3'>
                            <h6> Partnerting With Us Esay, Fun & Rewarding </h6>
                            <p className='text-muted'>Listing Your Property With Us Means Better Discoverability More Booking And Higher Revenues</p>
                        </div>
                    </div>

                    <div className='price_payment d-flex mt-5'>
                        <div>
                            <img src="./images/Propertie_images/d_hand.png" alt="" className='ero' />
                        </div>
                        <div className='text-start ms-3'>
                            <h6> Prices & Payments </h6>
                            <p className='text-muted'>Listing Your Property With Us Means Better Discoverability More Booking And Higher Revenues</p>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6">

                <div className='partnering d-flex'>
                        <div>
                            <img src="./images/Propertie_images/path7.png" alt="" className='ero' />
                        </div>
                        <div className='text-start ms-3'>
                            <h6> Hasle Free Sign Up </h6>
                            <p className='text-muted'>Finsh Your Registration In 3-Simple Steps On Our Intuitive Host Platform And Go Live.</p>
                        </div>
                    </div>

                    <div className='price_payment d-flex mt-5'>
                        <div>
                            <img src="./images/Propertie_images/mic_man.png" alt="" className='ero' />
                        </div>
                        <div className='text-start ms-3'>
                            <h6> 24*7 Support </h6>
                            <p className='text-muted'>Finsh Your Registration In 3-Simple Steps On Our Intuitive Host Platform And Go Live.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="container-fluid happy_host">
            <div className=''>
                <h2>Hear It From Our Happy Hosts!</h2>
                <p className='text-muted'>Come Aboard India's No. 1 Travel Company & Unfold Infinite Possibilities Of Growth.</p>
            </div>

            <div className="row">
                <div className="col-lg-12 p-0">
                    <div>
                    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
          loop:true,
        }}
        loop={true}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="comments pt-5 pb-5">
            <div>
                <div className="">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly <br />
                      used to demonstrate the visual form of a document or a typeface without <br /> 
                      relying on meaningful content.</p>
                </div>
                <div className="comm_box">
                    <img src="./images/Propertie_images/slider_girl.png" alt="" className="sldr_g"/>
                </div>
                    <div className="mt-3"><h6>Jhon Cristinia</h6></div>
                    <span className="text-muted"><h6>Woner Of Roboto</h6></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comments pt-5 pb-5">
            <div>
                <div className="">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly <br />
                      used to demonstrate the visual form of a document or a typeface without <br /> 
                      relying on meaningful content.</p>
                </div>
                <div className="comm_box">
                    <img src="./images/Propertie_images/slider_girl.png" alt="" className="sldr_g"/>
                </div>
                    <div className="mt-3"><h6>Sofia</h6></div>
                    <span className="text-muted"><h6>Woner Of Roboto</h6></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comments pt-5 pb-5">
            <div>
                <div className="">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly <br />
                      used to demonstrate the visual form of a document or a typeface without <br /> 
                      relying on meaningful content.</p>
                </div>
                <div className="comm_box">
                    <img src="./images/Propertie_images/slider_girl.png" alt="" className="sldr_g"/>
                </div>
                    <div className="mt-3"><h6>Chloe Tina</h6></div>
                    <span className="text-muted"><h6>Woner Of Roboto</h6></span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="comments pt-5 pb-5">
            <div>
                <div className="">
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly <br />
                      used to demonstrate the visual form of a document or a typeface without <br /> 
                      relying on meaningful content.</p>
                </div>
                <div className="comm_box">
                    <img src="./images/Propertie_images/slider_girl.png" alt="" className="sldr_g"/>
                </div>
                    <div className="mt-3"><h6>Mona liza</h6></div>
                    <span className="text-muted"><h6>Woner Of Roboto</h6></span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
                    </div>
                </div>
            </div>
            
        </div>

        <div className="container Leverage">
        <div className="row">
                <div className="col-lg-12 col-md-12">
                   <div className=''>
                      <h2>Leverage Our Robust Network</h2>
                      <p className='text-muted'>Increase Your Reach By Joining Our Host Community. Keep Your Property On Top Of Customers Mind.</p>
                   </div>

                   <div className='colored_box d-flex justify-content-center'>
                    <span className='yellow_box'>
                        <img src="./images/Propertie_images/box_yellow.png" alt="" className='yellow_image w-100 shadow' />
                    </span>
                    <span className='info_box shadow'>
                        <img src="./images/Propertie_images/box_info.png" alt="" className='info_image w-100' />
                    </span>
                    <span className='orange_box'>
                        <img src="./images/Propertie_images/box_orange.png" alt="" className='orange_image w-100 shadow' />
                    </span>
                   </div>

                </div>
            </div>
        </div>

    </div>

  )
}

export default Buslist
