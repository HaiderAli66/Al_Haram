import React from 'react'
import Hotels from '../Explore_resturant/Hotels/Hotels'
import Cities_Places from "../Cities_Places/Cities_Places"; 
import Malls from './Malls/Malls'

export default function Explore_Malls() {
  return (
    <div className=''>
        <Cities_Places />
    <Malls title="Popular Malls"
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
        location="28800 Orchard Lake Road, Saudi Arabia" 
    />
    </div>
  )
}
