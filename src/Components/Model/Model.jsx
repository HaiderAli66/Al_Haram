import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  bgcolor: '',
  height:"100%",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",

};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className='ucard text-white px-3 py-2 fs-6' onClick={handleOpen}><b>Continue Booking</b></Button>
      <Modal
        open={open}
        disableScrollLock= "false"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      
      >

        <Box sx={style}   className="ucard container  ">
         
        <div className="container  ">
      
      <div className="row pt-3 mt-5 uoverflow overflow-scroll">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Name</h6>
              <input type="text" className='w-100 p-2 ' placeholder='Enter Name' />
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Phone Number</h6>
              <input type="number" className='w-100 p-2'  placeholder='Enter Number'/>
          </div>
      </div>
      <div className="row  mt-5">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Email</h6>
              <input type="email" className='w-100 p-2' placeholder='Enter Email'/>
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Package Name</h6>
              <input type="text" className='w-100 p-2' placeholder='Enter package'/>
          </div>
      </div>
      <div className="row  mt-5">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Departure City</h6>
              <input type="text" className='w-100 p-2' placeholder='Enter City' />
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>Travel Date</h6>
              <input type="text" className='w-100 p-2' placeholder='Enter Data' />
          </div>
      </div>
      <div className="row  mt-5">
      
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white'>No of person</h6>
              <input type="password" className='w-100 p-2' placeholder='Enter Password'/>
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white' >Confirm password</h6>
              <input type="password" className='w-100 p-2'placeholder='Enter Confirm Password' />
          </div>
      </div>
      <div className="send mt-5 text-center ">
      <button className='btn btn-outline-light  btn-lg mb-5 '><b>Submit</b></button>
      </div>
            </div>
          
        </Box>
      </Modal>
    </div>
  );
}
