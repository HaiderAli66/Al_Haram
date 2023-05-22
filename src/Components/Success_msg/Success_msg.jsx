import React from 'react';
import './Success_msg.css';
import tik from "../../Assets/tik.png";
import PC from "../../Assets/PC.png";



function Success_msg() {
  return (
    <div>
        <div className="success_massege_main">
        <div className="success_msg">
            <div className="confirmed">
              <div className="div_circle">
                <img src={tik} alt="" />
              </div>
            </div>
           </div>
              <div className="success_text">
              <div className="confirmed_text">
              <p className="text-center">Your Booking Is Confirmed <br />Successfully</p>
              </div>
              </div>
              <div className="success_white_main">
                <div className="success_white">
                  <p className="text-center pt-4">all the details have been sent to your b <br /> registered e-mail</p>
                </div>
              </div>


              <div className="unsuccess_message_main_2">
              <div className="unsuccess_msg">
            <div className="unconfirmed">
                <img src={PC} alt="" />
            </div>
           </div>
              </div>
              <div className="unsuccess_white_main">
                <div className="unsuccess_white">
                  <p className="text-center pt-4">Something Went Wrong Please<br /> Please Try Again</p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Success_msg