import React from "react";
import Button from "@mui/material/Button";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
function Monuments_card(props) {
  return (
    <div>
      <div className="card mb-3 shadow">
        <div className="row g-0">
          <div className="col-md-4">
            <Link to="/veiw_monuments_details">
              <img
                src={props.img}
                className="img-fluid h-100 max-height d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-body text-md-start ms-md-2 text-start pb-0 ">
              <h5 className="card-title d-flex align-items-center mac_hotel_title  ">
                {props.title}{" "}
                <span className="ms-2">
                  <Rating
                    name="read-only"
                    defaultValue={5}
                    precision={5}
                    readOnly
                  />
                </span>{" "}
              </h5>
              <div className="row mac_c0l_design ">
                <div className="col-12 col-md-8 ">
                  <p className="card-text mb-1 Opening Time  mac_fs_time ">
                    Opening Time <span className="ms-md-5 mac_fs_time ">09:00am</span>{" "}
                  </p>
                  <p className="card-text Opening Time  mac_fs_time ">
                    Opening Time <span className="ms-md-5 mac_fs_time ">11:00pm</span>{" "}
                  </p>
                </div>
                <div className="col-12 col-md-4 my-2">
                  <Link
                    to="/veiw_monuments_details"
                    className="text-decoration-none"
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ background: "#02A3C1", padding: "8px" }}
                    >
                      View Detail
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-8 hr_macmy ">
                <hr />
              </div>

              <p className="card-text mb-1 my-4" style={{fontSize:"15px",marginTop:'15px'}}>
                {" "}
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monuments_card;
