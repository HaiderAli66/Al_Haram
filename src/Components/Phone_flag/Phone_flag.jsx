import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import Form from 'react-bootstrap/Form';

function Phone_flag() {
    const [selected, setSelected] = useState("");
  return (
    <div className='d-flex'>
   
      <ReactFlagsSelect
className='p-0'
countries={["PK", "GB", "FR", "IN", 'BD', 'AF']}
customLabels={{
    "PK": { secondary: "+92" },
    "GB": { secondary: "+44" },
    "FR": { secondary: "+44" },
    "IN": { secondary: "+91" },
    "BD": { secondary: "+93" },
    "AF": { secondary: "+91" },

}}
placeholder="Select country"
// className="form-control rounded-0 "
showSecondarySelectedLabel={true}
selected={selected}
onSelect={(code) => setSelected(code)}

/>
<Form.Control type="number" />


    </div>
  )
}

export default Phone_flag
