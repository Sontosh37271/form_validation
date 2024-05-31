import React, { useEffect, useState } from 'react'

const DataFetch = () => {
  const todosLoading = <p>todos is loading</p>;

  const [error,setError]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
    const [todos,setTodos]=useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
          if(!res.ok){
            throw Error('fetch is not successfully loading');
          }
           return res.json();
        })
        .then((data)=>{
             setTodos(data);
             setIsLoading(false);
             setError(null);
        })
        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        })
        
    },[]);
  
    const todosElement = 
      todos.length && todos.map((todo,index)=>{
      return <p key={index}>{todo.title}</p>;
    });
  return (
    <div>
      <h1>DataFetch</h1>
      {error && <p>{error}</p>}
      {isLoading && todosLoading}   {/* jotokhon porjonto isLoading true thkbe thik totokhon potjonto todosLoading variable ar man thakbe */}
      {todosElement}
    </div>
  )
}

export default DataFetch
