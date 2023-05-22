import React from 'react'
import Button from '@mui/material/Button'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'
function Malls_card(props) {
  return (
    <div className='mt-5 mt-md-0'>
   
        
        
    <div className="card mb-3 shadow" >
<div className="row g-0">
<div className="col-md-4">

<Link to="/Explore_Malls_d">

  <img src={props.img} className="img-fluid rounded-start max-height w-100 " alt="..."/>
</Link>

</div>
<div className="col-md-8">
    <div className="card-body text-md-start ms-md-2 pb-0 text-start">
    <h3 className="card-title d-flex  align-items-center for_fot">{props.title} <span className='ms-2'><Rating name="read-only" style={{marginLeft:'10px'}} defaultValue={5} precision={5} readOnly /></span> </h3> 
    <div className="row mt-3 mac_row_mar ">
        <div className="col-12 col-md-8 ">
        <p className="card-text mb-1   Opening Time for_ftow">Opening Time       <span className="ms-md-5">09:00am</span>    </p>
        <p className="card-text  Opening Time for_fthre ">Opening Time          <span className="ms-md-5">11:00pm</span> </p>

        </div>
        <div className="col-12 col-md-4 my-2">
        <Link to="/Hotal_second_page" className='text-decoration-none'>
        <Button variant="contained" fullWidth  sx={{background:"#02A3C1",padding:"8px"}}>
        View Detail
      </Button>
      </Link>
        </div>
    </div>
    <div className="col-12 col-md-8  "><hr /></div>
    <p className="card-text mb-1 mt-4" style={{fontSize:"15px",marginTop:'15px'}}> <span className='me-2'><img src="Map Marker.png" alt="" /></span>
{props.location}</p>
  </div>
  
</div>
</div>
</div>

  
  
</div>
  )
}

export default Malls_card
