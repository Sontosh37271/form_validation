import React,{useEffect, useState} from 'react'; 

// import './App.css';
import Signup from './Components/Signup';
import Toggle from './Components/toggle';
import FAQS from './Components/FAQ/FAQS';
import UseEffectExample from './Components/HOOKS/useEffect/UseEffectExample';
import DataFetch from './Components/HOOKS/Customhooks/DataFetch.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Components/Users.js';
import UserForm from './Components/HOOKS/UserRefExample/UserForm.js';
import UseReducer from './Components/HOOKS/UseReducer/index.js';
import Component1 from './Components/PROP_DRILLING/Component1.js';
import NewUser from './Components/NewUser.js';
import { UsersContext } from './context/UserContext.js';

function App() {
  const [users,setUsers]= useState([
    {id:1, username:'sontosh'},
    {id:2,username:'suronjit'}
  ])
 
  return (
    <UsersContext.Provider value={{users,setUsers}}>
    <div className="App">
      {/* <input type='text' name='name' value={name} onChange={handleChange} style={{background: validInput ? ("green"):('blue')}}/> */}
     {/* <Signup/> */}
     {/* <Toggle /> */}
     {/* <FAQS/> */}
     {/* <UseEffectExample /> */}
     {/* <DataFetch /> */}
     {/* <h1>React toastyfy</h1>
     <button onClick={()=>{toast("this is suronjit huda khay vat");}}>Click for check toastify</button>
     <ToastContainer /> */}
     {/* <Users/> */}
     {/* <UserForm /> */}
     {/* <UseReducer /> */}
     {/* <Component1 /> */}
     <NewUser />
     <Users/>
    </div>
    </UsersContext.Provider>
     
  );
}

export default App;
