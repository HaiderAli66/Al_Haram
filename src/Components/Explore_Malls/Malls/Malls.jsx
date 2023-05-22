import React from "react";


import Malls_card from "../Malls_card/Malls_card";
function Malls(props) {
  return (
    <div className="container-fluid my-4">
      <div className="row ps-md-4 justify-content-around">
        <div className="col-12 col-md-3 shadow-lg  ">
          <div className="row text-start  ">
            <div className="col-12 text-center text-white"   style={{ background: "#02A3C1" }}>
              <div
                className="side-bar text-white py-2 "
                
              >
                <div className="heading">
                  <h4>{props.title}</h4>
                </div>
              </div>
            </div>

            <div className="col-12 mt-2  py-4" >
              <h5 className="text-muted"style={{fontSize:"18px"}}>{props.t1}</h5>
              <p className="text-muted" style={{fontSize:"13px"}}>{props.d1}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-4">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.t2} </h5>
              <p className="text-muted"style={{fontSize:"13px"}}>{props.d2}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-4">
              <h5 className="text-muted"style={{fontSize:"18px"}}>{props.t3} </h5>
              <p className="text-muted"style={{fontSize:"13px"}}>{props.d3}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-4">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.t4} </h5>
              <p className="text-muted"style={{fontSize:"13px"}}>{props.d4}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-4">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.t5}</h5>
              <p className="text-muted" style={{fontSize:"13px"}}>{props.d5}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
          </div>
          <div className="row mt-4 text-start">
            <div className="col-12" style={{ background: "#02A3C1" }}>
              <div
                className="side-bar text-white py-2  "
                
              >
                <div className="heading text-center">
                  <h4>{props.title1}</h4>
                </div>
              </div>
            </div>

            <div className="col-12 mt-2 py-4" >
              <h5 className="text-muted" style={{fontSize:"18px"}} >{props.name} </h5>
              <p className="text-muted" style={{fontSize:"10px",marginTop:'10px'}}>
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-4">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.name} </h5>
              <p className="text-muted" style={{fontSize:"10px",marginTop:'10px'}}>
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-4">
              <h5 className="text-muted " style={{fontSize:"18px"}}>{props.name} </h5>
              <p className="text-muted" style={{fontSize:"10px", marginTop:'10px'}}>
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-4">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.name} </h5>
              <p className="text-muted" style={{fontSize:"10px" ,marginTop:'10px'}}>
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-4">
              <h5 className="text-muted" style={{fontSize:"18px "}} >{props.name} </h5>
              <p className="text-muted" style={{fontSize:"10px",   marginTop:'10px'}}>
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9  pe-md-4 ps-sm-4">
       
          <Malls_card
            title="Al Jabbar Shopping Mall"
            img="Mall.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Malls_card
            title="Al Jabbar Shopping Mall"
            img="Mall.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Malls_card
            title="Al Jabbar Shopping Mall"
            img="Mall.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Malls_card
            title="Al Jabbar Shopping Mall"
            img="Mall.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Malls_card
            title="Al Jabbar Shopping Mall"
            img="Mall.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Malls_card
            title="Al Jabbar Shopping Mall"
            img="Mall.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Malls_card
            title="Al Jabbar Shopping Mall"
            img="Mall.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Malls_card
            title="Al Jabbar Shopping Mall"
            img="Mall.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
        </div>
      </div>
    </div>
  );
}

export default Malls;
