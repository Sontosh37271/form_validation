// import React, { useState } from 'react'

// const Signup = () => {
//     // const[name,setName]=useState("");
//     const info={
//         name:'',
//         email:'',
//         password:''
//     }
//     const [user,setUser]=useState({info});
//     const {name,email,password}=user;

//     const handleChange=(e)=>{
//         setUser({...user,[e.target.name]:e.target.value});

//     }
//     const handleForm=(e)=>{
//         e.preventDefault();
//         console.log(user);

//     }
//   return (
//     <div>
//      <h1>User Info</h1>
//      <form onSubmit={handleForm}>
//       <div>
//         <div>
//             <label htmlFor='name'>Name :</label>
//             <input type='text' name='name' id='name' onChange={handleChange} value={name}></input>
//         </div>
//         <div>
//             <label htmlFor='email'>Email :</label>
//             <input type='email' name='email' id='email' onChange={handleChange} value={email}></input>
//         </div>
//         <div>
//             <label htmlFor='password'>password :</label>
//             <input type='password' name='password' id='password' onChange={handleChange} value={password}></input>
//         </div>
//       </div>
//         <button type='submit'>Signup</button>
//      </form>
//     </div>
//   )
// }

// export default Signup



// now I build a form using formik
import * as yup from 'yup';   // yup is used for checkign validation
import React from 'react'
import {useFormik} from 'formik';
const Signup = () => {
   
  const formik= useFormik({
     initialValues:{
      name:'',
      email:'',
      password:''
     },
     validationSchema:yup.object({
      name:yup.string().min(2,"name must have atleast 2 character" ).required(),
      email:yup.string().email().required(),
      password:yup.string().min(6,"name must have atleast 6 character" ).required()
     }),
     onSubmit:(values,{resetForm})=>{   // amar akhane value o 1ti method pass korbo
      console.log(values);
      resetForm({values:''})
     }
  })

  // console.log(formik.errors);
  return (
    <div>
     <h1>User Info</h1>
     <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
            <label htmlFor='name'>Name :</label>
            <input type='text' name='name' id='name' onChange={formik.handleChange} value={formik.values.name} ></input>
            <br/>
          {formik.touched.name && formik.errors.name && (<span>{formik.errors.name }</span>)}
        </div>
        <div>
            <label htmlFor='email'>Email :</label>
            <input type='email' name='email' id='email' onChange={formik.handleChange} value={formik.values.email}></input>
            <br/>
            {formik.touched.email && formik.errors.email && (<span>{formik.errors.email }</span>)}
        </div>
        <div>
            <label htmlFor='password'>password :</label>
            <input type='password' name='password' id='password' onChange={formik.handleChange} value={formik.values.password} ></input>
            <br/>
            {formik.touched.password && formik.errors.password && <span>{formik.errors.password }</span>}
        </div>
      </div>
        <button type='submit'>Signup</button>
     </form>
    </div>
  )
}

export default Signup

