import {React,useState} from 'react'
import axios from 'axios'
import Navbar from '../Home/Navbar'
const AddMng = () => {
    const [deptID,setDeptID]=useState('')
    const [mngID,setMngID]=useState('')
    const [mngName,setMngName]=useState('')
    const handleForm = () =>{
        axios.post("http://localhost:3000/addManager",{
            deptID:deptID,
            mngID:mngID,
            mngName:mngName
        }).then((res)=>console.log('Success'))
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container-fluid d-flex justify-content-center flex-column align-items-center employees'>
      <Navbar/>
      <h1>Add new manager</h1>
      <form className='m-3 d-flex flex-column' onSubmit={handleForm}>
        <label>Manager ID</label>
        <input className='p-2 m-2' placeholder='number' onChange={(event)=>setMngID(event.target.value)} required/>
      <label>Department ID</label>
        <input className='p-2 m-2' placeholder='ID' type='number' onChange={(event)=>setDeptID(event.target.value)} required/>
        <label>Manager Name</label>
        <input className='p-2 m-2' placeholder='name' onChange={(event)=>setMngName(event.target.value)} required/>
        <button className="btn bg-dark text-white mt-2" onClick={handleForm}>Add Manager</button>
      </form>
    </div>
  )
}

export default AddMng
