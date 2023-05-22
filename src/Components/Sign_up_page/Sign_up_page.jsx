import React from 'react'
import "./Sign_up_page.css"
import w from "../Assets/w.png"
import w1 from "../Assets/w1.png"
// import Sign_up_modal from '../Sign_up_modal/Sign_up_modal'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sign_up_page_msg from '../Sign_up_page_msg/Sign_up_page_msg'

function Sign_up_page() {

    const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <div className='sign_up_page_main'>
        <div className="container">
             <div className="row">
                <div className="col-md-12">
                    <div className="sing_up_page_landing">
                        <div className="row mt-3">
                            <div className="col-md-6 text-start">
                                <p className='sign_up_input_heading'>Travel Agency Name</p>
                                <input type="text" placeholder='Enter Your Travel Agency Name' className='sign_up_input_here w-100' />
                            </div>
                            <div className="col-md-6 text-start">
                                <p className='sign_up_input_heading'>phone number</p>
                                <input type="text" placeholder='enter your phone number' className='sign_up_input_here w-100' />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 text-start">
                                <p className='sign_up_input_heading'>city</p>
                                <input type="text" placeholder='al bushra travels & tours' className='sign_up_input_here w-100' />
                            </div>
                            <div className="col-md-6 text-start">
                                <p className='sign_up_input_heading'>address</p>
                                <input type="text" placeholder='enter your address' className='sign_up_input_here w-100' />
                            </div>
                        </div>
                        <div className="row mt-3">
                               <div className="col-md-3 text-start">
                                <p className='sign_up_input_heading'>city</p>
                                <input type="text" placeholder='al bushra travels & tours' className='sign_up_input_here w-100' />

                               </div>
                               <div className="col-md-3 text-start">
                                <p className='sign_up_input_heading'>country</p>
                                <input type="text" placeholder='enter country name' className='sign_up_input_here w-100' />

                               </div>
                               <div className="col-md-6 text-start">
                                <p className='sign_up_input_heading'>contact person name</p>
                                <input type="text" placeholder='enter your name' className='sign_up_input_here w-100' />
                            </div>

                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 text-start">
                                <p className='sign_up_input_heading'>password</p>
                                <input type="password" placeholder='enter your password' className='sign_up_input_here w-100' />
                                <div className='d-flex'>
                                     <p className='sign_up_input_heading'>are you licensed umrah agent/umrah agent</p>
                            <input className="form-check-input ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label text-white mx-2" for="flexRadioDefault1">
    Yes
  </label>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label text-white mx-2" for="flexRadioDefault1">
    No
  </label>
  </div>
                            </div>
                            <div className="col-md-6 text-start">
                                <p className='sign_up_input_heading'>confirm password</p>
                                <input type="password" placeholder='confirm password' className='sign_up_input_here w-100' />
    
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 text-start">
                                <p className='sign_up_input_heading'>license number of ministry of umrah or hajj</p>
                                <input type="text" placeholder='enter your license number' className='sign_up_input_here w-100' />
                            </div>
                            <div className="col-md-6 text-start">
                                <p className='sign_up_input_heading'>iban number</p>
                                <input type="text" placeholder='enter your iban number' className='sign_up_input_here w-100' />
                            </div>
                        </div>
  <div className="row justify-content-center">
    <div className="col-md-3">
    
        <Button  className='sign_up_bottom_button' onClick={() => setModalShow(true)}>
        create account
      </Button>

      <Sign_up_page_msg
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <p className='sign_up_input_heading mt-3'>Already have an account..?   <span className='acc_log'>log in</span> </p>
    </div>
  </div>
  <div className="row justify-content-end">
    <div className="col-md-3">
        <button className='whatsapp_button d-flex'> 
            <div className='d-flex justify-content-center align-items-center me-2'>
            <img src={w} className='position-relative' alt="" />
            <img src={w1} className='position-absolute' alt="" />
          
            </div>
        help
            </button>
    </div>
  </div>
                    </div>
                </div>
             </div>
        </div>


    </div>
  )
}

export default Sign_up_page