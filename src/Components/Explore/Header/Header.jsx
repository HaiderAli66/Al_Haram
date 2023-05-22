import React from "react";

import { Link} from "@mui/material";

function Header() {
  return (
    <div>
    <div className="container-fluid my-2">
      <div className="row ">
        <div className="col-12 col-md-2 text-md-start">
        <Link to="/" className="text-decoration-none ">
          
          <img src="logo.png" className="w-75" alt="" />
          </Link>

        </div>
        <div className="col-12 col-md-8 mt-1">
          <p className="mb-0"> Budget-Friendly & Luxury Package For A Convenient Hajj & Umrah 
           Journeyto The Holly <br className="d-none d-md-block" /> Makkah & Madina For Muslim Brothers & Sisters</p>
        </div>
      </div>
    </div>
      
    </div>
  
  );
}

export default Header;
