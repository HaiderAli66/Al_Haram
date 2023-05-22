import React from 'react'
import Park_card from '../Park_card/Park_card'
import { TbMap2 } from 'react-icons/tb';
import Cities_Places from '../Explore/Cities_Places/Cities_Places';
function Park_main() {
  return (
    <div>
        <Cities_Places/>
      <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 col-sm-12">
<div className="card mt-5 text-capitalize">
<div className="text-center nya naya-color   text-white fs-4">
Popular Malls
</div>
<div className="text-start ps-3 pt-2 boldify">
    <span className='fs-5'>Luxury Grand Shopping Mall</span><br/>
    Makkah
</div>
<hr/>
<div className="text-start ps-3  boldify">
    <span className='fs-5'>Al Hayat Shopping Mall </span><br/>
    Makkah
</div>
<hr/>
<div className="text-start ps-3  boldify">
    <span className='fs-5'>al jabbar grand shopping mall</span><br/>
    Makkah
</div>
<hr/>
<div className="text-start ps-3  boldify">
    <span className='fs-5'>Luxury Grand Shopping Mall</span><br/>
    Makkah
</div>
<hr/>
<div className="text-start ps-3  boldify">
    <span className='fs-5'>al jabbar grand shopping mall</span><br/>
    Makkah
</div>
<hr/>
<div className="text-start ps-3 py-2 boldify">
    <span className='fs-5'>luxury gold shopping mall</span><br/>
    Makkah
</div>

</div>
 {/* second card mall  */}
 <div className="card mt-5 text-capitalize">
<div className="text-center nya naya-color   text-white fs-4">
nearest malls
</div>
<div className="text-start ps-3 py-2 boldify">
    <span className='fs-5'>the grand arabia mall </span><br/>
   
<span className='godo-text'> <TbMap2 className='me-1 fs-6'/> 
 28800 Orchard Lake Road, saudi arabia</span> 
</div>
<hr/>
<div className="text-start ps-3 py-2 boldify">
    <span className='fs-5'>the grand arabia mall </span><br/>
   
<span className='godo-text'> <TbMap2 className='me-1 fs-6'/> 
 28800 Orchard Lake Road, saudi arabia</span> 
</div>
<hr/>
<div className="text-start ps-3 py-2 boldify">
    <span className='fs-5'>the grand arabia mall </span><br/>
   
<span className='godo-text'> <TbMap2 className='me-1 fs-6'/> 
 28800 Orchard Lake Road, saudi arabia</span> 
</div>
<hr/>
<div className="text-start ps-3 py-2 boldify">
    <span className='fs-5'>the grand arabia mall </span><br/>
   
<span className='godo-text'> <TbMap2 className='me-1 fs-6'/> 
 28800 Orchard Lake Road, saudi arabia</span> 
</div>
<hr/>
<div className="text-start ps-3 py-2 boldify">
    <span className='fs-5'>the grand arabia mall </span><br/>
   
<span className='godo-text'> <TbMap2 className='me-1 fs-6'/> 
 28800 Orchard Lake Road, saudi arabia</span> 
</div>
<hr/>
<div className="text-start ps-3 py-2 boldify">
    <span className='fs-5'>the grand arabia mall </span><br/>
   
<span className='godo-text'> <TbMap2 className='me-1 fs-6'/> 
 28800 Orchard Lake Road, saudi arabia</span> 
</div>

</div>

            </div>
           
            
            {/* card park  */}
            <div className="col-lg-9 col-sm-12">
                <Park_card/>
                <Park_card/>
                <Park_card/>
                <Park_card/>
                <Park_card/>
                <Park_card/>
                <Park_card/>
                <Park_card/>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Park_main
