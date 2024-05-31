import React, { useState } from 'react'

const Toggle = () => {
 const [toggle,setToggle]=useState(true);
 const handleChange=()=>{
  setToggle(!toggle);
 }
  return (
    <>
    { toggle && ( <div style={{margin:"1rem",backgroundColor:"pink",height:'100px'}}>
      <p>hello this is toggle</p>
    </div>
    )
    }
   
    <div>
      <button onClick={handleChange}>{toggle? "Hide": "show" }</button>
    </div>
    </>
  )
}

export default Toggle
