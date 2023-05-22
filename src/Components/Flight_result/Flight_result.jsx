import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom"



import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./Flight_result.css";
import Calendar from "../Assets/Calendar.png";
import Sunset from "../Assets/Sunset.png";
import Sun from "../Assets/Sun.png";
import noon from "../Assets/noon.png";
import Moon from "../Assets/Moon.png";
import IndiGo from "../Assets/IndiGo.png";
import plan from "../Assets/plan.png"
import Luggage from "../Assets/Luggage.png";
import Sea from "../Assets/Sea.png";
import { VscCircleOutline } from "react-icons/vsc";
import { VscCircleFilled } from "react-icons/vsc";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabView from './TabView';

import Flight_second from "../Flight_second/Flight_second"



function Flight_result() {
  return (
    <>
      <div className="flight_result_main ">
        <div className="flight_left">
          <div className="flight_result_swpr d-none d-md-block">
            <Swiper
              slidesPerView={11}
              spaceBetween={10}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              navigation={{
                clickable: true,
              }}
              breakpoints={{
                300: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 10,
                  spaceBetween: 30,
                },
                1440: {
                    slidesPerView: 11,
                    spaceBetween: 40,
                  },
                
              }}
            
              modules={[Pagination, Navigation]}
              className="mySwiper flight_result_swip"
            >
              <SwiperSlide>
                <div className="flight_result_text_active  ">
                  <span>Aug 1</span> <span className="price text-white">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 2</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 2</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 2</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 2</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 3</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 4</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 5</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 6</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 7</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 8</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flight_result_text ">
                  <span>Aug 9</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="oye_Teriiiii">
                <div className="flight_result_text ">
                  <span>Aug 10</span> <span className="price">191$</span>
                </div>
              </SwiperSlide>
            
            </Swiper>
          </div>

          <div className="flight_result_sidebar d-flex container">
            <div className="side ">
              <div className="d-flex one text-start">
                <div className="top">
                  <div className="top_first">
                    <h6 className="text-dark">STOPS</h6>
                    <input type="checkbox" /> <span>Direct (5)
         </span>         </div>
                  <div className="top_first">
                    <input type="checkbox" /> <span>Direct (5)
         </span>         </div>
                  <div className="top_first">
                    <input type="checkbox" /> <span>Direct (5)
         </span>         </div>
                </div>

                <div className="top">
                  <div className="top_first">
                    <h6 className="text-dark">FROM</h6>
                    <span>Rs 13,999/-</span>
                  </div>
                  <div className="top_first">
                    <span>Rs 14,999/-</span>
                  </div>
                  <div className="top_first">
                    <span>Rs 15,999/-</span>
                  </div>
                </div>
              </div>

              <div className="d-flex two justify-content-between text-start">
                <div className="top">
                  <div className="top_first">
                    <h6 className="text-dark">AIRLINES</h6>
                    <input type="checkbox" /> <span>Vistara(76)
        </span>          </div>
                  <div className="top_first">
                    <input type="checkbox" /> <span>Indigo(33)
         </span>         </div>
                  <div className="top_first">
                    <input type="checkbox" /> <span>Spacejet(67)
       </span>           </div>
                  <div className="top_first">
                    <input type="checkbox" /> <span>Gofirst(1)
         </span>         </div>
                </div>

                <div className="top ">
                  <div className="top_first">
                    <h6 className="text-dark">FROM</h6>
                    <span>Rs 13,999/-</span>
                  </div>
                  <div className="top_first">
                    <span>Rs 14,999/-</span>
                  </div>
                  <div className="top_first">
                    <span>Rs 15,999/-</span>
                  </div>
                  <div className="top_first">
                    <span>Rs 17,947/-</span>
                  </div>
                </div>
              </div>

              <div className="d-flex two justify-content-between text-start">
                <div className="top">
                  <div className="top_first">
                    <h6 className="text-dark">TRAVEL & BAGGAGE</h6>
                    <input type="checkbox" /> <span>Seat Choice Included</span>
                  </div>
                  <div className="top_first">
                    <input type="checkbox" /> <span>Hand Baggage Include</span>d
                  </div>
                </div>

                <div className="top">
                  <div className="top_first">
                    <h6 className="text-dark">FROM</h6>
                    <span>Rs 13,999/-</span>
                  </div>
                  <div className="top_first">
                    <span>Rs 14,999/-</span>
                  </div>
                </div>
              </div>

              <p className="text-dark mt-3  siner_text">DEPARTURE TIME IN HYDERABAD</p>
              <div className="d-flex justify-content-around  two">
                <div className="top">
                  <div className="top_first">
                    <img src={Sunset} alt="" />
                    <div className="depart_text">
                      <p>Early Morning</p>
                      <p className='mt-2'>00:00 - 04:59</p>
                    </div>
                  </div>
                  <div className="top_first">
                    <img src={noon} alt="" className="mt-4" />
                    <div className="depart_text">
                      <p>Afternoon</p>
                      <p className='mt-2'>12:00 - 17:59</p>
                    </div>
                  </div>
                </div>

                <div className="top siner_dival ">
                  <div className="top_first">
                    <img src={Sun} alt="" />
                    <div className="depart_text">
                      <p>Morning</p>
                      <p className='mt-2'>5:00 - 11:59</p>
                    </div>
                  </div>
                  <div className="top_first to">
                    <img src={Moon} alt="" className="" />
                    <div className="depart_text">
                      <p>Evening</p>
                      <p className='mt-2'>18:00 - 23:59</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-dark siner_text">ARRIVAL TIME IN MEECA</p>
              <div className="d-flex justify-content-around two">
                <div className="top">
                  <div className="top_first">
                    <img src={Sunset} alt="" />
                    <div className="depart_text">
                      <p>Early Morning</p>
                      <p>00:00 - 04:59</p>
                    </div>
                  </div>
                  <div className="top_first">
                    <img src={noon} alt="" className="mt-4" />
                    <div className="depart_text">
                      <p>Afternoon</p>
                      <p>12:00 - 17:59</p>
                    </div>
                  </div>
                </div>

                <div className="top siner_dival ">
                  <div className="top_first">
                    <img src={Sun} alt="" />
                    <div className="depart_text">
                      <p>Morning</p>
                      <p>5:00 - 11:59</p>
                    </div>
                  </div>
                  <div className="top_first to">
                    <img src={Moon} alt="" className="" />
                    <div className="depart_text">
                      <p>Evening</p>
                      <p>18:00 - 23:59</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flight_right">
              <div className="nev">
                <div className="container">
                  <div className="row">
                    <div className="col-md-2 text-center">
                      <span>AIRLINE</span>
                    </div>
                    <div className="col-md-2 text-center">
                      <span>DEPARTURE</span>
                    </div>
                    <div className="col-md-3 text-center">
                      <span>DURATION</span>
                    </div>
                    <div className="col-md-2 text-center">
                      <span>ARRIVAL</span>
                    </div>
                    <div className="col-md-3 text-center">
                      <span>PRICE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="ticket_main">
                <div className="container ticket_first_line">
                  <div className="row ticket_roww">
                    <div className="col-md-2 coll_12">
                      <div className="ticket_first">
                        <img className="ticket_indigo_img" src={IndiGo} alt="" />
                        <h5 className="ps-2">INDIGO</h5>
                        <p className="ps-3">(IN-855)</p>
                      </div>
                    </div>

                    <div className="col-md-2 coll_12">
                      <div className="ticket_first ">
                        <h4 className='flight_reslult_h4'>21:40</h4>
                        <h5>DELHI(T: 1D)</h5>
                        <p>TUE,30AUG 2022</p>
                      </div>
                    </div>

                    <div className="col-md-2 coll_12">
                      <div className="ticket_first ">
                        <p className="text-center">1H 20M (DIRECT)</p>
                        <div className="emg_group">
                          {" "}
                          <VscCircleOutline /> <VscCircleFilled />{" "}
                          <VscCircleFilled /> <VscCircleFilled />{" "}
                          <VscCircleFilled /> <img src={plan} alt="" />
                          <VscCircleFilled /> <VscCircleFilled />{" "}
                          <VscCircleFilled /> <VscCircleFilled />
                          <VscCircleOutline />
                        </div>
                        <p className="text-center">NON-STOP</p>
                      </div>
                    </div>

                    <div className="col-md-2 coll_12">
                      <div className="ticket_first ">
                        <h4 className='flight_reslult_h4'>23:55</h4>
                        <h6>MECCA(T: 2D)</h6>
                        <p>TUE,30AUG 2022</p>
                      </div>
                    </div>
                    <div className="col-md-2 coll_12">
                      <div className="ticket_first ">
                        <h3 className="mb-0">RS17,995/-</h3>
                        <p className="text-center">Return Per Traveller</p>
                        <div className="btn book text-center">BOOK</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />

                <div className="ticket_second_line">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="piece">
                          <img src={Luggage} alt="" />{" "}
                          <span>15 KG (ONE PIECE ONLY) / 7 KG</span>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="piece">
                          <img src={Sea} alt="" />
                          <span>8 SEAT(S)</span>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="drop">
                          <DropdownButton
                            className="drop_bttn text-white   flightdrop_down_btttn"
                            id="dropdown-basic-button"
                            // title="FLIGHT DETAILS"
                            title={<span className='flight_del_button'>FLIGHT DETAILS</span>}
                          >




                            <Dropdown.Item href="#/action-1"> <Link to ='/flight_details_tab' className="text-dark text-decoration-none">FLIGHT DETAILS </Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-1"> <Link to ='/flight_details_tab' className="text-dark text-decoration-none">Fare BACKUP </Link></Dropdown.Item>
                            <Dropdown.Item href="#/action-1"> <Link to ='/flight_details_tab' className="text-dark text-decoration-none">BAGGAGE </Link></Dropdown.Item>
                         
                          </DropdownButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <Flight_second/>

              

              <div className="ticket_btn">
            <div className="btn ticket_bkng">SHOW MORE</div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flight_result;
