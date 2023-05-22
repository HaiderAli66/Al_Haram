import React from 'react'
import "./Rightmsg.css"

function Rightmsg() {
  return (
    <div>
      
      {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Demo Modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-body gr">
        <div className='text-end'><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
        <div className='main'>
            <div className='p-5'>
                <img src="./images/success_msg_img/tick_yes.png" alt="" className='tick_ok' />
            </div>
            <div className='text-white'>
                <h3>Your Booking Is Confirmed <br /> Successfully</h3>
            </div>
        </div>
      </div>

      <div class="modal-footer pt-3 pb-3 d-flex justify-content-center">
        <div>
            <h4 className='text-capitalize' >all the details have been sent to your registered e-mail</h4>
        </div>
      </div>

    </div>
  </div>
</div>

    </div>
  )
}

export default Rightmsg
