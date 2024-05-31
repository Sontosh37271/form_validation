import React, { useEffect, useState } from 'react'
// this is custom hook for useing several url 
const useFetch = (url) => {  
  const [error,setError]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
  const [data,setData]=useState({});

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
          if(!res.ok){
            throw Error('fetch is not successfully loading');
          }
           return res.json();
        })
        .then((data)=>{
             setData(data);
             setIsLoading(false);
             setError(null);
        })
        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        })
        
    },[url]);
  return {data,isLoading,error}
}

export default useFetch
