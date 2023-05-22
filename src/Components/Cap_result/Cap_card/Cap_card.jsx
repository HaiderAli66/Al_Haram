import React from 'react'
import Button from '@mui/material/Button'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'

function Cap_card(props) {
  return (
    <div>
   
        
        
        <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
    
    <Link to="/Explore_resturant_detail">

      <img src="ALKhobar.png" className="img-fluid rounded-start" alt="..."/>
    </Link>

    </div>
    <div className="col-md-8">
        <div className="card-body text-md-start ms-md-2 ">
        <h5 className="card-title ">{props.title} <span className='ms-2'><Rating name="read-only" defaultValue={4} precision={4} readOnly /></span> </h5> 
        <div className="row ">
            <div className="col-12 col-md-8 ">
            <p className="card-text mb-1">Opening Time       <span className="ms-md-5">09:00am</span>    </p>
            <p className="card-text">Opening Time          <span className="ms-md-5">09:00am</span> </p>

            </div>
            <div className="col-12 col-md-4 my-2">
            <Button variant="contained" fullWidth  sx={{background:"#02A3C1",padding:"8px"}}>
            View Detail
          </Button>
            </div>
        </div>
        <div className="col-12 col-md-8 mt-md-5"><hr /></div>
      
        <p className="card-text mb-1"> <span className='me-2'><img src="Map Marker.png" alt="" /></span>
{props.location}</p>
      </div>
      
    </div>
  </div>
</div>

      
      
    </div>
  )
}

export default Cap_card