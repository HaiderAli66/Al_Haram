import React from 'react'
import Card_read_blogs from '../Card_read_blogs/Card_read_blogs'
import "./Read_our_blogs.css"
function Read_our_blogs() {
  return (
    <div>
        <div className=' heading py-2 text-white fs-5 mb-5 '>
        <h3>Read Our Blogs</h3> 
        </div>
      <div className="container">
        <div className="row m-0">
            <div className="col-lg-8">
                <Card_read_blogs/>
                <Card_read_blogs/>
                <Card_read_blogs/>
                <Card_read_blogs/>
                <Card_read_blogs/>
                <Card_read_blogs/>
                <Card_read_blogs/>
                <Card_read_blogs/>
                <Card_read_blogs/>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3 mt-5">
            <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control p-3" placeholder="Search"/>
  
    <div className="row text-start ps-3 pb-2">
        <p className='fs-2 land-cata'><b>Categories</b> </p>
        <div className="col-6  hotel-land">
            <p>Hotel</p>
            <p>Car</p>
            <p>Umrah</p>
            <p>Hajj</p>
        </div>
        <div className="col-6 text-end pe-4 hotel-land">
            <p>92</p>
            <p>85</p>
            <p>23</p>
            <p>98</p>
        </div>

    </div>
    <hr/>

    <div className="row">
    <p className='fs-2 text-start ps-4 land-cata'><b>Recent Post</b> </p>
    <div>
      <div className=" my-5 ">
        <div className="row m-0">
            <div className="col-4  ">
                <img src="depositphotos_311884494-stock-photo-masjid-al-haram-muslims-holiest 2 (1).png" className='w-75' alt="" />
            </div>
            <div className="col-8  text-start">
              

<div className="date-lans  mt-md-0 ">
               <b>11 Oct 2022</b> 
                </div>
<div className="C-2lans mt-1">
    Top 13 must-see natural wonders in jeddah
</div>
<div className="C-3lans mt-1">
Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida Diams 
phasellus vestibulum lorem sed risus ultricies. Magna sit haza diams
gravida quis blandit. Arcu cursus vitae congue mauris. Nun.

</div>

            </div>
        </div>
      </div>
    </div>
    </div>

    <div className="row">
    <div>
      <div className=" my-5 ">
        <div className="row m-0">
            <div className="col-4  ">
                <img src="depositphotos_311884494-stock-photo-masjid-al-haram-muslims-holiest 2 (1).png" className='w-75' alt="" />
            </div>
            <div className="col-8  text-start">
              

<div className="date-lans  mt-md-0 ">
               <b>11 Oct 2022</b> 
                </div>
<div className="C-2lans mt-1">
    Top 13 must-see natural wonders in jeddah
</div>
<div className="C-3lans mt-1">
Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida Diams 
phasellus vestibulum lorem sed risus ultricies. Magna sit haza diams
gravida quis blandit. Arcu cursus vitae congue mauris. Nun.

</div>

            </div>
        </div>
      </div>
    </div>
    </div>

    <div className="row">
    <div>
      <div className=" my-5 ">
        <div className="row m-0">
            <div className="col-4  ">
                <img src="depositphotos_311884494-stock-photo-masjid-al-haram-muslims-holiest 2 (1).png" className='w-75' alt="" />
            </div>
            <div className="col-8  text-start">
              

<div className="date-lans  mt-md-0 ">
               <b>11 Oct 2022</b> 
                </div>
<div className="C-2lans mt-1">
    Top 13 must-see natural wonders in jeddah
</div>
<div className="C-3lans mt-1">
Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida Diams 
phasellus vestibulum lorem sed risus ultricies. Magna sit haza diams
gravida quis blandit. Arcu cursus vitae congue mauris. Nun.

</div>

            </div>
        </div>
      </div>
    </div>
    </div>
<hr/>
<div className="row ">
<p className='fs-1 text-start ps-5 land-cata'><b>Tab</b> </p>
<div className=" d-flex justify-content-between mt-5 pb-5">
    <button className='btn btond ucards'>Hostel</button>
    <button className='btn btond ucards'>Cab</button>
    <button className='btn btond ucards'>Bus</button>
</div></div>
  </div>
  
            </div>
        </div>
      </div>
    </div>
  )
}

export default Read_our_blogs
