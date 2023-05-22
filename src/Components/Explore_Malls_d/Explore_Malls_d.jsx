import React from 'react'
import BasicTabs from '../Explore_resturant_detail/BasicTabs/BasicTabs'
import Place_detail from '../Explore_resturant_detail/Place_detail/Place_detail'

function Explore_Malls_d() {
  return (
    <div>
      <Place_detail
      title="Al Jabbar Shopping Mall"
        imgsrc="m1.png"
        location="
 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A"
      />
      <BasicTabs/>
    </div>
  )
}

export default Explore_Malls_d
