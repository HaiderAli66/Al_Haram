import React from 'react'
import "./Home_front.css"
import {FaMosque} from "react-icons/fa"
import {MdOutlineFlightTakeoff} from "react-icons/md"
import {FaHotel} from "react-icons/fa"
import {BiBus} from "react-icons/bi"
import {MdLocationOn} from "react-icons/md"
import {BsCalendar3EventFill} from "react-icons/bs"
import Buses_link from '../Buses_link/Buses_link'
import Umrah_link from '../Umrah_link/Umrah_link'
import Hotels_link from '../Hotels_link/Hotels_link'
import Flight_link from '../Flight_link/Flight_link'
import {useNavigate } from "react-router-dom"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Mac.css"
function Home_front() {


  let navigate = useNavigate()
  return (
    <div className='home_front_main'>
      <div className="container">
      <h1 className='home_front_heading'>budget-friendly & luxury package for a  convenient hajj & umrah  journey to the holly <br />
makkah & madina for muslim brothers & sisters</h1>
      </div>

<div className="container  ">
    <div className="row marrrrrrsss">
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-0 sasds"
    >
      <Tab  eventKey="profile" className='tabbb bhggggs  bttm' title={ <span className='Urmah_tab_button '><FaMosque className='buttton_icons'></FaMosque>  Umrah</span> }>
    
        <Umrah_link />
      </Tab>
      <Tab eventKey="home" className='bttm' title={ <span className='Urmah_tab_button'><MdOutlineFlightTakeoff className='buttton_icons '></MdOutlineFlightTakeoff>  Flights</span> }>
    
        <Flight_link/>
      </Tab>
      <Tab eventKey="contact" className='bttm' title={ <span className='Urmah_tab_button'><FaHotel className='buttton_icons '></FaHotel>  Hotels</span> } >
       
        <Hotels_link />
      </Tab>
      <Tab eventKey="buses" className='bttm mmw' title={ <span className='Urmah_tab_button'><BiBus className='buttton_icons '></BiBus> Buses</span> } >
      
         <Buses_link />
      </Tab>
    </Tabs>
   
    </div>
</div>
  



    </div>
  )
}

export default Home_front
