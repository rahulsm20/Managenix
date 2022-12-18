import {React,useState} from 'react'
import axios from 'axios'
import Navbar from '../Home/Navbar'
const CreateDept = () => {
    const [deptID,setDeptID]=useState()
    const [deptName,setDeptName]=useState('')
    const handleForm = (event) =>{
      event.preventDefault()
        axios.post("http://localhost:3000/createDept",{
            deptID:deptID,
            deptName:deptName,
        }).then((res)=>console.log('Success'))
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container-fluid d-flex justify-content-center flex-column align-items-center employees'>
      <Navbar/>
      <h1>Add new department</h1>
      <form className='m-3 d-flex flex-column' onSubmit={handleForm}>
      <label>Department ID</label>
        <input className='p-2 m-2' placeholder='ID' type='number' onChange={(event)=>setDeptID(event.target.value)} required/>
        <label>Department name</label>
        <input className='p-2 m-2' placeholder='Name' onChange={(event)=>setDeptName(event.target.value)} required/>
        <button className="btn bg-dark text-white mt-2" onClick={handleForm}>Add department</button>
      </form>
    </div>
  )
}

export default CreateDept
