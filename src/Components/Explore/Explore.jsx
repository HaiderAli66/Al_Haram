import React from 'react'
import Mvisitedp from './Mvisitedp/Mvisitedp'
import P_cities from './P_cities/P_cities'
import Appbar from './Appbar/Appbar'
import Cities_Places from './Cities_Places/Cities_Places'
import Header from './Header/Header'

function Explore() {
  return (
    <div className='expo_mai_pad'>
     {/* <Appbar/> */}
       <Header/>
      <Cities_Places/>  
    <P_cities/>
      <Mvisitedp/>
    </div>
  )
}

export default Explore
