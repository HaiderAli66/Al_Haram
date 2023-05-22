import React from 'react'
import "./Flight_second.css"
import Linee from "../Assets/Linee.png"
import eli from "../Assets/eli.png"
function Flight_second() {
  return (
    <div>
      <div className="container-fluid pt-3 ">
        <div className="row">
           
            <div className="col-12 card ">
<div className="row py-2  align-items-center overflow-class">
    <div className="col-md-2 col-sm-12 text-md-start text-center">
        <img src="IndiGo-Logo 4.png" className='border' alt="" />
        <h5>INDIGO</h5>
        <p>(IN-855)</p>
    </div>
    <div className="col-md-2 col-sm-12 text-md-start text-center pt-2">
        <h5>21:40</h5>
        <h5>DELHI</h5>
        <p>TUE,30 AUG 2022</p>
    </div>
    <div className="col-md-3 col-sm-12 p-0 pt-2">
        <p className='text-uppercase  line-bonk m-0'>3h 20m (direct)</p>
        <span><img src={eli} alt="" /><img src={Linee} alt="" /><img src={eli} alt="" /></span>
        <p className='text-uppercase line-bonk m-0'>3h 20m (direct)</p>
    </div>
    <div className="col-md-2 col-sm-12 text-md-start text-center right-borger-line pt-2">
    <h5>21:40</h5>
        <h5>DELHI</h5>
        <p>TUE,30 AUG 2022</p>
    </div>
    
    <div className="col-md-3 col-sm-12 pt-2 ">
    <h5>$ 80000</h5>
        <p>Per Person</p>
        <button className='btn btn-sm ucode text-white btn_hvr1'>VIEW DETAIL</button>
    </div>
</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Flight_second
