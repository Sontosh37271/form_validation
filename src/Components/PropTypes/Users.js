import React, { useState } from 'react'
import User from './User'
const Users = () => {
    const [name,setName]=useState('sontosh');
    const [roll,setRoll]=useState('101');
  return (
    <div>
      <User name={name} roll={roll}/>
    </div>
  )
}

export default Users
