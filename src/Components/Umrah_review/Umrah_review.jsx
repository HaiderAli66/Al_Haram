import React from 'react'
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Rating from "@mui/material/Rating";
export default function Umrah_review() {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col text-start mt-3">
          <h2>Write Your Rating Here</h2>
          <p>
            If You Are Going To Use A Passage Of Lorem Ipsum, You Need To Be
            Sure There Isn't Anything <br />  Embarrassing Hidden In The Middle Of
            Text
          </p>
          <div>
            <Rating name="" className="fs-1" defaultValue={0} precision={1} />
          </div>
        </div>
      </div>


<div className="row">
<div className="col-12 col-md-6 my-2 my-md-4">
<input type="text" className="w-100 p-3" placeholder="Enter Name" />
</div>
<div className="col-12 col-md-6 my-2 my-md-4">
<input type="number" className="w-100 p-3 " placeholder="Enter Mobile" />
</div>
<div className="col-12 col-md-6 my-2 my-md-4">
<input type="text" className="w-100 p-3" placeholder="Enter Email Id" />

</div>
<div className="col-12 col-md-6 my-2 my-md-4 ">
<input type="text" className="w-100 p-3 " placeholder="Enter Your City" />
</div>

<div className="col-12 my-2 ">
<div className="mb-3">
<textarea className="form-control" placeholder="Write Your Massage" id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
</div>
</div>

<div className="row justify-content-around">

<div className="col-12 col-md-4">
  <button type="submit" className="btn ucard text-white  mb-3 w-100 fs-5"> <b>Submit</b></button>
</div>

</div>

    </div>
  </div>
  )
}
