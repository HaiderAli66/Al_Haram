import logo from './logo.svg';
import './App.css';

import Vise_header from './Components/Vise_header/Vise_header';
import Vise_form from './Components/Vise_form/Vise_form';

import Vise_information from './Components/Vise_information/Vise_information';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Al_haram_header from './Components/Al_haram_header/Al_haram_header';
import Al_haram_link_header from './Components/Al_haram_link_header/Al_haram_link_header';
import 'bootstrap/dist/css/bootstrap.min.css';

import Al_haram_main_footer from './Components/Al_haram_main_footer/Al_haram_main_footer';
import Flight_result from './Components/Flight_result/Flight_result';

import Main_home from './Components/Main_home/Main_home';
import Upage_two_main from './Components/Upage_two_main';
import Hajj_two_main from './Components/Hajj_two_main';
import Hajj_second from './Components/Hajj_second/Hajj_second';
import Land_second from './Components/Land_second/Land_second';
import Hotal_second_page from './Components/Hotal_second_page/Hotal_second_page';
import Main_booking from './Components/Main_booking';
import Main_Browse from './Components/Main_Browse';
import Explore from "./Components/Explore/Explore";
import Explore_resturant from "./Components/Explore_resturant/Explore_resturant";

import Explore_resturant_detail from "./Components/Explore_resturant_detail/Explore_resturant_detail";
import Explore_Malls from "./Components/Explore_Malls/Explore_Malls";
import Explore_Monuments from "./Components/Explore_Monuments/Explore_Monuments";
import Explore_Local from "./Components/Explore_Local/Explore_Local";
import Explore_Mosques from "./Components/Explore_Mosques/Explore_Mosques";
import Explore_Malls_d from "./Components/Explore_Malls_d/Explore_Malls_d";
import FlightsScd from './Components/Flights_Scd';
import SelectSeatSleeper from './Components/SelectSeatSleeper';
import SelectSeatSeaterOnly from './Components/SelectSeatSeaterOnly';
import SelectSeatSeaterAndBerth from './Components/SelectSeatSeaterAndBerth';
import Sign_up_page from './Components/Sign_up_page/Sign_up_page';
import Land_packagess from './Components/Land_packages/Land_packagess';
import Land_package_two from './Components/Land_package_two/Land_package_two';
import Vise_information_2 from './Components/Vise_information_2/Vise_information_2';
import Umraplane from './Components/Umra_plan/Umraplane';
import Plantransport from './Components/Umra_transport/Plantransport';
import Planground from './Components/Umra_ground/Planground';
import Visapay from './Components/Umra_visa/Visapay';
import Planhotel from './Components/Planhotel/Planhotel';
import Planflight from './Components/Umraplan_flight/Planflight';
import Terms_conditions from './Components/Terms_conditions/Terms_conditions';
import Privacytext from './Components/Privacytext/Privacytext';
import Read_our_blogs from './Components/Read_our_blogs/Read_our_blogs';
import About_us from './Components/About_us/About_us';
import Sinup from './Components/Sinup/Sinup';
import Login from './Components/Login/Login';
import Properties from "./Components/list your properties/Properties"
import Cablist from "./Components/list your cab/Cablist"


import Umra_main from "./Components/Umra_main"
import Franchies_main from "./Components/Franchies_main/Franchies_main"
import Cab_booking_page from "./Components/Cab_booking_page/Cab_booking_page"
import Park_main from "./Components/Park_main/Park_main"
import View_detail from "./Components/View_detail/View_detail"
import View_details_mosq from "./Components/View_details_mosq/View_details_mosq"
import View_details_zayad_mosq from "./Components/View_details_zayad_mosq/View_details_zayad_mosq"
import View_details_market from "./Components/View_details_market/View_details_market"
import Local_market from "./Components/Local_market/Local_market"

import TabView from "./Components/Flight_result/TabView"

import Blog_read from "./Components/Blog_read/Blog_read"
import { InfinitySpin } from  'react-loader-spinner'

import { useState } from 'react';
import Screen_loader from './Components/Screen_loader/Screen_loader';

import Cab_page_full from './Components/Cab_page_full/Cab_page_full';





