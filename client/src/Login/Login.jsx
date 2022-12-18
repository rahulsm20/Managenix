import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
const Login = () => {
    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [access,setAccess]=useState(0)
    const handleForm= () =>{
        if(username=='username' && password=='password')
        {
            return navigate("/home")
        }
        else
        {
            setAccess(1)
        }
    }

  return (
    <div className='text-white d-flex flex-column justify-content-center align-items-center'>
    <h1 className='mb-5 text-center'>Welcome to Managenix! <img src="../../public/logo.png" className='col-1'/></h1>
    <div className='text-center'>
    <h3>Login</h3>
    <hr/>
    <form className='d-flex flex-column m-5 justify-content-center align-items-center' onSubmit={handleForm}>
    <input className="p-2 m-2 input-field text-dark" placeholder='Username' type="text" onChange={(event)=>setUsername(event.target.value)} required></input>
    <input className="p-2 m-2 input-field text-dark" placeholder='Password' type="password" onChange={(event)=>setPassword(event.target.value)} required></input>
    <button onClick={handleForm} className="btn bg-primary text-white mt-3">Submit</button>
    {access ? <p className='m-3'>Please enter the right password or username</p> : <></>}
    </form>
    </div>
    </div>
  )
}

export default Login