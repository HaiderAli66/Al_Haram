// import { Button } from 'bootstrap'
import React from 'react'
import Umra2 from './Umra2/Umra2'
import Image from './Image/Image'
import Button from './Button/Button'
import Tab from './Tab/Tab'
import Upage_one from './Upage_one/Upage_one'
function Umra_main() {
  return (
    <div className='container'>
      {/* <Upage_one/> */}
     <Umra2/>

     <Image/>
     <Button/>
     <Tab/>
    </div>
  )
}

export default Umra_main