function App() {
  const [ spinner,setSpinner] = useState(true)

  setTimeout(() => {
    setSpinner(false)
  }, 1000);
  return (
    <div className="App">

      {
        spinner && (<Screen_loader />)
      }
  
        <Router>
          <Al_haram_header/>
          <Al_haram_link_header/>
      
        <Routes>
        <Route exact  path="/" element={<Main_home />} /> 
        <Route exact  path="/Umrah_package" element={<Upage_two_main/>} />
        <Route exact  path="/Land_packagess" element={<Land_packagess/>} />
        <Route exact  path="/Land_package_two" element={<Land_package_two/>} />

        <Route exact  path="/hajj_packages" element={<Hajj_two_main/>} />
        <Route exact  path="/Umra_main" element={<Umra_main/>} />
        <Route exact  path="/Main_booking" element={<Main_booking/>} />
        <Route exact  path="/catering" element={<Main_Browse/>} />
        <Route exact  path="/explore" element={<Explore/>} />
        <Route path="/Explore_resturant" element={<Explore_resturant />} />
        <Route path="/Explore_resturant_detail" element={<Explore_resturant_detail />}/>
        <Route path="/Hotal_second_page" element={<Hotal_second_page />}/>
        <Route path="/Explore_Malls" element={<Explore_Malls/>}/>
        <Route path="/Explore_Malls_d" element={<Explore_Malls_d/>}/>
        <Route path="/Explore_Monuments" element={<Explore_Monuments/>}/>
        <Route path="/Explore_Local" element={<Explore_Local/>}/>
        <Route path="/Explore_Mosques" element={<Explore_Mosques/>}/>
        <Route path="/cabs" element={<FlightsScd/>}/>
        <Route path="SelectSeatSleeper" element={<SelectSeatSleeper />} />
        <Route path="SelectSeatSeaterAndBerth" element={<SelectSeatSeaterAndBerth />} />
        <Route path="SelectSeatSeaterOnly" element={<SelectSeatSeaterOnly />} />
        <Route path="flight" element={<Flight_result />} />
        <Route path="/Vise" element={<Vise_header />} />
        <Route path="/Visa_Note" element={<Vise_information />} />
        <Route path="/diploamatic" element={<Vise_information_2 />} />
        <Route path="/form" element={<Vise_form />} />
        <Route path="/Main_umraPlane" element={<Umraplane/>}/>
        <Route path="/Planflight" element={<Planflight/>}/>
        <Route path="/Plantransport" element={<Plantransport/>}/>
        <Route path="/Planground" element={<Planground/>}/>
        <Route path="/Visapay" element={<Visapay/>}/>
        <Route path="/Planhotel" element={<Planhotel/>}/>
        <Route path="/sheikh_zyad_mosq" element={<View_details_zayad_mosq/>}/>
        <Route path="/sinng" element={<Sinup/>}/>
        <Route path="/loogin" element={<Login/>}/>
        <Route path="/terms" element={<Terms_conditions/>}/>
       <Route path="/pravi" element={< Privacytext />}/>
        <Route path="/footer_blog" element={<Read_our_blogs/>}/>
        <Route path="/footer_about_us" element={<About_us/>}/>
        <Route path="/press_pro" element={<Properties/>}/>
        <Route path="/foooter_cabsss" element={<Cablist/>}/>
        <Route path="/cab_booking" element={<Cab_booking_page/>}/>
        <Route path="/Park_main" element={<Park_main/>}/>
        <Route path="/footer_buses" element={<Franchies_main/>}/>
        <Route path="/View_detail" element={<View_detail/>}/>
        <Route path="/veiw_monuments_details" element={<View_details_mosq/>}/>
        <Route path="/more_blogs" element={<Blog_read/>}/>
        <Route path="/Local_market" element={<Local_market/>}/>
        <Route path="/View_details_market" element={<View_details_market/>}/>
        <Route path="/Hajj_second" element={<Hajj_second/>}/>
        <Route path="/Land_second" element={<Land_second/>}/>
        <Route path="/flight_details_tab" element={<TabView/>}/>
        <Route path ="/Paynow" element={<Cab_page_full/>}/>

        

  
        
   
        </Routes>
    
         <Al_haram_main_footer/>
       
        
      
        
        </Router>
     
    </div>
  );
}

export default App;
