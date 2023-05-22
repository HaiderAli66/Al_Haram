import React from 'react'
import "./Explore_ksg.css"
import exp from "../Assets/exp.png"

function Explore_ksg() {
    


    
  return (
    <div className='py-5'>
                <h1 className='Travel_main_heading'>Explore Saudi arabia </h1>
                <h4 className='Travel_sub_heading'>trending umrah packages from popular destinations</h4>
        <div className=" ">
        <div className="container explore_main_ksg">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 col-lg-3 mt-3 col-6">
                    <div className='d-flex res_dir'>
                        <div>
                        <img src={exp} alt="" /></div>
                        <div className='mt-4 ms-3 text-start'>
                        <h6 className='explore_card_heading'>dammam</h6>
                        <p className='explore_para'>4,000 listings</p></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mt-3 col-6">
                    <div className='d-flex res_dir'>
                        <div>
                        <img src={exp} alt="" /></div>
                        <div className='mt-4 ms-3 text-start'>
                        <h6 className='explore_card_heading'>riyadh</h6>
                        <p className='explore_para'>4,000 listings</p></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mt-3 col-6">
                    <div className='d-flex res_dir'>
                        <div>
                        <img src={exp} alt="" /></div>
                        <div className='mt-4 ms-3 text-start'>
                        <h6 className='explore_card_heading'>abiha</h6>
                        <p className='explore_para'>4,000 listings</p></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mt-3 col-6">
                    <div className='d-flex res_dir'>
                        <div>
                        <img src={exp} alt="" /></div>
                        <div className='mt-4 ms-3 text-start'>
                        <h6 className='explore_card_heading'>jeddah</h6>
                        <p className='explore_para'>4,000 listings</p></div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center mt-5">
                <div className="col-md-6 col-lg-3 mt-3 col-6">
                    <div className='d-flex res_dir'>
                        <div>
                        <img src={exp} alt="" /></div>
                        <div className='mt-4 ms-3 text-start'>
                        <h6 className='explore_card_heading'>mecca</h6>
                        <p className='explore_para'>4,000 listings</p></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mt-3 col-6">
                    <div className='d-flex res_dir'>
                        <div>
                        <img src={exp} alt="" /></div>
                        <div className='mt-4 ms-3 text-start'>
                        <h6 className='explore_card_heading '>madinah</h6>
                        <p className='explore_para'>4,000 listings</p></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mt-3 col-6">
                    <div className='d-flex res_dir'>
                        <div>
                        <img src={exp} alt="" /></div>
                        <div className='mt-4 ms-3 text-start'>
                        <h6 className='explore_card_heading '>al-khor</h6>
                        <p className='explore_para'>4,000 listings</p></div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 mt-3 col-6">
                    <div className='d-flex res_dir'>
                        <div>
                        <img src={exp} alt="" /></div>
                        <div className='mt-4 ms-3 text-start'>
                        <h6 className='explore_card_heading'>taif</h6>
                        <p className='explore_para'>4,000 listings</p></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Explore_ksg
