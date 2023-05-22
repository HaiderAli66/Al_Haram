import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Umrah_card from '../Umrah_card/Umrah_card';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
    import { Link } from 'react-router-dom';
import Selecter from '../Seleter/Selecter';
// import Umrah_card from './Umrah_card/Umrah_card';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function valuetext(value) {
  return `${value}°C`;
}
function  Upage_two() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div class="container-fluid mt-4">

   
    <div class="row">
      <div class="col-12 col-lg-3   ">
        <div className='card mb-2'>
      <Link to="/">  <button className='btn ucard text-white  w-100'> <h5 > Budget Range </h5></button></Link> 
      <label for="customRange1" class="form-label text-center pt-3">Rs 10,000 To 100,000</label>
      <div className="container">
      <Box sx={{textAlign:'center' }}>
      <Slider
      className='slider_range'
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        
      />
    </Box>
     </div></div>
    <Selecter/>



      </div>

      
      

      <div class="col-12 col-md-9 ">
      <h3 className='text-start fw-bold pb-3'>1,269 Package Found</h3>
<Umrah_card/>
<Umrah_card/>
<Umrah_card/>
<Umrah_card/>
<Umrah_card/>
<Umrah_card/>
<Umrah_card/>
<Umrah_card/>                     
     
      </div>
        {/* ///////////////// */}
      
    </div>
   </div>
  )
}

export default Upage_two