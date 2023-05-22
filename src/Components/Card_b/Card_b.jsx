import React from "react";
import "./Card_b.css"
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import WorkIcon from "@mui/icons-material/Work";
import SpeedIcon from "@mui/icons-material/Speed";


function Card_a() {
  return (
    <div className="mb-5 mt-5 container">
      <div className=" card  m-auto ">
        <div className="row">
          <div className="col-lg-4 col-sm-12 car_border">
            <div className="mt-4">
              <h5>Toyota camry</h5>
              <p>Tl-767854</p>
            </div>
            <img
              src="kindpng_6053405 1.png"
              className="car-moto mb-5 mt-4"
              alt=""
            />
          </div>
          <div className="col-lg-8 col-sm-12 ">
            <div className="row">
              <div className="col-lg-9 mt-3">

                <div className="d-flex px-2 px-md-0 ">
                  <h4 className="text-uppercase  px-md-0"><b> al jabbar transport services</b></h4>
                <span className="p for_none_box"><p className="p-1  px- white mt-2 ms-0 ms-md-2 border text649">649 rating</p></span>
                </div>

                <div className="icon-main d-flex  ">
                   <h6 className="px-1 pt-md-0 pt-2 ps-md-0 ps-2">
                     <DirectionsCarFilledIcon /> 1 UNIT
                   </h6>
                    <p className="px-1 py-md-0 py-2 ps-md-0 ps-2">
                      <EventSeatIcon /> <span> 4 SEATS
                      </span>                    </p>
                   
                    <h6 className="px-1 py-md-0 py-2 ps-md-0 ps-2">
                      <WorkIcon /> 2 LUGGAGE BAGS
                    </h6>
                   <h6 className="px-1 py-md-0 py-2 ps-md-0 ps-2">
                      <SpeedIcon />
                      123 KM
                    </h6>
               </div>
               
              </div>
              <div className="col-lg-3 ps-0 ">
                <div className="mt-3">
                  <h4>Rs 28700.00</h4>
                  <button className="btn text-white text-uppercase">SELECT</button>
                </div>
              </div>
            </div>
            <div className="row for_down_p">
              <div className="col-lg-6 text-start">
                <div className="for_top_respo">
                <h6 className="text-uppercase px-md-0 px-2">Best Priced Car With Best Promise</h6>
                <ul className=" text-start m-0 p-0 ps-md-3">
                  <li>Toll and State Tax: Included</li>
                  <li>Free cancellation</li>
                  <li>24/7 customer helpline</li>
                </ul>
               </div>
              </div>
              <div className="col-md-6 col-12">
                  <div className="for_blow d-flex justify-content-end">
                    <button className="aa btn hover_ress hdr_new_crd btn-primary float-start text-white text-uppercase ">
                      safety standard & restrictions
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_a;
