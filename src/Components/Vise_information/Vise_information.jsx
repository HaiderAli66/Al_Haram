import React from 'react'
import Vise_header from '../Vise_header/Vise_header'
import "./Vise_information.css"

function Vise_information() {
  return (
    <>
    <Vise_header />
    
    <div className='hajj_vise_information'>

          <div className="container">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                    <h2 className="accordion-header" id="headingthree">
                            <button className="accordion-button info_heading" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="true  " aria-controls="collapseOne">
                            Hajj vise Information
                            </button>
                        </h2>
                        <div id="collapsethree" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                <li className='text-start vise_info_para'>The Applicant must have an original passport with a validity of minimum 6 months from the expiry of the visa</li>
                                        <li className='text-start vise_info_para'>Two color photographs clicked against a white background</li>
                                        <li className='text-start vise_info_para'>Confirm onward/ return flight ticket</li>
                                        <li className='text-start vise_info_para'>Traveler's cheques, in original, at least showing an amount of USD 500</li>
                                        <li className='text-start vise_info_para'>A draft for SR 400 in the name of the Applicant, payable at Jeddah for personal expenses, along with a draft for 
SR 789 as 'Moallim Fee' in favor of United Agencies Jeddah is obligatory. This fee differs every year.</li>
                                        <li className='text-start vise_info_para'>Vaccination Certificate of ailments like Meningitis and Cholera</li>
                                        <li className='text-start vise_info_para'>Validity of the Visa varies on the period of Haj. Normally the stay allowed is up to the 10th day of the Moharram month</li>
                                        <li className='text-start vise_info_para'>Visa is Gratis</li>
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
                            Umrah vise Information
                            </button>
                        </h2>
                        <div id="collapsefour" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <ul>
                                <li className='text-start vise_info_para'>The Applicant must have an original passport with a validity of minimum 6 months from the expiry of the visa</li>
                                        <li className='text-start vise_info_para'>Two color photographs clicked against a white background</li>
                                        <li className='text-start vise_info_para'>Confirm onward/ return flight ticket</li>
                                        <li className='text-start vise_info_para'>Traveler's cheques, in original, at least showing an amount of USD 500</li>
                                        <li className='text-start vise_info_para'>A draft for SR 400 in the name of the Applicant, payable at Jeddah for personal expenses, along with a draft for 
SR 789 as 'Moallim Fee' in favor of United Agencies Jeddah is obligatory. This fee differs every year.</li>
                                        <li className='text-start vise_info_para'>Vaccination Certificate of ailments like Meningitis and Cholera</li>
                                        <li className='text-start vise_info_para'>Validity of the Visa varies on the period of Umrah. </li>
                                        <li className='text-start vise_info_para'>Visa is Gratis</li>
                                </ul>
                              
                            </div>
                        </div>
                    </div>
                  
 
                </div>
            </div>
      
    </div>
    </>
  )
}

export default Vise_information
