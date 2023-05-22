import React from "react";
import Monuments_card from "../Monuments_card/Monuments_card";
function Monuments(props) {
  return (
    <div className="container-fluid my-4">
      <div className="row justify-content-around">
        <div className="col-12 col-md-4">
          <div className="row text-start ">
            <div className="col-12 text-center">
              <div
                className="side-bar text-white py-2 "
                style={{ background: "#02A3C1" }}
              >
                <div className="heading">
                  <h4>{props.title}</h4>
                </div>
              </div>
            </div>

            <div className="col-12 mt-2 py-3 ps-4 ">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.t1}</h5>
              <p className="text-muted" style={{fontSize:"13px"}}>{props.d1}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-3 ps-4">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.t2} </h5>
              <p className="text-muted" style={{fontSize:"13px"}}>{props.d2}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-3 ps-4">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.t3} </h5>
              <p className="text-muted" style={{fontSize:"13px"}}>{props.d3}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-3 ps-4">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.t4} </h5>
              <p className="text-muted" style={{fontSize:"13px"}}>{props.d4}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-3 ps-4">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.t5}</h5>
              <p className="text-muted" style={{fontSize:"13px"}}>{props.d5}</p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
          </div>
          <div className="row mt-4 text-start">
            <div className="col-12 py-3 ps-3">
              <div
                className="side-bar text-white py-2  "
                style={{ background: "#02A3C1" }}
              >
                <div className="heading text-center">
                  <h4>{props.title1}</h4>
                </div>
              </div>
            </div>

            <div className="col-12 mt-2 py-3 ps-3">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.name} </h5>
              <p className="text-muted" style={{fontSize:"12px ",marginTop:'10px'}}>
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-3 ps-3">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.name} </h5>
              <p className="text-muted" style={{fontSize:"12px ",marginTop:'10px'}}>
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-3 ps-3">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.name} </h5>
              <p className="text-muted" style={{fontSize:"12px ",marginTop:'10px'}}>
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-3 ps-3">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.name} </h5>
              <p className="text-muted"style={{fontSize:"12px ",marginTop:'10px'}}>
                <span className="me-2">
                  <img src="Map Marker.png" alt="" />
                </span>
                {props.location}
              </p>
            </div>
            <div className="col-10">
              <hr />{" "}
            </div>
            <div className="col-12 mt-2 py-3 ps-3">
              <h5 className="text-muted" style={{fontSize:"18px"}}>{props.name} </h5>
              <p className="text-muted" style={{fontSize:"12px ",marginTop:'10px'}}>
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
        <div className="col-12 col-md-8 pe-md-4 pe-sm-4">
        
          <Monuments_card
            title="Al - Hukair  Monument"
            img="Monuments.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Monuments_card
            title="Al - Hukair Land "
            img="Monuments.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Monuments_card
            title="Al - Hukair Land "
            img="Monuments.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Monuments_card
            title="Al - Hukair Land "
            img="Monuments.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Monuments_card
            title="Al - Hukair Land "
            img="Monuments.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Monuments_card
            title="Al - Hukair Land "
            img="Monuments.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Monuments_card
            title="Al - Hukair Land "
            img="Monuments.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
          <Monuments_card
            title="Al - Hukair Land "
            img="Monuments.png"
            location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
          />
        </div>
      </div>
    </div>
  );
}

export default Monuments;
