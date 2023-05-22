import React from "react";
import "./SimpleAccordion.css"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { dividerClasses } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { "aria-label": "Checkbox demo"  } };

function SimpleAccordion() {
  return (
    <div className="container mt-5">
   
      <div className="row">
      
        <div className="col-4">
        
        {/* <h2>Filtter</h2> */}

          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography   > Suggested For You</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">
                      

                      <FormGroup className="fsfsfsf">
  <FormControlLabel className="oye_teri" control={<Checkbox defaultChecked />} label="
                      Rated Excellent By Travellers" />

</FormGroup>

                    </div>
                    <div className="col-2 mt-2">(45)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                      5 Start Hotels" /> </FormGroup>


             
                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                        Free Cancellation " /> </FormGroup>
                      
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                          Near Mecca " /> </FormGroup>
                    
                 
                    
                    </div>
                    <div className="col-2 mt-2">(65)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                         Free Breakfast " /> </FormGroup>
                     
                     
                    </div>
                    <div className="col-2 mt-2">(35)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                        Low Budget Hotels" /> </FormGroup>
                      
                     
                    </div>
                    <div className="col-2 mt-2">(48)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                        3 Start Hotels " /> </FormGroup>
                      
                    </div>
                    <div className="col-2 mt-2">(56)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                         Lorem Ipsum " /> </FormGroup>
                      
                     
                    </div>
                    <div className="col-2 mt-2">(37)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                         Apartments " /> </FormGroup>
                 
                    
                    </div>
                    <div className="col-2 mt-2">(25)</div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
     
      <br/>
      {/* Price Per Night */}
      <div className="row">
        <div className="col-4">
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography> Price Per Night</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                      Rs 0 - Rs 1,000" />

</FormGroup>


               
             
                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                      Rs 1,000 - Rs 2,000" />

</FormGroup>
                     
                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                      Rs 2,000 - Rs 5,000" />

</FormGroup>
                  
                      
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                   Rs 5,000 - Rs 10,000" />

</FormGroup>
                     
                    
                    </div>
                    <div className="col-2 mt-2">(65)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                          Rs 10,000 - Rs 20,000" />

</FormGroup>
                
                  
                    </div>
                    <div className="col-2 mt-2">(35)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
            Rs 30,0000+" />

</FormGroup>
                    
                     
                    </div>
                    <div className="col-2 mt-2">(48)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
       
                     
                      <b>Your Budget</b>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-10 mt-2 text-start">

                   
                   <span className="border p-1 m-1"> Min</span> to 
                   <span className="border p-1 m-2"> Max</span>
                  
                    </div>
        
                  </div>
                
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
       

      <br/>
       {/* Star Category */}

       <div className="row">
        <div className="col-4">
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography> Star Category</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">

                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                         5 start" />

</FormGroup>

                    
     
                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">

                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                          4 start " />

</FormGroup>

                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                               3 start" />

</FormGroup>
                   
                
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  
                 
                 
                 
                
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>


      <br/>
      {/* Property Type  */}
      <div className="row">
        <div className="col-4">
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography>Property Type </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">

                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                             Hotels" />

</FormGroup>
                      
       
                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                              Apartments" />

</FormGroup>
                     
                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                  Villa" />

</FormGroup>
                 
                  
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                Room Service" />
</FormGroup>

                 
                    
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                 
                 
                 
                 
                
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <br/>

 {/* Ameneties ☻ */}

 <div className="row">
        <div className="col-4">
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography> Ameneties </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                 Wi-Fi" />
</FormGroup>
                  
       
                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                 Spa" />
</FormGroup>
                
                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                 Swimming Pool" />
</FormGroup>
                      
                    
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                Room Service" />
</FormGroup>
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-8 text-start">
                    </div>
                    <div className="col-4 fs-16"> <p>Show 18 more </p> </div>
                  </div>
                  
                 
                 
                 
                
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <br/>

{/* User Rating   */}

<div className="row">
        <div className="col-4">
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography> User Rating   </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                 4.5 & Above (Excellent)" />
</FormGroup>
                      
        
                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                 4 & Above (Very Good )" />
</FormGroup>
                     
                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                3 & Above (Good)" />
</FormGroup>


                     
                      
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                 
                 
                  
                 
            
                 
                
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <br/>

      {/* Hotels Chains  */}

      <div className="row">
        <div className="col-4">
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography> Hotels Chains  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                   Accor" />
</FormGroup>
                 
     
                    </div>
                    <div className="col-2 mt-2">(58)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                               Best Western " />
</FormGroup>
                      
                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                   Taj Hotel" />
</FormGroup>
                  
                  
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                The Park Hotel" />
</FormGroup>
                    
                   
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                      Novotel 
                              " />
</FormGroup>
                      
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                              Al Hayat Hotel " />
</FormGroup>
                      
                    
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                Hayaat Hotel" />
</FormGroup>
                      
                      
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                 West Inn" />
</FormGroup>
                     
                  
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  
                 
                 
                 
                
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <br/>

      {/*  Locality */}

      <div className="row">
        <div className="col-4">
          <div>
            <Accordion>
              <AccordionSummary
      
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header" className="accor text-white"
              >
                <Typography> Locality </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
          
                  <div className="row">
                  <b className="text-start ps-3">Business & Shoping  Hubs </b>

              

                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                               Karol Bagh " />
</FormGroup>
                      
                     
                    </div>
                    <div className="col-2 mt-2">(45)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                               Gulberg  " />
</FormGroup>
                   
                    </div>
                    <div className="col-2 mt-2">(69)</div>
                  </div>

                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                               sadder  " />
</FormGroup>
                      
                       
                    </div>
                    <div className="col-2 mt-2">(95)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                    The Mall Raod  " />
</FormGroup>
                   
               
                    </div>
                    <div className="col-2 mt-2">(65)</div>
                  </div>
                  <div className="row">
                  <b className="text-start ps-3">Near Transit Hubs </b>
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                Area City  " />
</FormGroup>
                     
                   
                    </div>
                    <div className="col-2 mt-2">(65)</div>
                    
                    
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                T3 Delhi Airport (lgi) " />
</FormGroup>
                      
             
                    </div>
                    <div className="col-2 mt-2">(48)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                Isbt Kashmer Gate " />
</FormGroup>
                        
                    </div>
                    <div className="col-2 mt-2">(56)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                Pahar Gunj " />
</FormGroup>
                     
                    
                    </div>
                    <div className="col-2 mt-2">(37)</div>
                  </div>
                  <div className="row">
                  <b className="text-start ps-3">Known For Dining  & Shopping </b>
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                              Aero City  " />
</FormGroup>
                      
                  
                    </div>
                    <div className="col-2 mt-2">(25)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">

                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                              T3 Delhi Airport (lgi) " />
</FormGroup>
                      
                      
                  
                    </div>
                    <div className="col-2 mt-2">(25)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                                Isbt Kashmer Gate  " />
</FormGroup>
                     
                     
                  
                    </div>
                    <div className="col-2 mt-2">(25)</div>
                  </div>
                  <div className="row">
                    <div className="col-10 text-start">
                    <FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="
                               Pahar Gunj " />
</FormGroup>
                     
                    
                  
                    </div>
                    <div className="col-2 mt-2">(25)</div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>


    </div>
  );
}

export default SimpleAccordion;
