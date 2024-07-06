import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./back.css"

export default function Signup() {
  const[cred,setCred]=useState({name:"",email:"",password:"",location:""})

const handleSubmit=async (e)=>{
   e.preventDefault();
   const response=await fetch("http://localhost:5000/api/createuser",{

    method:"POST",
    headers:{
       'Content-Type':'application/json'
    },
    body:JSON.stringify({name:cred.name,email:cred.email,password:cred.password,location:cred.location})
   });

   const json=await response.json()
   console.log(json);

   if(!json.success){
     alert("Enter valid credentials");
   }



}

const onChange=(e)=>{


   setCred({...cred,[e.target.name]:e.target.value});
}

  return (
    <div className="d-flex background " >
       
        <div className="container  opacity w-50 my-5   -center d-flex flex-column justify-content-center align-items-center">
           <h2>𝓢𝓲𝓰𝓷𝓤𝓹</h2>
        <form className='my-3' onSubmit={handleSubmit}>
  <div className="mb-3">

    <input type="text" className="htmlForm-control w-100" name="name" value={cred.name} onChange={onChange} placeholder="Name"/>
    
  </div>
  <div className="mb-3">

    <input type="email" placeholder='EmailAdress' className="htmlForm-control w-100" id="exampleInputEmail"  name="email"  value={cred.email} onChange={onChange}/>
  </div>

  <div className="mb-3">

    <input type="password" placeholder="Paassword"className="htmlForm-control w-100" id="exampleInputPassword"   name="password" value={cred.password} onChange={onChange}/>
  </div>

  <div className="mb-3">

    <input type="text" placeholder='Address' className="htmlForm-control  w-100" id="location"  name="location"  value={cred.location} onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
   <Link to="/login"  className="m-3 btn btn-danger">Already a user</Link>
</form>
</div>
    </div>
  )
}
