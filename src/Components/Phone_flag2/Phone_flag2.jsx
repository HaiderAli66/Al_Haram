import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import Form from 'react-bootstrap/Form';

function Phone_flag2() {
    const [selected, setSelected] = useState("");
  return (
    <div className="text-white">
    
    <div className='d-flex my-4'>
    
      <ReactFlagsSelect
className='p-0 mnmnmn '

countries={["PK", "GB", "FR", "IN", 'BD', 'AF']}
customLabels={{
    "PK": { secondary: "+92" },
    "GB": { secondary: "+44" },
    "FR": { secondary: "+44" },
    "IN": { secondary: "+91" },
    "BD": { secondary: "+93" },
    "AF": { secondary: "+91" },

}}
sx={{background:'white'}}
placeholder="Select country"
// className="text-white"
showSecondarySelectedLabel={true}
selected={selected}
onSelect={(code) => setSelected(code)}

/>

<Form.Control type="number" style={{padding:"9px"}} />


    </div></div>
  )
}

export default Phone_flag2
