import React, { useState } from 'react'
import Component2 from './Component2'

import { UserContext } from './UserContext';

const Component1 = () => {
    const [user,setUser]=useState({id:101,name:"sontosh kumar shil"});
    const [text,setText]=useState("hello I am text");
    console.log(user);
  return (
    <>
    <UserContext.Provider value={{user,text}}>
         <Component2 />            {  /*   here we wrap the child component */}
    </UserContext.Provider>
      
    </>
  )
}

export default Component1
