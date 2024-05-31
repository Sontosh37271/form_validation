import React,{useContext} from 'react'
import User from './User.js';
import { UsersContext } from '../context/UserContext.js';
const Users = () => {
   const {users,setUsers}=useContext(UsersContext); 
  return (
    <section className='users'>
        {users.map((user)=>(<User key={user.id} user={user}/>))}
    </section>
  );
};

export default Users
