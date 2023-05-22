import React from 'react'
import Rating from "@mui/material/Rating";
function User_Reviews() {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col text-start">
          <h4 style={{color:'#2D2D2D',}} className='user_eveies_h4'>Write Your Rating Here</h4>
          <p style={{color:'#2D2D2D', textTransform:'capitalize'}}>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything embarrassing hidden in the middle of
            text
          </p>
          <div>
            <Rating name="" className="fs-1" defaultValue={0} precision={1} />
          </div>
        </div>
      </div>
<div className="row">
<div className="col-12 col-md-6 my-2 my-md-4">
<input type="text" className="w-100 p-3 border-0" style={{background:"#EFEFEF"}} placeholder="Enter Name" />
</div>
<div className="col-12 col-md-6 my-2 my-md-4">
<input type="number" className="w-100 p-3 border-0" style={{background:"#EFEFEF"}} placeholder="Enter Mobile" />
</div>
<div className="col-12 col-md-6 my-2 my-md-4">
<input type="email" className="w-100 p-3 border-0" style={{background:"#EFEFEF"}} placeholder="Enter Email Id" />

</div>
<div className="col-12 col-md-6 my-2 my-md-4 ">
<input type="text" className="w-100 p-3 border-0 " style={{background:"#EFEFEF"}} placeholder="Enter Your City Name" />
</div>

<div className="col-12 my-2 ">
<div className="mb-3">
<textarea className="form-control border-0" style={{background:"#EFEFEF"}} placeholder="Write Your Massage" id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
</div>
</div>

<div className="row justify-content-around">

<div className="col-12 col-md-4">
  <button type="submit" className="btn btn-primary text-white mb-3 w-100 py-3 fs-4 hover_change">Submit</button>
</div>

</div>

    </div>
  </div>
  )
}

export default User_Reviews



