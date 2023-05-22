import React from 'react'
import "./Review2.css"
// import StarBorderIcon from "@mui/icons-material/StarBorder";
import Rating from "@mui/material/Rating";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
export default function Review2() {
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
  <button type="submit" className="btn submitly-park text-white  mb-3 w-100 fs-5"> <b>Submit</b></button>
</div>

</div>

    </div>
    <div className="container card my-3">
                <div className="row">
                    <div className="col-lg-2 pt-3 col-sm-12">

                        <h6> <b>John smith</b> </h6>
                        <p>11 Aug 2020</p>
                    </div>

                    <div className="col-lg-8 pt-3 text-start">
                        <Rating name="" className="fs-3" defaultValue={4} precision={1} />

                        <p className='text-start'>Michael & his team have been helping us with our eqiupment finance for
                            the past 5 years - I think that says a quite a lot.. Michael is always ready
                            to go the extra mile, always available, always helpfull that goes the same
                            for his team that work with him - definatley our first phone call</p>

                    </div>



                </div>
                <div className="row">
                    <div className="col-2 d-none d-md-block"></div>
                    <div className="col-lg-7 col-sm-12 text-start styles pb-3">

                        <div className=" pb-1"> <ThumbUpOffAltIcon /> Like </div>
                        <div className="pb-1 "> <ThumbDownOffAltIcon /> Dis-Like </div>
                        <div className="pb-1"> <ThumbUpOffAltIcon /> Report </div>
                        <div className=" pb-1"> <CommentIcon /> Comment </div>
                        <div className="pb-1"> <ShareIcon /> Share Now </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 d-flex pb-3">


                        <div className='px-2'><FacebookIcon /> </div>
                        <div className='px-2'><TwitterIcon /> </div>
                        <div className='px-2' > <GoogleIcon /> </div>
                        <div className='px-2'><InstagramIcon /> </div>


                    </div>



                </div>

            </div>

            <div className="container card my-3">
                <div className="row">
                    <div className="col-lg-2 pt-3 col-sm-12">

                        <h6> <b>John smith</b> </h6>
                        <p>11 Aug 2020</p>
                    </div>

                    <div className="col-lg-8 pt-3 text-start">
                        <Rating name="" className="fs-3" defaultValue={4} precision={1} />

                        <p className='text-start'>Michael & his team have been helping us with our eqiupment finance for
                            the past 5 years - I think that says a quite a lot.. Michael is always ready
                            to go the extra mile, always available, always helpfull that goes the same
                            for his team that work with him - definatley our first phone call</p>

                    </div>



                </div>
                <div className="row">
                    <div className="col-2 d-none d-md-block"></div>
                    <div className="col-lg-7 col-sm-12 text-start styles pb-3">

                        <div className=" pb-1"> <ThumbUpOffAltIcon /> Like </div>
                        <div className="pb-1 "> <ThumbDownOffAltIcon /> Dis-Like </div>
                        <div className="pb-1"> <ThumbUpOffAltIcon /> Report </div>
                        <div className=" pb-1"> <CommentIcon /> Comment </div>
                        <div className="pb-1"> <ShareIcon /> Share Now </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 d-flex pb-3">


                        <div className='px-2'><FacebookIcon /> </div>
                        <div className='px-2'><TwitterIcon /> </div>
                        <div className='px-2' > <GoogleIcon /> </div>
                        <div className='px-2'><InstagramIcon /> </div>


                    </div>



                </div>

            </div>
            <div className="container card my-3">
                <div className="row">
                    <div className="col-lg-2 pt-3 col-sm-12">

                        <h6> <b>John smith</b> </h6>
                        <p>11 Aug 2020</p>
                    </div>

                    <div className="col-lg-8 pt-3 text-start">
                        <Rating name="" className="fs-3" defaultValue={4} precision={1} />

                        <p className='text-start'>Michael & his team have been helping us with our eqiupment finance for
                            the past 5 years - I think that says a quite a lot.. Michael is always ready
                            to go the extra mile, always available, always helpfull that goes the same
                            for his team that work with him - definatley our first phone call</p>

                    </div>



                </div>
                <div className="row">
                    <div className="col-2 d-none d-md-block"></div>
                    <div className="col-lg-7 col-sm-12 text-start styles pb-3">

                        <div className=" pb-1"> <ThumbUpOffAltIcon /> Like </div>
                        <div className="pb-1 "> <ThumbDownOffAltIcon /> Dis-Like </div>
                        <div className="pb-1"> <ThumbUpOffAltIcon /> Report </div>
                        <div className=" pb-1"> <CommentIcon /> Comment </div>
                        <div className="pb-1"> <ShareIcon /> Share Now </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 d-flex pb-3">


                        <div className='px-2'><FacebookIcon /> </div>
                        <div className='px-2'><TwitterIcon /> </div>
                        <div className='px-2' > <GoogleIcon /> </div>
                        <div className='px-2'><InstagramIcon /> </div>


                    </div>



                </div>

            </div>


        </div>
  
  )
}
