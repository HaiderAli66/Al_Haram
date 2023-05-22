import React from 'react'
import {MdLocationOn} from "react-icons/md"
import {BsCalendar3EventFill} from "react-icons/bs"
import "./Umrah_link.css"

function Umrah_link() {
  return (
    <div>
          <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card navigation_card">
                
                        <div className="row justify-content-center">
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><MdLocationOn className='card_icons me-2'></MdLocationOn>Country </h5>
                        <input type="text" placeholder='Eg:India'  className='sm_size'/>
                        </div>
                       </div>
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>City </h5>
                        <input type="text" placeholder='Eg:Dehli' className='sm_size' />
                        </div>
                       </div>
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>duration </h5>
                        <input type="text" placeholder='Eg:2 Oct 2002'  className='sm_size  '/>
                        </div>
                       </div>
                       <div className="col-md-4 col-lg-3 ">
                       <div className='text-start'>
                        <h5 className='Navigation_card_heading'><BsCalendar3EventFill className='card_icons me-2'></BsCalendar3EventFill>travel date </h5>
                        {/* <input type="date" placeholder='Eg:india' className='sm_size' /> */}
                        <input type="text" placeholder='Day:DD MMM YYY'  className='sm_size  '/>

                        </div>
                       </div>

                        </div>
                        <div className="container">
                      <div className="row mt-2 justify-content-between">
                            <div className="col-md-6">
                                  <div className="row justify-content-between align-items-center">
                                    <div className="col-md-4 p-0">
                                          <div className='text-start'>
                                            <h6 className='lower_card_heading'>adult(s)</h6>
                                            <div className="d-flex">
                                              <div className="br_full">
                                                <button className='small_btn_home br_right'>-</button>
                                                <button className='large_btn_home '>1</button>
                                                <button className='small_btn_home br_left '>+</button>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 p-0">
                                          <div className='text-start'>
                                            <h6 className='lower_card_heading'>Child(ren)</h6>
                                            <div className="d-flex">
                                            <div className="br_full">
                                                <button className='small_btn_home br_right'>-</button>
                                                <button className='large_btn_home'>1</button>
                                                <button className='small_btn_home br_left'>+</button>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="col-md-4 p-0">
                                          <div className='text-start'>
                                            <h6 className='lower_card_heading'>infant(s)</h6>
                                            <div className="d-flex">
                                            
                                              <div className='br_full'>
                                                <button className='small_btn_home br_right '>-</button>
                                                <button className='large_btn_home '>1</button>
                                                <button className='small_btn_home br_left '>+</button>
                                                </div>
                                            </div>
                                          </div>
                                    </div>
                                  </div>
                            </div>
                            <div className="col-md-6 text-end p-0">
                                <button className='search_button full_width_res btn_hvr1'>Search</button>
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

export default Umrah_link