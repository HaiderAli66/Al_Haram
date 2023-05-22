import React from 'react'
import {Link} from "react-router-dom"

function Card_read_blogs() {
  return (
    <div>
      <div className=" my-5 ">
        <div className="row m-0">
          <Link to ="/more_blogs" className='read_our_blog_ig'>
            <div className="col-lg-4  col-sm-12 ">
                <img src="depositphotos_311884494-stock-photo-masjid-al-haram-muslims-holiest 2 (1).png" className='w-100 ' alt="" />
            </div>
            </Link>
            <div className="col-lg-8 col-sm-12  text-start">
              

<div className="date-lan mt-3 mt-md-0 ">
               <b>11 Oct 2022</b> 
                </div>
<div className="C-2lan mt-3">
    Top 13 must-see natural wonders in jeddah
</div>
<div className="C-3lan mt-3">
Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida Diams 
phasellus vestibulum lorem sed risus ultricies. Magna sit haza diams
gravida quis blandit. Arcu cursus vitae congue mauris. Nun.

</div>
<Link to="/more_blogs">
<div className="btn-lan mt-4">
    <button className='btn mcards text-white float-center float-md-end px-5 '><b>Read More</b></button>
</div>
</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card_read_blogs
