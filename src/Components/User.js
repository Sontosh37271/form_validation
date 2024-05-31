import React, { useContext } from 'react'
import { UsersContext } from '../context/UserContext';

const User=({user})=> {
  const {id,username}=user;
  const change=0;
  const {users,setUsers}=useContext(UsersContext);
  
   const handleDeleteUser=(id)=>{
    const filteredUser = users.filter((user)=>user.id!==id);
    setUsers(filteredUser);
  }
  return (
    <article className='user'>
      <h2>{id}</h2>
      <p>{username}</p>
      <button onClick={()=>{ handleDeleteUser(id)}}>Delete</button>
    </article>
  )
}

export default User;
