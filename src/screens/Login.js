import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import "./back.css"

export default function Login() {
  const[cred,setCred]=useState({email:"",password:""})

  let navigate=useNavigate();
  const handleSubmit=async (e)=>{
     e.preventDefault();
     const response=await fetch("http://localhost:5000/api/loginuser",{
  
      method:"POST",
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify({email:cred.email,password:cred.password})
     });
  
     const json=await response.json()
     console.log(json);
  
     if(!json.success){
       alert("Enter valid credentials");
     }

     if(json.success){
      navigate("/logedin");
    }
    

  
  
  
  }
  
  const onChange=(e)=>{
  
  
     setCred({...cred,[e.target.name]:e.target.value});
  }
  
  return (
    <div  className=' d-flex background'>
    <div className="container container  opacity w-50 my-5   -center d-flex flex-column justify-content-center align-items-center">
      <h2>Login</h2>
    <form className='my-3' onSubmit={handleSubmit}>

<div className="mb-3">

<input type="email" placeholder='EmailAdrress' className="htmlForm-control w-100" id="exampleInputEmail"  name="email"  value={cred.email} onChange={onChange}/>
</div>

<div className="mb-3">

<input type="password" placeholder='Password' className="htmlForm-control w-100" id="exampleInputPassword"   name="password" value={cred.password} onChange={onChange}/>
</div>


<button type="submit" className="btn btn-primary">Submit</button>
<Link to="/createuser"  className="m-3 btn btn-danger">i ama a new user</Link>
</form>
</div>
</div>
  )
}
