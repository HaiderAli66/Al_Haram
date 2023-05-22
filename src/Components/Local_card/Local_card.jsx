import React from 'react'
// import "./Park_card.css"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { TbMap2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import "./Local_card.css"
function Local_card() {
    const [value, setValue] = React.useState(2);
  return (
    
    <div>
      <div className="c mt-5 ">
        <div className="card m-0 shado-card">
        <div className="row ">
            <div className="col-lg-4">
                <img src="gbb.png" className='w-100 h-100 max-height  '  alt="" />
            </div>
            <div className="col-lg-8">
<div className="row align-items-center ">
    <div className="col-lg-5 mt-2 mt-md-3">
<div className="fs-5 park-al text-start ms-2 text-uppercase"><h5 className='mac_hotel_title   '> gabel street souq </h5></div>
    </div>
    <div className="col-lg-7  text-center text-md-start ">
    <Box
      sx={{
        '& > legend': { mt: 2, },
      }}
    >
    
<Rating
className='fs-6 mac_rating'
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
</Box>
    </div>
</div>

<div className="row mt-4 ">
    <div className="col-lg-8 col-sm-12 ">
        <div className="row  boldify">
        <div className="col-5 text-start ms-2">Opening Time</div>
        <div className="col-3">
            <span className='mb_fs_ress'>   09:00Am
            </span>
        </div>
        </div>
        <div className="row mt-3 boldify">
        <div className="col-5 text-start ms-2">Closing Time   </div>
        <div className="col-3">
   <span className='mb_fs_ress'>     11:00Pm   
   </span>
        </div>
        <hr className='hr-park mt-4 mb-2'/>
        </div>
        
    </div>
    
    <div className="col-lg-4 col-sm-12">
      <Link to="/View_details_market">  <button className="btn btn-md text-white boldify float-start naya-color float-md-end bg_all_btn ms-2 ms-md-0 me-5 mt-3">View Detail</button></Link>
    </div>
</div>

<div className="row boldify ">
 
    <div className="col-lg-12 col-sm-12 ps-4 mb-4  text-start mt-4 f5">
        <TbMap2 className='me-2 fs-4'/> 
 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A
    </div>
</div> 
            </div>



        </div>



        </div>
      </div>
    </div>
  )
}

export default Local_card

