import React from 'react'

function Parks_card() {
  return (
    <div>
             
    <div className="card mb-3 shadow" >
<div className="row g-0">
<div className="col-md-3">

<Link to="/Explore_Malls_d">

  <img src={props.img} className="img-fluid rounded-start w-100" alt="..."/>
</Link>

</div>
<div className="col-md-8">
    <div className="card-body text-md-start ms-md-2 pb-0 text-start">
    <h5 className="card-title ">{props.title} <span className='ms-2'><Rating name="read-only" defaultValue={5} precision={5} readOnly /></span> </h5> 
    <div className="row ">
        <div className="col-12 col-md-8 ">
        <p className="card-text mb-1 Opening Time ">Opening Time       <span className="ms-md-5">09:00am</span>    </p>
        <p className="card-text Opening Time ">Opening Time          <span className="ms-md-5">11:00pm</span> </p>

        </div>
        <div className="col-12 col-md-4 my-2">
        <Link to="/Explore_resturant_detail" className='text-decoration-none'>
        <Button variant="contained" fullWidth  sx={{background:"#02A3C1",padding:"8px"}}>
        View Detail
      </Button>
      </Link>
        </div>
    </div>
    <div className="col-12 col-md-8 "><hr /></div>
    <p className="card-text mb-1" style={{fontSize:"15px"}}> <span className='me-2'><img src="Map Marker.png" alt="" /></span>
{props.location}</p>
  </div>
  
</div>
</div>
</div>

    </div>
  )
}

export default Parks_card
