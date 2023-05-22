import React from "react";
import "./Cab.css"
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'

function Cab() {
  return (
    <div>
       <AppBar position="static" sx={{ background: "#02A3C1" }}>
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
      </Grid>

    
      <div className="container bg-info text-white pt-3 ">
        <h2>Book Outstation And Hourly Cab Online</h2>
         <div className="row my-3">

<div className="col-2"></div>

          <div className="col-md-8 d-flex justify-content-between mt-2  border">
            <div className="">
               {" "}
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
                <label for="javascript">Outstation one way</label>
            </div>
            <div className="">
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
                <label for="javascript">Road Trip way</label>
            </div>

            <div className="">
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
                <label for="javascript"> Airport Transfers</label>
            </div>
            <div className="">
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
                <label for="javascript">Hourly Rental</label>
            </div>
          </div>
          <div className="col-2"></div>
        </div> 
        <div className="row p-2">
            <div className="col-md-2 col-sm-12 text-dark bg-white py-1 border">
               <div className="d-flex justify-content-between">
               <p className="font">PICK-UP LOCATION</p>
             
             <p className="font-icon"> <PlaceIcon/></p>
             
               </div>
                <div className="text-start ps-2"> 
                    MUMBI
                </div>

               
            </div>
            <div className="col-md-2 col-sm-12 py-1   bg-white text-dark border">
            <div className="d-flex justify-content-between">
               <p className="font">DROP-UP LOCATION</p>
             <PlaceIcon/>
               </div>  
               <div className="text-start ps-2"> 
                    DELHI
                </div>
            </div>
            <div className="col-md-2 col-sm-12 bg-white text-dark border">
                <div className="d-flex justify-content-between py-1 ">

               <p className="font"> PICK-UP DATE & TIME</p> 
               
               <p className="font-icon">
                <CalendarMonthIcon/>

               </p>
               
                </div>
                <div className="d-flex justify-content-between"> 
                    <p>12/5/22 </p> <p> 04:30PM</p> 
                </div>
            </div>
            <div className="col-md-2 col-sm-12 p-3 text-dark bg-white  pt-4 border">
            
                ADD RETURN
            
        </div>
            <div className="col-md-2 text-dark bg-white py-1 border">
                PASSENGER <EmojiPeopleIcon/>
                <div>
                    1 ADULT
                </div>
            </div>
          
            <div className="col-md-2 p-3 text-dark bg-white py-4  border">
                
                     <SearchIcon/> SEARCH
                
            </div>
        </div>
      
      </div>
    </div>
  );
}

export default Cab;
