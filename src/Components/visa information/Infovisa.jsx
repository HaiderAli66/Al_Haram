import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'
import "./Infovisa.css"
import { BsSearch } from "react-icons/bs";

function Infovisa() {
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
          < div className='text-center pt-4 pb-4 px-3' >
            Budget-Friendly & Luxury Package For A Convenient Hajj & Umrah
            Journey to The Holly Makkah & Madina For Muslim Brothers & Sisters
          </div>
        </Grid>
      </Grid> */}

  

        <div className="container-fluid  mb-5 mt-3">
            <div className="row vif pb-3 pt-3">
            <div className='huinfo text-white'>
                <h2>Hajj & Umrah Visa Information From Diffrent Countries</h2>
                <p>Checkout The Visa-Related Requirements And Process For Any Country You Are Planning <br />
                    To Visit. Select The Country Name And Get All The Details</p>
            </div>
            <div className="col-lg-12 mt-3">
                <div>
                    <form className="example d-flex exm_color" action="/action_page.php">
                    <select className="form-select form-select-lg ops" >
                        <option selected className='text-muted'>Select Country</option>
                        <option value="1">India</option>
                        <option value="2">Bangladesh</option>
                        <option value="3">Malaysia</option>
                   </select>
                    <button type="submit" className='srch_clk'><BsSearch className="ico"/><span className='ms-2 ser_ty'><b>Search</b></span></button>
                    </form>
                </div>
            </div>
            </div>
<div className="container">




<div className="row mt-5">
                <div className='mb-5'>
                    <h2>Most Popular Traveler Country Around The Globe To Hajj & Umrah</h2>
                </div>
                <div className="col-lg-4">
                    <div>
                        <img src="./images/visa_info_images/pak_pic.png" alt="" className='w-100' />
                        <div className='pt-2 pb-2 fig_cap'><p className='mb-0'><b>PAKISTAN</b></p></div>
                    </div>
                </div>
                <div className="col-lg-4 for">
                <div>
                        <img src="./images/visa_info_images/ind_pic.png" alt="" className='w-100' />
                        <div className='pt-2 pb-2 fig_cap'><p className='mb-0'><b>INDIA</b></p></div>
                    </div>
                </div>
                <div className="col-lg-4 for">
                <div>
                        <img src="./images/visa_info_images/bangla_pic.png" alt="" className='w-100' />
                        <div className='pt-2 pb-2 fig_cap'><p className='mb-0'><b>BANGLADESH</b></p></div>
                    </div>
                </div>
            </div>




</div>
                <div className="container">

            <div className="row mt-3">
                <div className="col-lg-4">
                    <div>
                        <img src="./images/visa_info_images/indo_pic.png" alt="" className='w-100' />
                        <div className='pt-2 pb-2 fig_cap'><p className='mb-0'><b>INDONESIA</b></p></div>
                    </div>
                </div>
                <div className="col-lg-4 for">
                <div>
                        <img src="./images/visa_info_images/malaysia_pic.png" alt="" className='w-100' />
                        <div className='pt-2 pb-2 fig_cap'><p className='mb-0'><b>MALAYSIA</b></p></div>
                    </div>
                </div>
                <div className="col-lg-4 for">
                <div>
                        <img src="./images/visa_info_images/egypt_pic.png" alt="" className='w-100' />
                        <div className='pt-2 pb-2 fig_cap'><p className='mb-0'><b>EGYPT</b></p></div>
                    </div>
                </div>
            </div>
            </div>

        </div>

    </div>
  )
}

export default Infovisa
