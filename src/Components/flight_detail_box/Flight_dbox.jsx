import React from 'react'
import "./Flight_dbox.css"

function Flight_dbox() {
  return (
    <div>
      <div className="container">
        <h2>Flight Details</h2>
        <div className="row shadow my-4 py-3">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6 pastow">
                        <><h5 className='text-start mb-2'>Arrival Airport</h5></>
                        <select className="form-select form-select-md ror" >
                            <option selected className='text-muted'></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                       </select>
                    </div>

                    <div className='col-lg-3'>
                        <h5 className='text-start mb-2'>Flight Number</h5>
                        <div>
                        <input type="text" class="form-control ror" id="exampleInputPassword1" />
                        </div>
                    </div>

                    <div className='col-lg-3 pas'>
                    <h5 className='text-start mb-2'>Arrival Date & Time</h5>
                        <div>
                        <input type="text" class="form-control ror" id="exampleInputPassword1" />
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                <div className="col-lg-6 pastow">
                        <><h5 className='text-start mb-2'>Return Airport</h5></>
                        <select className="form-select form-select-md ror" >
                            <option selected className='text-muted'></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                       </select>
                    </div>

                    <div className='col-lg-3'>
                        <h5 className='text-start mb-2'>Flight Number</h5>
                        <div>
                        <input type="text" class="form-control ror" id="exampleInputPassword1" />
                        </div>
                    </div>

                    <div className='col-lg-3 pas'>
                    <h5 className='text-start mb-2'>Arrival Date & Time</h5>
                        <div>
                        <input type="text" class="form-control ror" id="exampleInputPassword1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Flight_dbox
