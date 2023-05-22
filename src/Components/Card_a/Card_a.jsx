import React from "react";
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
            <div className="toto text-start ms-3 mt-3 d-md-flex d-block">
              <h5>Toyota camry or similar</h5>
              <p className=" fs-8-white mt-2 ms-0 ms-md-2">WHITE</p>
              <p className="  px-1 white mt-2 ms-0 ms-md-2 border text649">
                649 rating
              </p>
            </div>
            <div className="icon-main d-flex  ">
              <h6 className="px-1">
                <DirectionsCarFilledIcon /> 1 UNIT
              </h6>
              <h6 className="px-1">
                <EventSeatIcon />4 SEATS
              </h6>
              <h6 className="px-1">
                <WorkIcon /> 2 LUGGAGE BAGS
              </h6>
              <h6 className="px-1">
                <SpeedIcon />
                123 KM
              </h6>
            </div>
            <div className="row">
              <div className="col-lg-8 col-sm-12 text-start">
                <h6 className="ms-3 mt-3">
                  {" "}
                  <b> Best Priced Car With Best Promise </b>{" "}
                </h6>
                <ul>
                  <li>Toll and State Tax: Included</li>
                  <li>Free cancellation</li>
                  <li>24/7 customer helpline</li>
                </ul>

                <div className="row mt-5 mb-3 d-flex">
                  <div className="col-lg-8 mt-2   col-sm-12">
                    <button className="aa btn hover_ress btn-primary float-start text-white text-uppercase ">
                      {" "}
                      safety standard & restrictions
                    </button>
                  </div>
                  <div className="col-lg-4 mt-2 col-sm-12">
                    <button className="btn btn-primary hover_ress ss float-start float-md-center text-white text-uppercase">
                      partial payment
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 mt-4">
                <h4>Rs 28700.00</h4>
                <button className="btn btn-secondary mb-2 text-white text-uppercase">booking now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card_a;
