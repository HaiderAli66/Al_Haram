import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Overview2 from '../Overview2/Overview2';
import Location from '../Location/Location';
import Review2 from '../Review2/Review2';
import Busness_hours from '../Busness_hours/Busness_hours';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div className='mb-5'
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
    <Box sx={{ width: '100%',marginTop:"4%" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:"#02A3C1" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
         indicatorColor="none"
         textColor="inherit"
         centered
         variant='scrollable'
        >
          <Tab label="Overview" className="me-5 ms-3 text-white" {...a11yProps(0)} />
        
          <Tab label="Location" className="me-5 ms-4 text-white" {...a11yProps(1)} />
         
          <Tab label="User Reviews"  className="me-5 ms-4 text-white" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value}  index={0}>
       <Overview2/>
      </TabPanel>
     
      <TabPanel value={value} index={1}>
      <Location/>
      </TabPanel>
     
      <TabPanel value={value} index={2}>
        <Review2/>
      </TabPanel>
    </Box>
  );
}