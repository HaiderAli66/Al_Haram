import React from 'react'
import "./Franchies.css"
import { AiOutlineDownload } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'
function Franchies() {
  return (
    <div>
        {/* <AppBar position="static" sx={{ background: "#02A3C1" }}>
        <Toolbar>
          <Typography variant="h6">

          </Typography>

        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Typography variant="h4" mt={2} mb={2} align={"left"} ml={2}>
            <span className=" rounded-circle p-1 text-white fw-bold " style={{ background: "#02A3C1" }}>AI </span>
            haram
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          < div className='text-center pt-4 pb-4' >
            Budget-Friendly & Luxury Package For A Convenient Hajj & Umrah
            Journey to The Holly Makkah & Madina For Muslim Brothers & Sisters
          </div>
        </Grid>
      </Grid> */}

      <Typography className='text-white py-3' variant="h6" style={{ background: "#02A3C1" }} sx={{ flexGrow: 1 }}>
        <div className='text-center '><p className='fs-6 upper_list_properties'>registration for travel franchise program <br /></p>
        </div>
      </Typography>

      <div className='container  mt-5 mb-5 '>
        <div className="row">
          <div className="col-lg-6 ">
            <button className='btn ucodi text-white btn-lg mt-3   float-start'>Download Franchise Form <AiOutlineDownload className='fs-3 ms-2'/></button>
          </div>
          <div className="col-lg-6 ">
            <button className='btn ucodi text-white btn-lg mt-3   float-start float-md-end'>register irctc agent<BsArrowRight className='fs-3 ms-2'/></button>
          </div>
        </div>
        <div className="card mt-5">
      <div className="row px-3 text-start form-text ">
        <div className="col-lg-6 col-sm-12  pt-3">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Name</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name'/>
  
  </div></div>

  <div className="col-lg-6 col-sm-12 pt-3">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Company Name</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Company Name'/>
  
  </div></div>



  <div className="col-lg-6 col-sm-12 ">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email'/>
    
  </div></div>

  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="number" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Phone Number'/>
  
  </div></div>

  
  <div className="col-lg-6 col-sm-12 d-flex">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">City</label>
    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter City Name' />
    
  </div>
  <div class="mb-3 ms-5">
    <label for="exampleInputEmail1" class="form-label">Zip Code</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Zip Code' />
    
  </div>
  </div>
  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter your Address'/>
    
  </div></div>

  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Website Url</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Website Url '/>
    
  </div></div>
  <div className="col-lg-6 col-sm-12">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter your Address'/>
    
  </div></div>
  <div class="mb-1">
  <label for="exampleFormControlTextarea1" class="form-label">Any Query</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" placeholder='Enter your Query'></textarea>
</div>
 
     <button className='btn u-u btn-lg text-white w-w mt-4 mb-3'><b>SUBMIT</b> </button>
        </div>


        </div>
      </div>
      </div>
    
  )
}

export default Franchies
