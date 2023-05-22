import React from 'react'
import Button from '@mui/material/Button'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'

function Hotelcard(props) {
  return (
    <div>
   
        
        
        <div className="card mb-3 shadow" >
  <div className="row g-0">
    <div className="col-md-4">
    
    <Link to="/Explore_resturant_detail">

      <img src={props.imgsrc} className="img-fluid rounded-start max-height  w-100" alt="..."/>
    </Link>

    </div>
    <div className="col-md-8">
        <div className="card-body text-md-start ms-md-2 text-start pb-0 ">
        <h3 className="card-title mac_hotel_title ">{props.title} </h3> 
        <div className="row  mac_c0l_design">
            <div className="col-12 col-md-8  ">
            <p className="card-text mb-1">Opening Time<span className="ms-2">09:00am</span>    </p>
            <p className="card-text">Closing Time<span className="ms-2">11:00pm</span> </p>

            </div>
            <div className="col-12 col-md-4 my-2">
            <Link to="/Hotal_second_page" className='text-decoration-none'>
            <Button variant="contained" fullWidth  sx={{background:"#02A3C1",padding:"8px"}}>
            View Detail
          </Button>
          </Link>
            </div>
        </div>
        <div className="col-12 col-md-8 my-3"><hr /></div>
        <p className="card-text mb-1 mt-5" style={{fontSize:"15px"}}> <span className='me-2'><img src="Map Marker.png" alt="" /></span>
{props.location}</p>
      </div>
      
    </div>
  </div>
</div>

      
      
    </div>
  )
}

export default Hotelcard
