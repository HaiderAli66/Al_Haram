import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sign from "../Assets/Sign.png"
import signn from "../Assets/signn.png"
import "./Sign_up_page_msg.css"

      
      function Sign_up_page_msg(props) {
  return (
    <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
      <Modal.Body className='clr_body'>
    
           <div className="container">
               <div className="row justify-content-center">
                <div className="d-flex justify-content-center align-items-center">
                    <img src={Sign} className='sign_mssg_imgg' alt="" />
                    <img src={signn} className='sign_mssg_img' alt="" />
                </div>
                <div className="col-md-6 mt-3">
                    <h3 className='sign_up_msg_para'>You have successfully registered</h3>
                </div>

               </div>
           </div>
      </Modal.Body>
      <Modal.Footer>
    

        <div className="container">
            <div className="row justify-content-center">
                
                <button onClick={props.onHide} className='sign_up_msg_bottom_button'> proceed to sign in</button>
               
            </div>
        </div>
      </Modal.Footer>
    </Modal>


    </div>
  )
}

export default Sign_up_page_msg