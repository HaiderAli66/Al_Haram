import React from 'react'

function Location() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-md-4">
            <div className="side-bar text-white py-2 " style={{background:"#02A3C1"}}>
        <div className="heading">
            <h4>Around This Resturant</h4>
        </div>
        </div>
        <div className="list mt-4 text-start">
        <table class="table">
  
 
  <>
    <tr>
      
      <td><li>Madinah</li></td>
   
      <td className='text-end'>5km</td>
      <td></td>
    </tr>
    <tr>
    <td><li>Haram Shareef</li></td>
      
      <td className='text-end'>10km</td>
    </tr>
    <tr>
    <td><li>Masjid E Nabwi</li></td>
      
      <td className='text-end'>6km</td>
    </tr>
    <tr>
    <td><li>Makkah Airport</li></td>
      
      <td className='text-end'>9km</td>
    </tr>
  </>
</table>
        </div>
            </div>
            <div className="col-12 col-md-8">
                <img src="map.png" alt="" className="d-block w-100" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Location
