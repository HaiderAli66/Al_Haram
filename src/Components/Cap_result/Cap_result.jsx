import React from "react";
import Rating from "@mui/material/Rating";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Cap_card from "./Cap_result";
import { Button, Link } from "@mui/material";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import WorkIcon from "@mui/icons-material/Work";
import SpeedIcon from "@mui/icons-material/Speed";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FormGroup from "@mui/material";
import Card_a from "../Card_a/Card_a";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Cap_result = (props) => {
  return (
    <div className="container my-4">
      <div className="row justify-content-around">
        <div className="col-12 col-md-4 ">
          <div className="row">
            {/* <div className="col-12"></div> */}

            <div className="col-12 mt-2 text-start border p-4">
              <h2 className=" ">YOUR TRANSFER</h2>
              <h5 className="text-muted">
                <LocationOnIcon /> PICK-UP LOCATION
              </h5>
              <p>MUMBAI, MAHARASHTRA GALI NO 6</p>
              <h5 className="text-muted">
                {" "}
                <LocationOnIcon /> DROP-OFF LOCATION
              </h5>
              <p>DELHI,GHAZIABAD 45 STREET 2</p>
              <h5 className="text-muted">
                <CalendarMonthIcon /> PICK-UP DATE & TIME
              </h5>
              <span className="pe-5">12/5/22</span> <span>04:30PM</span>
              <h5 className="text-muted">
                <EmojiPeopleIcon /> PASSENGER
              </h5>
              <h5> 1 ADULT </h5>
            </div>

            <div className="col-12 mt-2 text-start border p-4">
              <h2 className="text-start ps-5 text-center text-uppercase">Filter</h2>
              <h5 className=""> 
              <Checkbox {...label} />
               CAB TYPE</h5>
              <p>
              <b>    <Checkbox {...label} /> HATCH BACK</b>
              </p>

              <p>
              <Checkbox {...label} />
                <b>SEDAN</b>
              </p>
              <p>
              <Checkbox {...label} />
                <b>SUV</b>
              </p>
              <hr />
              <h5>FUEL TYPE</h5>
              <p>
              <Checkbox {...label} />
                <b>DIESEL</b>
              </p>
              <p>
              <Checkbox {...label} />
                <b>ANY</b>
              </p>
            </div>

            <div className="col-12 mt-2 text-start py-3 border text-center">
              <h3 className="text-start py-2 fw-700 text-center className=''">WHY BOOK WITH US</h3>
              <h4 className='text-uppercase'>FREE CANCEL</h4>
              <h6 className="text-muted py-4">
                {" "}
                You Can Cancel Your Cab Before 12 Hour{" "}
              </h6>
              <h4 className='text-uppercase'>EASY PAYMENT OPTION</h4>
              <h6 className="text-muted py-2">
                {" "}
                Pay online via card, net banking, UPI, etc{" "}
              </h6>
              <h4 className='text-uppercase'>tOP RATED DRIVERS</h4>
              <h6 className="text-muted py-2">
                {" "}
                You will ride with top-rated drivers{" "}
              </h6>
              <h4 className='text-uppercase'>BEST PRICES EVER!</h4>
              <h6 className="text-muted py-2">
                {" "}
                Book your cab at pocket-friendly rates!
                <br />
                No need to compare{" "}
              </h6>
            </div>
          </div>
        </div>

        {/*---------------------------- Card start ------------------------------*/}

{/* <Card_a/> */}

        <div className="col-12 col-md-8 mt-2">
          {[1].map(() => {
            return (
              <div>
                  <div className="row g-0">
                     <Card_a/>
                     <Card_a/>
                     <Card_a/>
                     <Card_a/>
                     <Card_a/>
                     {/* <Card_a/>
                     <Card_a/>
                     <Card_a/>
                     <Card_a/>
                     <Card_a/>
                     <Card_a/>
                     <Card_a/>
                     <Card_a/>
                     <Card_a/> */}
                  </div>
              </div>
               
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cap_result;

{
  /* <div className="row ">
<div className="col-2 d-flex">
  <div className="row"></div>

  <h6>
    <DirectionsCarFilledIcon />1 UNIT
  </h6>
</div>

<div className="col-3">
  <h6>
    <EventSeatIcon />4 SEATS
  </h6>
</div>
<div className="col-4">
  <h6>
    <WorkIcon /> 2 LUGGAGE BAGS
  </h6>
</div>

<div className="col-3">
  <h6>
    <SpeedIcon />
    123 KM
  </h6>
</div>
</div> */
}
