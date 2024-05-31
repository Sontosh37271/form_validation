import React,{useRef} from 'react'

const UserForm = () => {
    const handleForm =(event)=>{
       event.preventDefault();
        console.log('submitted');  
           
    console.log(userNameRef.current.value);
    console.log(userPasswordRef.current.value);  
    }

    const userPasswordRef= useRef();
    const userNameRef = useRef();  // creact a useRef hook as name of userNameRef 
 
    return (
    <form onSubmit={handleForm}>
        <div>
            <label htmlFor='name'>UserName :</label>
            <input type='text' id='text' ref={userNameRef}></input>  
        </div>
        <div>
            <label htmlFor='password'>Password :</label>
            <input type='password' id='password' ref={userPasswordRef}></input>
        </div>
        <button type='submit'>Register</button>
        
    </form>
  )
}

export default UserForm
