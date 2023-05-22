import React from 'react'
import Divider from '@mui/material/Divider';
function Button() {
    return (
        <div className='container mt-5 mb-3'>
            <div class="card ">
                <div class="card-header  ucard p-3 text-center fs-3 ">
                    <h3 className='text-white'>Package Snapshot</h3>
                </div>
                <div className="row text-md-center ps-md-0 ps-3 py-2 mt-md-2     p-md-4 p-0 pt-md-0 pt-2 text-start">
                    <div className="col-lg-3 col-sm-6 depart-border border-dark">Departure city<br/>
                        Multiple cities</div>
                    <div className="col-lg-3 col-sm-6 depart-border border-dark">Departure Date<br/>
                        21 oct 2022</div>
                    <div className="col-lg-3 col-sm-6  depart-border border-dark">Arrival date<br/>
                        21 oct 2022</div>
                    <div className="col-lg-3 text-center pt-2 col-sm-6">Remaining pax<br/>
                        40 members</div>
                </div>

            </div>
        </div>
    )
}

export default Button
