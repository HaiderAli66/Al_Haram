import React from 'react'
import {FaMosque} from "react-icons/fa"
import {MdOutlineFlightTakeoff} from "react-icons/md"
import {FaHotel} from "react-icons/fa"
import {BiBus} from "react-icons/bi"
import {MdLocationOn} from "react-icons/md"
import {BsCalendar3EventFill} from "react-icons/bs"
import "./Flight_link.css"

function Flight_link() {
  return (
    <div>
  <div className="container">
        <div className="row ">
            <div className="col-md-12">
                <div className="card navigation_card">
                
                        <div className="row justify-content-center">
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><MdLocationOn className='card_icons me-2'></MdLocationOn>departure </h5>
                        <input type="text" placeholder='Eg:India'  className='sm_size'/>
                        </div>
                       </div>
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><MdLocationOn className='card_icons me-2'></MdLocationOn>destination </h5>
                        <input type="text" placeholder='Eg:Dehli' className='sm_size' />
                        </div>
                       </div>
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>departure date </h5>
                        <input type="text" placeholder='Eg:2 Oct 2002'  className='sm_size'/>
                        </div>
                       </div>
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>return date </h5>
                      
                        <input type="text" placeholder='Day DD MMM YYY' className='sm_size sdasas' />
                        </div>
                       </div>

                        </div>
                        <div className="container">
                        <div className="row mt-2">
                           
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6 p-0">
                                    <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>AirLine </h5>
                        <input type="text" placeholder='Eg:Qatar AirLines' className='sm_size' />
                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>class </h5>
                        <input type="text" placeholder='Eg:Economy' className='sm_size' />
                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="col-md-6">
                                  <div className="row justify-content-between align-items-center">
                                    <div className="col-md-4 p-0">
                                          <div className='text-start'>
                                            <h6 className='lower_card_heading'>adult(s)</h6>
                                            <div className="d-flex mt-md-3">
                                              <div className="br_full">
                                                <button className='small_btn_home  br_right'>-</button>
                                                <button className='large_btn_home '>1</button>
                                                <button className='small_btn_home  br_left'>+</button>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 p-0" >
                                          <div className='text-start'>
                                            <h6 className='lower_card_heading'>Child(ren)</h6>
                                            <div className="d-flex mt-md-3">
                                              <div className="br_full">
                                                <button className='small_btn_home  br_right'>-</button>
                                                <button className='large_btn_home '>1</button>
                                                <button className='small_btn_home  br_left'>+</button>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 p-0">
                                          <div className='text-start'>
                                            <h6 className='lower_card_heading'>infant(s)</h6>
                                            <div className="d-flex mt-md-3">
                                              <div className="br_full">
                                                <button className='small_btn_home  br_right'>-</button>
                                                <button className='large_btn_home '>1</button>
                                                <button className='small_btn_home  br_left '>+</button>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                        </div>
                        <div className="container mt-3 borrr">
                            <div className="row mt-3">
                                <div className="col-md-6 text-start">
<div>

                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label ms-1 me-1 ms-md-2 me-md-2 respnsive_Fs" for="flexRadioDefault1">
    One-Way 
  </label>
                                <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label className="form-check-label ms-1 me-1 ms-md-2 me-md-2 respnsive_Fs" for="flexRadioDefault2">
    Round-Trip
  </label>
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label className="form-check-label ms-1 me-1 ms-md-2 me-md-2 respnsive_Fs" for="flexRadioDefault3">
    Multi-City
  </label>
  </div>
                                </div>
                                <div className="col-md-6 text-end ">
                                <button className='search_button full_width_res btn_hvr1  m-0'>Search</button>
                                </div>

                            </div>
                        </div>

                </div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default Flight_link