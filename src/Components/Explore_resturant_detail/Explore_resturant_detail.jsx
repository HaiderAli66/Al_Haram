import React from 'react'
import BasicTabs from './BasicTabs/BasicTabs'
import Place_detail from './Place_detail/Place_detail'

function Explore_resturant_detail() {
  return (
    <div className='pb-5'>
      <Place_detail title="Al Jabbar Shopping Malls   " 
      imgsrc="mall_main.png"
        location="
 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <BasicTabs/>
    </div>
  )
}

export default Explore_resturant_detail
