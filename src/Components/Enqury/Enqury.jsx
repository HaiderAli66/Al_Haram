import React from 'react'

function Enqury() {
  return (
    <div>
       
      <div className="container ucard">
      
<div className="row pt-3 mt-5">

    <div className="col-lg-6 col-sm-12">
        <h6 className='text-white'>Name</h6>
        <input type="text" className='w-100 p-2 ' placeholder='Enter Name' />
    </div>
    <div className="col-lg-6 col-sm-12">
        <h6 className='text-white'>Phone Number</h6>
        <input type="number" className='w-100 p-2'  placeholder='Enter Number'/>
    </div>
</div>
<div className="row  mt-5">

    <div className="col-lg-6 col-sm-12">
        <h6 className='text-white'>Email</h6>
        <input type="email" className='w-100 p-2' placeholder='Enter Email'/>
    </div>
    <div className="col-lg-6 col-sm-12">
        <h6 className='text-white'>Package Name</h6>
        <input type="text" className='w-100 p-2' placeholder='Enter package'/>
    </div>
</div>
<div className="row  mt-5">

    <div className="col-lg-6 col-sm-12">
        <h6 className='text-white'>Departure City</h6>
        <input type="text" className='w-100 p-2' placeholder='Enter City' />
    </div>
    <div className="col-lg-6 col-sm-12">
        <h6 className='text-white'>Travel Date</h6>
        <input type="text" className='w-100 p-2' placeholder='Enter Data' />
    </div>
</div>
<div className="row  mt-5">

    <div className="col-lg-6 col-sm-12">
        <h6 className='text-white'>No of person</h6>
        <input type="password" className='w-100 p-2' placeholder='Enter Password'/>
    </div>
    <div className="col-lg-6 col-sm-12">
        <h6 className='text-white' >Confirm password</h6>
        <input type="password" className='w-100 p-2'placeholder='Enter Confirm Password' />
    </div>
</div>
<div className="send mt-5 text-center ">
<button className='btn btn-outline-light  btn-lg mb-5 '><b>Submit</b></button>
</div>
      </div>
    </div>
  )
}

export default Enqury
