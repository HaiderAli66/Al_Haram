import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BusinessH from '../BusinessH/BusinessH';
import Location from '../Location/Location';
import User_Reviews from '../User_Reviews/User_Reviews';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="my-2">

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , color:'white'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  variant="scrollable " sx={{width:'100'}}  className="bg-info "  >
          <Tab label="Overview" {...a11yProps(0)} style={{color:"white"}}  className="mx-md-4" />
          <Tab label="Location" {...a11yProps(1)}  style={{color:"white"}} className="mx-md-4"/>
          <Tab label="Menu" {...a11yProps(2)}  style={{color:"white"}} className="mx-md-4"/>
          <Tab label="Business Hours" {...a11yProps(3)}  style={{color:"white"}} className="mx-md-4"/>
          <Tab label="Photos" {...a11yProps(4)}  style={{color:"white"}} className="mx-md-4"/>
          <Tab label="User Reviews" {...a11yProps(5)}  style={{color:"white"}} className="mx-md-4"/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className="container-fluid">
          <div className="row text-start ">
            <div className="col-12">
              <div className="heading remove_clr">
                <h4 style={{fontWeight:'bold',fontSize:'36px',marginTop:'15px'}} className='moble_fs'>About Al Khobar Resturant</h4>
                <p>Live in luxury at the Hotel Almati Inn, located in Delhi, which offers a luxurious stay to its guests with modern amenities and services.</p>
              </div>
              <div className="list">
                <ul>
                  <li>The property is well connected to the city and is located near the important locations of Delhi.</li>
                  <li>The property offers modern amenities like a coffee shop, play area, activity centre, conference rooms, etc.</li>
                  <li>The property is very close to the Airport and Railway station of the city and offers taxi services to make the to and fro commutation easy.</li>
                  <li>The property is well connected to the city and is located near the important locations of Delhi.</li>
                  <li>The property offers modern amenities like a coffee shop, play area, activity centre, conference rooms, etc.</li>
                  <li>The property is very close to the Airport and Railway station of the city and offers taxi services to make the to and fro commutation easy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Location/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <BusinessH/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <BusinessH/>
      </TabPanel>
      <TabPanel value={value} index={4}>   Photos </TabPanel>
      <TabPanel value={value} index={5}>
        <User_Reviews/>
      </TabPanel>
    </Box>
    </div>
  );
}
