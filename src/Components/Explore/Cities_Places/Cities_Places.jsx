import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import "./Style_city.css";
import { InputAdornment } from "@mui/material";

function Cities_Places() {
  return (
    <div style={{ background: "#02A3C1" }} >
      <div className="container">
        <div className="row text-white py-3">
          <div className="col-12 text-white" style={{fontSize:"36px"}}>
            <h4>Explore Best Cities & Places In Cities </h4>
          </div>
          <div className="col-12">
            <div className="row my-2" style={{ border: "8px solid  #0E93AC" }}>
              <div
                className="col-12 col-md-3 p-2 "
                style={{ background: "white", border: "2px solid  #0E93AC" }}
              >
                <TextField
                  className="border-0"
                  id="standard-read-only-input"
                  label="what are you looking for?"
                  variant="standard"
                  size="large"
                  defaultValue="Resturants"
                />
              </div>
              <div
                className="col-12 col-md-3 p-2 "
                style={{ background: "white", border: "2px solid  #0E93AC" }}
              >
                <TextField
                  id="outlined"
                  label="Select Location"
                  variant="standard"
                  defaultValue="Mecca"
                />
              </div>
              <div
                className="col-12 col-md-3 p-2 "
                style={{ background: "white", border: "2px solid  #0E93AC" }}
              >
                <TextField
                  id="outlined"
                  label="Select Categories"
                  variant="standard"
                  defaultValue="Resturants"
                />
              </div>
              <div
                className="col-12 col-md-3 p-2 "
                style={{ background: "white", border: "2px solid  #0E93AC" }}
              >
                <TextField
          id="standard-search"
          label="Search field"
          value="Search"
          type="search"
          variant="standard"
          InputProps={{
          startAdornment: (
           
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        />
              </div>
            </div>
          </div>
        </div>
        <div className="row  py-4 justify-content-around mx-0 mx-md-5">
          <div className="col-12 col-md-2  text-white my-2  p-md-0  ">
            <div className="pt-2  mx-md-4 action" style={{ background: "#0E93AC"   }}>
            
              <Link
                to="/Explore_resturant"
                className="text-decoration-none text-white  mano_hover"
              >
                <figure className="m-0">
                  <img src="Vector (1).png" alt=""  />

                  <figcaption className="pt-2 pb-2" style={{fontSize:"12px"}}>RESTURANTS</figcaption>
                </figure>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-2  text-white my-2  p-md-0  ">
            <div className="pt-2  mx-md-4 action" style={{ background: "#0E93AC"  }}>
              <Link
                to="/Explore_Malls"
                className="text-decoration-none text-white"
              >
                <figure className="m-0">
                  <img src="maal.png" alt="" />
                  <figcaption className="pt-1 pb-2"style={{fontSize:"12px"}} >SHOPPING MALL</figcaption>
                </figure>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-2  text-white my-2 p-md-0  " >
           <div className="pt-2 mx-md-4 action " style={{ background: "#0E93AC" }}>
              <Link
                to="/Park_main"
                className="text-decoration-none text-white"
              >
                <figure className="m-0">
                  <img src="Vector (6).png " alt="" />
                  <p className="pt-2 pb-2" style={{fontSize:"12px"}} > HISTORIC PARK </p>
                </figure>
              </Link>
            </div>
          </div> 
          <div className="col-12 col-md-2  text-white my-2  p-md-0  ">
            <div className="pt-2 mx-md-4 action " style={{ background: "#0E93AC"  }}>
              <Link
                to="/Explore_Monuments"
                className="text-decoration-none text-white"
              >
                <figure className="m-0">
                  <img src="mmm.png" alt=""  />
                  <figcaption className="pt-2 pb-2" style={{fontSize:"12px"}} >MONUMENT</figcaption>
                </figure>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-2  text-white my-2  p-md-0  ">
            <div className="pt-2 mx-md-4 action " style={{ background: "#0E93AC"  }}>
              <Link
                to="/Explore_Mosques"
                className="text-decoration-none text-white"
              >
                <figure className="m-0">
                  <img src="Vector (4).png" alt="" />
                  <figcaption className="pt-2 pb-2"style={{fontSize:"12px"}} >MOSQUES</figcaption>
                </figure>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-2  text-white my-2  p-md-0  " >
            <div className="pt-2 mx-md-4 action " style={{ background: "#0E93AC" }}>
              <Link
                to="/Local_market"
                className="text-decoration-none text-white"
              >
                <figure className="m-0">
                  <img src="Vector (6).png " alt="" />
                  <p className="pt-2 pb-2"  style={{fontSize:"12px"}}>LOCAL SHOPPING</p>
                </figure>
              </Link>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Cities_Places;
