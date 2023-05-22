import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Umrah_terms from '../Umrah_terms/Umrah_terms';
import Umrah_itranry from '../Umrah_itranry/Umrah_itranry';
import Important from '../Important/Important';
import Room_sharing from '../Room_sharing/Room_sharing';
import Uover_view from '../Uover_view/Uover_view';
import Umrah_recard from '../Umrah_recard/Umrah_recard';
import Umrah_review from '../Umrah_review/Umrah_review';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    className='pb-5'

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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box  sx={{ width: '100%' }} className="container">
      <Box className='' sx={{  }}>
        <div className=' '>
        <Tabs 
         textColor="light"
         variant="scrollable"
        sx={{
          width:"100"
        }}
          aria-label="full width tabs example"
        //  indicatorColor="secondary"
        value={value} onChange={handleChange}   className='ucard text-white '>
          <Tab className='px-4' label="overview" {...a11yProps(0)} sx={{color:"white"  }}/>
          <Tab className='px-4' label="important information" {...a11yProps(1)} sx={{color:"white"}}/>
          <Tab className='px-4'label="room sharing" {...a11yProps(2)} sx={{color:"white"}}/>
          <Tab className='px-4'label="itinerary" {...a11yProps(3)} sx={{color:"white"}}/>
          <Tab className='px-4'label="user reviews" {...a11yProps(4)} sx={{color:"white"}}/>
          <Tab className='px-4'label="terms & conditions" {...a11yProps(5)} sx={{color:"white"}}/>
        </Tabs></div>
      </Box>
      <TabPanel value={value} index={0}>
     <Uover_view/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Important/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Room_sharing/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Umrah_itranry/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Umrah_review/>
      <Umrah_recard/>
      <Umrah_recard/>
      <Umrah_recard/>
      <Umrah_recard/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Umrah_terms/>
     
      </TabPanel>
    </Box>
  );
}

