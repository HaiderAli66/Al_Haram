import React from 'react'
import CallIcon from '@mui/icons-material/Call';
function Place_detail(props) {
  return (
    <div>
      <div className="container my-2">
        <div className="row">
            <div className="col-12 my-4">
                <div className="place-title text-start">
                    <h4 style={{color:"#757575"}} className='explore_res_del'>{props.title}</h4>
                    <p className="card-text mb-1"> <span className='me-2'><img src="Map Marker.png" alt="" /></span>
{props.location}</p>
                </div>
            </div>
            <div className="col-12 ">
                <div className="row">
                    <div className="col-12 col-md-8 my-2">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={props.imgsrc} className="d-block w-100" alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                        
                    </div>
                    <div className="col-12 col-md-4 text-white my-2" style={{background:"#02A3C1"}}>
                        <div className="mobile-number my-4">
                            <h4>
                            <CallIcon className='me-2'/>
                            +91 1234 567 8910
                            </h4>
                        </div>
                        <div className="opining-closing mb-4">
                        <ul className='list-unstyled'>
                            <li>
                            <h4>Opening Hours <span className='ms-4'>09:00 AM</span></h4>

                            </li>
                            <li>

                            <h4>Closing Hours <span className='ms-4'>05:00 PM</span></h4>
                            </li>
                        </ul>
                         
                        </div>
                        <div className="direction">
                            <h4>Direction</h4>
                            
                            <img src="./map.png" className="d-block w-100" alt="" />
                      
                            <p className='pt-2'>Opposite Raheja Garden, 
Mohan Koppikar Road, Teen Hath
Naka, Wagle Estate, Thane West,Thane</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Place_detail
