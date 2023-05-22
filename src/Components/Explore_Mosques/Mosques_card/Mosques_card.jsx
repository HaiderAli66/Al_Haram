import React from 'react'
import Button from "@mui/material/Button";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
export default function Mosques_card(props) {
  return (
    <div>
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <Link to="/sheikh_zyad_mosq">
              <img
                src={props.img}
                className="img-fluid  d-block h-100 max-height w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body text-md-start ms-md-2 text-start  ">
              <h5 className="card-title mac_hotel_title">
                {props.title}{" "}

              </h5>
              <div className="row mac_c0l_design ">
                <div className="col-12 " style={{fontSize:"15px"}}>
                <p className="card-text mb-1 mac_fs_time">
                {" "}
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
                </div>
                <div className="col-md-8"></div>
                <div className="col-12 col-md-4 my-2 ">
                  <Link
                    to="/sheikh_zyad_mosq"
                    className="text-decoration-none"
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ background: "#02A3C1", padding: "8px",marginTop:'20px' }}
                    >
                      View Detail
                    </Button>
                  </Link>
                </div>
              </div>
             

             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
