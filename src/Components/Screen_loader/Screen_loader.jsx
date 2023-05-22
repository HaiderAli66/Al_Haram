import React from 'react'
import { InfinitySpin } from  'react-loader-spinner'
import "./Screen_loader.css"

function Screen_loader() {
  return (
    <div className='loader_main'>
        <InfinitySpin 
          width='200'
          color="#4fa94d"
        />
    </div>
  )
}

export default Screen_loader
