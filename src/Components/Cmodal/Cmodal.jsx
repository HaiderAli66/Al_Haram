import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "./Cmodal.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100%",
  height : "100%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflow : "scroll"
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="text-white chan_color">BOOK NOW</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='container sin  uoverflow' sx={style}>
      <div className='container ci'>
      <div className='heading text-white text-center'><h2>BOOKIN SUMMARY</h2></div>

      <div className="row pt-3 mt-3 justify-content-center jf ">
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white text-start'>Name</h6>
              <input type="text" className='w-100 leftbar rounded' placeholder='John Smith' />
          </div>
          
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white text-start'>Group Size</h6>
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg">
                      <option selected>john smith</option>
                      <option value="1">john smith</option>
                      <option value="2">john smith</option>
                      <option value="3">john smith</option>
               </select>
          </div>
      </div>

      <div className="row  mt-3 justify-content-center main-tow jf">
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white text-start'>Email</h6>
              <input type="email" className='w-100 leftbar rounded' placeholder='John Smith@Abc.Com'/>
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white text-start'>Food Cuisine</h6>
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg">
                      <option selected>John Smith@Abc.Com</option>
                      <option value="1">John Smith</option>
                      <option value="2">John Smith</option>
                      <option value="3">John Smith</option>
               </select>
          </div>
      </div>

      <div className="row  mt-3 justify-content-center jf">
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white text-start'>Mobile Number</h6>
              <input type="text" className='w-100 leftbar rounded' placeholder='Enter Your Mobile Number' />
          </div>
          <div className="col-lg-6 col-sm-12">
              <h6 className='text-white text-start'>Food Type</h6>
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg">
                      <option value="1">*******</option>
                      <option value="2">******</option>
                      <option value="3">*****</option>
               </select>
          </div>
      </div>

     

      <div className="send mt-3 text-center ">
      <button className='btn btn-light btn-lg  sor'><b>SUBMIT ORDER </b></button>
      </div>

      </div>
        
        </Box>
      </Modal>
    </div>
  );
}
