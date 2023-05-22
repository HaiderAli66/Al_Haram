import React from 'react'
import { Link } from 'react-router-dom'
import "./Umraplane.css"
import Location from "../Assets/Location.png"
import clndr from "../Assets/clndr.png"
import passenger from "../Assets/passenger.png"

function Umraplane() {
  return (
    <div className='plan_my_umrah_main'>

        <div className="container-fluid srcch">
            <h2 className='text-capitalize text-white pt-4'>create your own package ( package+ e-visa )</h2>
            {/* row 1 */}
            <div className="row mt-4 justify-content-center">
                <div className="col-md-10">
                <div className="row py-2 frbcl">
                    <div className="col-lg-3 pe-0">
                    <div className='bg-white frm_loc'>
                        <div className='from_maiin d-flex justify-content-between px-2 pt-1'>
                            <p className='fst_f'>FROM</p>
                            <img src={Location} alt="" />
                        </div>
                        <div className='text-start ps-4'>
                            <h5>MUMBAI</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 pe-0">
                    <div className='bg-white frm_loc'>
                        <div className='from_maiin d-flex justify-content-between px-2 pt-1'>
                            <p className='fst_f'>TO</p>
                            <img src={Location} alt="" />
                        </div>
                        <div className='text-start ps-4'>
                            <h5>DELHI</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className='bg-white frm_loc'>
                        <div className='from_maiin d-flex justify-content-between px-2 pt-1'>
                            <p>DEPARTURE</p>
                            <img src={clndr} alt="" />
                        </div>
                        <div className='text-start ps-4'>
                            <h5>12/5/22</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 ps-0">
                <div className='bg-white frm_loc'>
                        <div className='from_maiin d-flex justify-content-between px-2 pt-1'>
                            <p>RETURN</p>
                            <img src={clndr} alt="" />
                        </div>
                        <div className='text-start ps-4'>
                            <h5>12/5/22</h5>
                        </div>
                    </div>
                </div>

                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="row mt-1 justify-content-center">
                <div className="col-md-8">
                    <div className="row frbcl">
                    <div className="col-lg-3 pe-0">
                    <div className='bg-white frm_loc'>
                        <div className='from_maiin d-flex justify-content-between px-2 pt-1'>
                            <p className='fst_f'>START FROM</p>
                            <img src={clndr} alt="" />
                        </div>
                        <div className='text-start ps-4'>
                            <h5>12/5/22</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 pe-0">
                    <div className='bg-white frm_loc'>
                        <div className='from_maiin d-flex justify-content-between px-2 pt-1'>
                            <p className='fst_f'>NO OF FLIGHT</p>
                            <img src={clndr} alt="" />
                        </div>
                        <div className='text-start ps-4'>
                            <h5>12/5/22</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className='bg-white frm_loc'>
                        <div className='from_maiin d-flex justify-content-between px-2 pt-1'>
                            <p>ROOM & GUEST</p>
                            <img src={passenger} alt="" />
                        </div>
                        <div className='text-start ps-4'>
                            <h5>1 ADULT</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 ps-0">
                <div className='bg-white frm_loc'>
                        <div className='from_maiin d-flex justify-content-between px-2 pt-1'>
                            <p>TRAVEL CLASS</p>
                            {/* <img src={Location} alt="" /> */}
                        </div>
                        <div className='text-start ps-4'>
                            <h5>ECONOMY</h5>
                        </div>
                    </div>
                </div>

                    </div>
                </div>
            </div>

            {/* row 3 */}
            <div className="row mt-3 justify-content-center pb-4">
                <div className="col-md-6">
                    <div className="row">

                    <div className="col-lg-6 d-flex justify-content-center justify-content-md-end pe-0">
                     <div className='bg'>
                        <button type="button" className='btn btn-lg border border-2 rudn text-white'>SKIP FLIGHT</button>
                     </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center justify-content-md-start ">
                    <div className='bg'>
                    <button type="button" className='btn btn-lg border border-2 rudn  bg-white'>BOOK NOW</button>
                    </div>
                </div>

                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid mt-4 '>
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className='headingone border text-white'>
                        <h2 className='m-0 pt-2 pb-2'>
                        Create Your Own Package In 5 Simple Steps
                        </h2>
                    </div>
                </div>
            </div>
        </div>


                <div className="container pkge_main mt-5">

                        <div className="row frame1 d-flex justify-content-center">
                            <div className="col-lg-5 col-md-10 step1">
                               <img src="./images/Frame_1.png" alt="" className=' w-100' />
                            </div>
                        </div>

                        <div className="lineone"><img src="./images/Vector_1.png" alt="" className='line'/></div>

                        <div className=" row frame2 d-flex justify-content-center">
                          <div className="col-lg-5 col-md-10">
                         {/* <img src="./images/Vactor_car.png" alt="" className='bg-dark' />     */}
                             <img src="./images/Frame_2.png" alt="" className='step2 w-100' />
                          </div>
                        </div>

                        <div className="lineone"><img src="./images/Vector_2.png" alt="" className='line'/></div>

                        <div className="row frame3 d-flex justify-content-center">
                            <div className="col-lg-5 col-md-10 step3">
                               <img src="./images/Frame_3.png" alt="" className='w-100' />
                            </div>
                        </div>

                        <div className="lineone"><img src="./images/Vector_3.png" alt="" className='line'/></div>

                        <div className="row frame4 d-flex justify-content-center">
                           <div className="col-lg-5 col-md-10">
                              <img src="./images/Frame_4.png" alt="" className='w-100 step4' />
                          </div>
                        </div>

                        <div className="lineone"><img src="./images/Vector_4.png" alt="" className='line'/></div>

                        <div className="row frame5 d-flex justify-content-center">
                            <div className="col-lg-5 col-md-10 step5">
                              <img src="./images/Frame_5.png" alt="" className='w-100' />
                           </div>
                        </div>
                        <div className=' mt-5 mb-5 '>
                        <Link to="/Planflight"><button type="button" class="btn btn-lg text-white creat_click">Create Package</button></Link>
                        </div>
                    </div>
    </div>
  )
}

export default Umraplane