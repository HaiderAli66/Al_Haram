import React from 'react'
import Checkbox from '@mui/material/Checkbox';
// import "./SimpleAccordion.css"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SimpleAccordion from "../SimpleAccordion/SimpleAccordion.css"
import { dividerClasses } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Selecter() {
  return (
    <div>
      <div className="row">

        <div className="col-12">

          {/* <h2>Filtter</h2> */}

          <div>
            <Accordion className='mb-3 ' defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography className='text-capitalize text-white'  >departure country</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">


                      <FormGroup className="fsfsfsf">
                        <FormControlLabel className="oye_teri" control={<Checkbox defaultUnchecked />} label="
                    Egypt" />

                      </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                   India" /> </FormGroup>



                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     Pakistan " /> </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                    Bangladesh" /> </FormGroup>



                    </div>
                    <div className="col-2 mt-2">(65)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     Malaysia " /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(35)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                    Indonesia" /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(48)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     Turkey " /> </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(56)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                      Azerbaijan " /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(37)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                      Afghanistan " /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(25)</div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='mb-3'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography className='text-capitalize text-white'  >departure city</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">


                      <FormGroup className="fsfsfsf">
                        <FormControlLabel className="oye_teri" control={<Checkbox defaultUnchecked />} label="
                    Munbai" />

                      </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                   Delhi" /> </FormGroup>



                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     Lahore " /> </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                    Kuala Lampur" /> </FormGroup>



                    </div>
                    <div className="col-2 mt-2">(65)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     Bombay " /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(35)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                    Kolkuta" /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(48)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     Cairo " /> </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(56)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                      Baku " /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(37)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                      Kabul " /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(25)</div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='mb-3'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography className='text-capitalize text-white'  >month of travel</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">


                      <FormGroup className="fsfsfsf">
                        <FormControlLabel className="oye_teri" control={<Checkbox defaultUnchecked />} label="
                    Oct 2022" />

                      </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                   Nav 2022" /> </FormGroup>



                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     Dec 2022 " /> </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                   Jan 2023" /> </FormGroup>



                    </div>
                    <div className="col-2 mt-2">(65)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     Feb 2023 " /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(35)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                    March 2023" /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(48)</div>
                  </div>

                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography className='text-capitalize text-white'  >no of days</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">


                      <FormGroup className="fsfsfsf">
                        <FormControlLabel className="oye_teri" control={<Checkbox defaultUnchecked />} label="
                    7 To 10 Days" />

                      </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     10 To 15 Days" /> </FormGroup>



                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     15 To 18 Days" /> </FormGroup>

                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                    12 To 23 Days" /> </FormGroup>



                    </div>
                    <div className="col-2 mt-2">(65)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                     12 To 56 Days " /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(35)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultUnchecked />} label="
                      1 To 10 Days" /> </FormGroup>


                    </div>
                    <div className="col-2 mt-2">(48)</div>
                  </div>

                </Typography>
              </AccordionDetails>
            </Accordion>

          </div>
        </div>
      </div>

      {/* <div class="dropdown mb-4">
  <a class="btn ucard w-100 mt-3 text-start text-white dropdown-toggle pe-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
  Departure Country
  </a>


  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>Egypt   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>India   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>Pakistan   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>Bangladesh   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>Malayshia   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '> Turkey  </p> </div><p className='mt-3 fff ' >   </p></li>
  </ul>
</div> */}
      {/* <div class="dropdown mb-4">
  <a class="btn ucard w-100 text-start text-white dropdown-toggle pe-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
  Departure City
  </a>

  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' mt-md-0 pt-0  '>Karachi      </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' mt-md-0 pt-0  '>Islamabad    </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' mt-md-0 pt-0  '>Delhi   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' mt-md-0 pt-0  '>Bombay   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' mt-md-0 pt-0  '>Baku   </p> </div><p className='mt-3 fff ' >   </p></li>
  </ul>
</div> */}
      {/* <div class="dropdown mb-4">
  <a class="btn ucard w-100 text-start text-white dropdown-toggle pe-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
 Month Of Travel
  </a>

  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">     
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>Oct 2022   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>Nov 2022   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>Dec 2022   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>Jan 2023   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '> Feb 2023   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>March 2023   </p> </div><p className='mt-3 fff ' >   </p></li>
  </ul>
</div> */}
      {/* <div class="dropdown mb-4">
  <a class="btn ucard w-100 text-start text-white dropdown-toggle pe-5" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
 No of Days
  </a>

  <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">      
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>7 To 10 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>10 To 15 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>15 To 18 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>12 To 23 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>12 To 56 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  <li className='d-flex'><div className='d-flex justify-content-center align-items-center '><Checkbox className=''/><p className=' pt-0  '>1 To 10 Days   </p> </div><p className='mt-3 fff ' >   </p></li>
  </ul>
</div> */}
    </div>
  )
}

export default Selecter
