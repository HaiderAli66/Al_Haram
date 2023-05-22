import React from "react";
import Rating from "@mui/material/Rating";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Icon } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import MosqueIcon from "@mui/icons-material/Mosque";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

function Adult_card({}) {
  return (
    <div class=" mb-5 container-fluid mt-4">
        <div className="card">
      <div class="row g-0 ">
        <div class="col-md-3">
          <img src="ishan-seefromthesky-66Tu10CxYY0-unsplash 8.png
" className="img-fluid rounded-start w-100" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-start">Classic Land Package</h5>
            <p class="card-text text-start">
              Home to numerous lakes, villages and high peaks of the Alps,
              Switzerland is a dreamy <br />
              mountainous Central European country that lures tourists from all
              over the world
            </p>

            <div className="row">
              <div className="col-6 col-md-3 text-start">
                <CalendarMonthIcon /> 10 Days
              </div>
              <div className="col-6 col-md-3  text-start">
                <PeopleAltIcon /> 50 Members
              </div>
              <div className="col-6 col-md-3  text-start">
                <CalendarMonthIcon /> 13 Sep 2022
              </div>
              <div className="col-6 col-md-3  text-start">
                <LocationOnIcon /> Delhi-INDIA
              </div>
            </div>

            <h5 className=" text-start mt-4">
              {" "}
              <b>INCLUSION</b>
            </h5>
            <div className=" main_div_icons  text-start mt-4 p ">
              <span className="">
                {" "}
                <AirplanemodeActiveIcon
                  fontSize="large"
                  color="disabled"
                  className="border   ms-4"
                />{" "}
              </span>
              <span className="">
                {" "}
                <DirectionsBusIcon
                  fontSize="large"
                  color="disabled"
                  className="border   ms-4"
                />{" "}
              </span>
              <span className="">
                {" "}
                <BedroomParentIcon
                  fontSize="large"
                  color="disabled"
                  className="border   ms-4"
                />{" "}
              </span>
              <span className="">
                {" "}
                <CalendarMonthIcon
                  fontSize="large"
                  color="disabled"
                  className="border   ms-4"
                />{" "}
              </span>
              <span className="">
                {" "}
                <MosqueIcon
                  fontSize="large"
                  color="disabled"
                  className="border   ms-4"
                />
              </span>
            </div>
          </div></div>
        </div>
      </div>
    </div>
  );
}

export default Adult_card;