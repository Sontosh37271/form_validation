import React, { useState } from 'react'

const FAQ = ({id,title,desc}) => {
    
 const [toggle,setToggle]=useState(false);
 const handleDesc=()=>{
    setToggle(!toggle);
 }
  return (
    <article>
        <div>
            <h3>{title}</h3>
            <button onClick={handleDesc}>{toggle ? '-': '+'}</button>
        </div>
        <div>
            <p>{toggle && desc}</p>
        </div>

    </article>
  )
}

export default FAQ
