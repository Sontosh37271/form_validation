import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {

  const [count,setCount]=useState(0);
  const [isLoading,setIsLoading]=useState(false);

  // useEffect(()=>{
  //   //calls with only first render
  //   console.log("useEffect");
  // },);

  // useEffect(()=>{
  //   //calls with every rendering
  //   console.log("useEffect");
  // },[]);

  useEffect(()=>{
    //calls with first render and depend on count
    console.log("useEffect");
  },[count]);

  return (
    <div>
      {console.log("rendering")}
      <h2> Count : {count} </h2>
      <button onClick={()=>{setCount((count)=>count+1)}}>increment</button>
      <button onClick={()=>{setIsLoading(!isLoading)}}>isLoading</button>
    </div>
  )
}

export default UseEffectExample
