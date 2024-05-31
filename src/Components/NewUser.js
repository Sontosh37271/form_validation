import React, { useContext, useState } from 'react'
import { UsersContext } from '../context/UserContext';

const NewUser = () => {
    const [username,setUsername]=useState('');
    const {users,setUsers}=useContext(UsersContext);

    const handleUserNameChange=(e)=>{
        setUsername(e.target.value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
       const newUser = {id: new Date().getTime().toString(),username}
       setUsers([...users,newUser]);
    }
  return (
    <div>
    <h2>User Registration</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' name='username' value={username} onChange={handleUserNameChange} required/>
        <button type='submit'>ADD User</button>
    </form>
    
    </div>
  )
}

export default NewUser
