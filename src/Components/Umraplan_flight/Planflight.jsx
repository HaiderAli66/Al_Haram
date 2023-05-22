import React from 'react'
import { Link } from 'react-router-dom'
import "./Planflight.css"
import center from "../Assets/center.PNG"

function Planflight() {
  return (
    <div className='pb-5'>

        <div className="container-fluid upper_icon">

            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className=" py-4 container  all-things-hotel">

                        <div className=''>
                        <Link to="/Planflight"><div className='bg-white p-2 vp_spn'><img src="./images/vf_plan.png" alt="#" className='flight_wi'/> </div></Link>
                        <h5 className='text-white mt-2 fs-5 fontly-text'>Flight</h5>
                        </div>

                        <div className='first_dotset mt-3'>
                           <img src={center} className="w-75" alt="" />
                        </div>

                        <div className='h_d'>
                        <Link to="/Planhotel"><span className='py-3 px-2 vp_spn'><img src="./images/vf_hotel.png" alt="#" className='hotel_wi' /></span></Link>
                        <h5 className='text-white mt-3 fs-5 fontly-text'>Hotel</h5>
                        </div>

                        <div className='first_dotset mt-3'>
                          <img src={center} className="w-75" alt="" />
                        </div>

                        <div className='h_car mt-2'>
                        <Link to="/Plantransport"><span className='py-3 px-1 vp_spn'><img src="./images/vf_car.png" alt="#" className='car_wi' /></span></Link>
                        <h5 className='text-white fs-5 for_mtone fontly-text'>Transport</h5>
                        </div>

                        <div className='first_dotset mt-3'>
                        <img src={center} className="w-75" alt="" />
                        </div>

                        <div className='h_man mt-2'>
                        <Link to="/Planground"><span className=' vp_spn py-3 px-2'><img src="./images/vf_man.png" alt="#" className='man_wi' /></span></Link>
                        <h5 className='text-white fs-5 adm fontly-text'>Ground Service</h5>
                        </div>

                        <div className='first_dotset mt-3'>
                        <img src={center} className="w-75" alt="" />
                        </div>

                        <div className='h_dollar'>
                        <Link to="/Visapay"><span className='py-3 px-2 vp_spn'><img src="./images/vf_dollar.png" alt="#" className='dollar_wi' /></span></Link>
                        <h5 className='text-white fs-5 mt-3 fontly-text'>Visa & Payment</h5>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <div className="container">
            
            <div className="row text-white p-2 mt-4 clr_hdr">
                <div className="col-lg-2 col-md-2">
                    <div><h4>AIRLINE</h4></div>
                </div>
                <div className="col-lg-2 col-md-2">
                    <div><h4>DEPARTURE</h4></div>
                </div>
                <div className="col-lg-2 col-md-2">
                <div><h4>DURATION</h4></div>
                </div>
                <div className="col-lg-2 col-md-2">
                <div><h4>ARRIVAL</h4></div>
                </div>
                <div className='col-lg-4 col-md-2'>
                <div><h4>PRICE</h4></div>
                </div>
            </div>

                        <div className="row left mt-2 border shadow">
                            <div className="col-lg-8">
                                {/* 1st row */}
                                <div className='mt-3'><h4 className='crd_heading text-start ms-3'>DEPARTURE</h4></div>
                              <div className="row border-bottom">
                                  <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>

                               </div>

                               {/* 2nd row */}
                               <div className='mt-3'><h4 className='crd_heading text-start ms-3'>RETURN</h4></div>
                               <div className="row">
                               <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>
                               </div>

                               {/* 3rd row */}
                               <div className="row mt-1">
                               <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>
                               </div>
                            </div>


                            <div className="col-lg-3 right border-start p-0">
                                <div className='mt-5'>
                               <h4>RS17,995/-</h4>
                               <button type="button" class="btn btn-info bg_all_btn btn-sm text-white">SELECT</button>
                               </div>
                               <div className='mt-5'>
                               
                                   <ul className='list-unstyled ps-3'>
                                    <li style={{fontSize:'15px'}} className='text-start border-bottom'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li style={{fontSize:'15px'}} className='border-bottom text-start pt-2 pb-2'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li style={{fontSize:'15px'}} className='border-bottom text-start pt-2 pb-2'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li style={{fontSize:'15px'}} className='text-start border-bottom pt-2 pb-2'>
                                    <span><img src="./images/seat.png" alt="#" className='lug' /> <span> 8 SEAT (S)</span></span>
                                    </li>
                                    <li  style={{fontSize:'15px'}}className='text-start pt-2 pb-2'>
                                    <span><img src="./images/seat.png" alt="#" className='lug' /> <span> 8 SEAT (S)</span></span>
                                    </li>
                                </ul>
                               </div>
                            </div>
                        </div>

                        <div className="row left mt-4 border shadow">
                            <div className="col-lg-8">
                                {/* 1st row */}
                                <div className='mt-3'><h4 className='crd_heading text-start ms-3'>DEPARTURE</h4></div>
                              <div className="row border-bottom">
                                  <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>

                               </div>

                               {/* 2nd row */}
                               <div className='mt-3'><h4 className='crd_heading text-start ms-3'>RETURN</h4></div>
                               <div className="row">
                               <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>
                               </div>

                               {/* 3rd row */}
                               <div className="row mt-1">
                               <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>
                               </div>
                            </div>


                            <div className="col-lg-4 right border-start p-0">
                                <div className='mt-5'>
                               <h4>RS17,995/-</h4>
                               <button type="button" class="btn btn-info btn-sm  bg_all_btn text-white">SELECT</button>
                               </div>
                               <div className='mt-5'>
                                <ul className='list-unstyled ps-3'>
                                    <li className='text-start border-bottom'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li className='border-bottom text-start pt-2 pb-2'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li className='border-bottom text-start pt-2 pb-2'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li className='text-start border-bottom pt-2 pb-2'>
                                    <span><img src="./images/seat.png" alt="#" className='lug' /> <span> 8 SEAT (S)</span></span>
                                    </li>
                                    <li className='text-start pt-2 pb-2'>
                                    <span><img src="./images/seat.png" alt="#" className='lug' /> <span> 8 SEAT (S)</span></span>
                                    </li>
                                </ul>
                               </div>
                            </div>
                        </div>

                        <div className="row left mt-4 border shadow">
                            <div className="col-lg-8">
                                {/* 1st row */}
                                <div className='mt-3'><h4 className='crd_heading text-start ms-3'>DEPARTURE</h4></div>
                              <div className="row border-bottom">
                                  <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>

                               </div>

                               {/* 2nd row */}
                               <div className='mt-3'><h4 className='crd_heading text-start ms-3'>RETURN</h4></div>
                               <div className="row">
                               <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>
                               </div>

                               {/* 3rd row */}
                               <div className="row mt-1">
                               <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>
                               </div>
                            </div>


                            <div className="col-lg-4 right border-start p-0">
                                <div className='mt-5'>
                               <h4>RS17,995/-</h4>
                               <button type="button" class="btn btn-info bg_all_btn btn-sm text-white">SELECT</button>
                               </div>
                               <div className='mt-5'>
                                <ul className='list-unstyled ps-3'>
                                    <li className='text-start border-bottom'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li className='border-bottom text-start pt-2 pb-2'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li className='border-bottom text-start pt-2 pb-2'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li className='text-start border-bottom pt-2 pb-2'>
                                    <span><img src="./images/seat.png" alt="#" className='lug' /> <span> 8 SEAT (S)</span></span>
                                    </li>
                                    <li className='text-start pt-2 pb-2'>
                                    <span><img src="./images/seat.png" alt="#" className='lug' /> <span> 8 SEAT (S)</span></span>
                                    </li>
                                </ul>
                               </div>
                            </div>
                        </div>

                        <div className="row left mt-4 border shadow">
                            <div className="col-lg-8">
                                {/* 1st row */}
                                <div className='mt-3'><h4 className='crd_heading text-start ms-3'>DEPARTURE</h4></div>
                              <div className="row border-bottom">
                                  <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>

                               </div>

                               {/* 2nd row */}
                               <div className='mt-3'><h4 className='crd_heading text-start ms-3'>RETURN</h4></div>
                               <div className="row">
                               <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>
                               </div>

                               {/* 3rd row */}
                               <div className="row mt-1">
                               <div className='col-lg-3 arline'>
                                    <span><img src="./images/IndiGo-Logo.png" alt="" /></span>
                                    <h5 className='mb-0'>INDIGO</h5>
                                    <p className='text-muted mb-0'>(IN-855)</p>
                                  </div>

                                <div className='col-lg-3 dpture'>
                                <h5><b> 21:40 </b></h5>
                                <h6>DELHI(T: 1D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                                 </div>

                                 <div className='col-lg-3 durt'>
                                <h6 className='text-muted'>3H 20M (DIRECT)</h6>
                                <div className='icons'>
                                    <span className='circle1 pe-1'><img src="./images/circle.png" alt="#" /></span>
                                    <span className='pe-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                        <img src="./images/dot.png" alt="" className='ps-1' />
                                    </span>
                                    <span><img src="./images/airplan.png" alt="" /></span>
                                    <span className='ps-1'>
                                        <img src="./images/dot.png" alt="" />
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                        <img src="./images/dot.png" alt="" className='ps-1'/>
                                    </span>
                                    <span className='circle1 ps-1'><img src="./images/circle.png" alt="#" /></span>
                                </div>
                                <h6>NON-STOP</h6>
                            </div>

                            <div className='col-lg-3 arvl'>
                                <h5><b> 23:55</b></h5>
                                <h6>MECCA(T:2D)</h6>
                                <p>TUE, 30 AUG 2022</p>
                            </div>
                               </div>
                            </div>


                            <div className="col-lg-4 right border-start p-0">
                                <div className='mt-5'>
                               <h4>RS17,995/-</h4>
                               <button type="button" class="btn btn-info btn-sm bg_all_btn text-white">SELECT</button>
                               </div>
                               <div className='mt-5'>
                                <ul className='list-unstyled ps-3'>
                                    <li className='text-start border-bottom'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li className='border-bottom text-start pt-2 pb-2'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li className='border-bottom text-start pt-2 pb-2'>
                                    <span><img src="./images/Luggage.png" alt="#" className='lug' /><span>15 KG (ONE PIECE ONLY)/7KG</span></span>
                                    </li>
                                    <li className='text-start border-bottom pt-2 pb-2'>
                                    <span><img src="./images/seat.png" alt="#" className='lug' /> <span> 8 SEAT (S)</span></span>
                                    </li>
                                    <li className='text-start pt-2 pb-2'>
                                    <span><img src="./images/seat.png" alt="#" className='lug' /> <span> 8 SEAT (S)</span></span>
                                    </li>
                                </ul>
                               </div>
                            </div>
                        </div>

                        <div className='mt-5 mb-5'><button type="button" class="btn btn-lg text-white smor">SHOW MORE</button></div>

        </div>

    </div>
  )
}

export default Planflight
