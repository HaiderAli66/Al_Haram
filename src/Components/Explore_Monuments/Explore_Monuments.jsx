import React from 'react'
import Cities_Places from '../Cities_Places/Cities_Places'

import Monuments from './Monuments/Monuments'

function Explore_Monuments() {
  return (
    <div className=''>
      <Cities_Places/>
    
       <Monuments title="Popular Monuments"
    t1="LUXURY GRAND SHOPPING MALL"
    d1="MAKKAH" 
    t2="Al HAYAT SHOPPING MALL"
    d2="MAKKAH"
    t3="Al JABBAR GRAND SHOPPING MALL"
    d3="MAKKAH"
    t4="LUXURY GRAND SHOPPING MALL"
    d4="MAKKAH"
    t5="Al JABBAR GRAND SHOPPING MALL"
    d5="MAKKAH"
    t6="LUXURY GOLD SHOPPING MALL"
    d6="MAKKAH"
        title1="Nearest Malls"
        name="THE GRAND ARABIA MALL "
        location="28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A" 
    />
    </div>
  )
}

export default Explore_Monuments
