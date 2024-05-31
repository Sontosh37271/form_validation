import React, { useReducer, useState } from 'react'
const booksData = [
    {id:1,name:'Pather Panchal'},
    { id:2,name:'Padma Nadir Majhi' },
    {id:3,name:'Srikanta'}
];
const Modal =({modalText})=>{
  return <p>{modalText}</p>
};
const reducer = (state,action)=>{
  //action.type , action.payload
  if(action.type==="ADD"){
      const allBooks =[...state.bookData,action.payload]
      return{
        ...state,
        bookData:allBooks,
        modalOpen:true,
        modalText:"book is added",
      }
    }
    if(action.type==="REMOVE"){
      const filteredBooks = [...state.bookData].filter(book=>book.id !== action.payload);
      return{
        ...state,
        bookData:filteredBooks,
        modalOpen:true,
        modalText:"book is remove",
      }
    }

  return state;
}
const UseReducer = () => {

  const [bookState,dispatch]=useReducer(reducer,{
    bookData:booksData,
    modalText:'',
    modalOpen:false
  });
  const [bookName,setBookName] = useState(''); 

const handleSubmit =(e)=>{
    e.preventDefault();
    const newBook = {id:new Date().getTime().toString(),name:bookName};
    dispatch({type:"ADD",payload:newBook});
};
const bookRemove =(id)=>{
   dispatch({type:"REMOVE", payload:id});
}
  return (
    <>
    <h3>Book List</h3>

    <form onSubmit={handleSubmit}>
       <input type='text' value={bookName} onChange={(e)=>{setBookName(e.target.value)}}></input>
       <button type='submit'>Add Book</button>
    </form>
    {bookState.modalOpen && <Modal modalText={bookState.modalText}/>}
    <div>
      {bookState.bookData.map((book)=>{
        const {id,name}=book;
        return(<li key={id}>{name}<button onClick={()=>bookRemove(id)}>remove</button></li>)})} 
        
    </div>
    
    </>
  
  )
}

export default UseReducer
