import React from 'react'
import useFetch from './useFetch';
const DataFetch = () => {
    const {data,isLoading,error}=useFetch("https://jsonplaceholder.typicode.com/todos")
    const LoadingMessage = <p>todos is loading</p>;
    const errorMessage = <p>{error}</p>

    const todosElement = 
      data.length && data.map((todo,index)=>{
      return <p key={index}>{todo.title}</p>;
      });
  return(
    <div>
      <h1>DataFetch</h1>
      {error && errorMessage}
      {isLoading && LoadingMessage}   {/* jotokhon porjonto isLoading true thkbe thik totokhon potjonto todosLoading variable ar man thakbe */}
      {todosElement}
    </div>
  )
}

export default DataFetch
