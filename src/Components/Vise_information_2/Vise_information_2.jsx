import React from 'react';
import Vise_header from '../Vise_header/Vise_header'


function Vise_information_2() {
  return (
    <div className=''>
        <>
    <Vise_header />
    
    <div className='hajj_vise_information'>

          <div className="container">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingthree">
                            <button className="accordion-button info_heading" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="true  " aria-controls="collapseOne">
                            New Delhi
                            </button>
                        </h2>
                        <div id="collapsethree" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                <li className='text-start vise_info_para'>Name: Royal Consulate General of Saudi Arabia</li>
                                        <li className='text-start vise_info_para'> Address: Maker Tower 'F', 4th Floor, Cuffe Parade</li>
                                        <li className='text-start vise_info_para'> City: Mumbai - 400 005</li>
                                        <li className='text-start vise_info_para'> Country: India</li>
                                        <li className='text-start vise_info_para'> Telephone: 022- 2215 6001, 6002, 6003, 6004</li>
                                        <li className='text-start vise_info_para'> Fax: 022- 2215 6006 - 6009</li>
                                        <li className='text-start vise_info_para'> Timings: Monday to Friday</li>
                                        <li className='text-start vise_info_para'> Office Timings: 09:00 to 16:00 hrs</li>
                                </ul>
                              
                            </div>
                        </div>
                    </div>
                  
 
                </div>
            </div>
            <div className="container mt-4">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingthree">
                            <button className="accordion-button info_heading" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour " aria-expanded="true  " aria-controls="collapseOne">
                            Mumbai
                            </button>
                        </h2>
                        <div id="collapsefour" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                <li className='text-start vise_info_para'>Name: Royal Consulate General of Saudi Arabia</li>
                                        <li className='text-start vise_info_para'> Address: Maker Tower 'F', 4th Floor, Cuffe Parade</li>
                                        <li className='text-start vise_info_para'> City: Mumbai - 400 005</li>
                                        <li className='text-start vise_info_para'> Country: India</li>
                                        <li className='text-start vise_info_para'> Telephone: 022- 2215 6001, 6002, 6003, 6004</li>
                                        <li className='text-start vise_info_para'> Fax: 022- 2215 6006 - 6009</li>
                                        <li className='text-start vise_info_para'> Timings: Monday to Friday</li>
                                        <li className='text-start vise_info_para'> Office Timings: 09:00 to 16:00 hrs</li>
                                </ul>
                              
                            </div>
                        </div>
                    </div>
                  
 
                </div>
            </div>
      
    </div>
    </>
    </div>
  )
}

export default Vise_information_2