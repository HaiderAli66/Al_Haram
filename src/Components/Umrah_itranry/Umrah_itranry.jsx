import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Umrah_itranry() {
  return (

    <div className="container mt-5">

<div>
      <Accordion>
        <AccordionSummary className='border'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Day 1</Typography>
        </AccordionSummary >
        <AccordionDetails>
          <Typography>
            <ul className='text-start'>
            <li>The property is well connected to the city and is located near the important locations of the a g n Delhi.</li>
            <li> The property offers modern amenities like a coffee shop, play area, activity centre, conference rooms, etc</li>
<li> The property is very close to the Airport and Railway station of the city and offers Services To A Make</li></ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary className='border'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Day 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          </Typography>
        </AccordionDetails>

      </Accordion>

      <Accordion >
        <AccordionSummary className='border'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Day 3</Typography>
        </AccordionSummary>
      </Accordion>    
      <Accordion >
        <AccordionSummary className='border'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Day 4</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion >
        <AccordionSummary className='border'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Day 5</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion >
        <AccordionSummary className='border'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Day 6</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion >
        <AccordionSummary className='border'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Day 7</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion >
        <AccordionSummary className='border'
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Day 8</Typography>
        </AccordionSummary>
      </Accordion>
    </div>

        
    </div>
      

  )
}

export default Umrah_itranry