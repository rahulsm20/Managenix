import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../Home/Navbar'
const Create = () => {
    const [id,setID]=useState('')
    const [name,setName]=useState('')
    const [dob,setDOB]=useState('')
    const [position,setPosition]=useState('') 
    const [hiredate,setHireDate]=useState('')
    const [deptID,setDeptID]=useState('')
    const [mngID,setMngID]=useState('')
    const [mngName,setMngName]=useState('')
    const [comp,setComp]=useState('')
    const [success,setSuccess]=useState(null)
    const [checkComp,setCheckComp]=useState('')
    const handleForm = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3000/create",{
          id:id,
          name:name,
          dob:dob,
          position:position,
          mngID:mngID,
          dept:deptID,
          hiredate:hiredate
        }).then((res)=>setSuccess(true))
        .catch((err)=>console.log(err))
        
        // axios.post("http://localhost:3000/addManager",{
        //     deptID:deptID,
        //     mngID:mngID,
        //     mngName:mngName
        // }).then((res)=>console.log('Success'))
        // .catch((err)=>console.log(err))

        axios.post("http://localhost:3000/addPayroll",{
          empID:id,
          deptID:deptID,
          comp:comp
        }).then((res)=>setCheckComp(true))
        .catch((err)=>console.log(err))
    }
    return (
      <div className='p-5 mt-5'>
        <Navbar/>
    <div className='mt-5 container-fluid d-flex justify-content-center flex-column align-items-center employees'>
        <h3> Add new employee</h3>
        <p>Enter employee details</p>
        {success ? <p className='text-primary'>Employee added</p> : <p className='text-danger'>Please enter the right details</p>}
      <form className='mt-2 d-flex flex-wrap flex-direction-column col-10 justify-content-center' onSubmit={handleForm}>
        <div className='d-flex flex-column'>
        <label>Employee ID:</label>
        <input className='p-2 m-2' placeholder='ID' type='number' onChange={(event)=>setID(event.target.value)} required/>
        <label>Employee name:</label>
        <input className='p-2 m-2' placeholder='Name' onChange={(event)=>setName(event.target.value)} required/>
        <label>Date of Birth: </label>
        <input className='p-2 m-2' placeholder='Date of Birth' type='date' onChange={(event)=>setDOB(event.target.value)} required/>
        <label>Employee position: </label>
        <input className='p-2 m-2' placeholder='Position' onChange={(event)=>setPosition(event.target.value)} required/>
      <label>Department ID</label>
        <input className='p-2 m-2' placeholder='ID' type='number' onChange={(event)=>setDeptID(event.target.value)} required/>
        </div>
        <div className='d-flex flex-column'>
        <label>Employee hiring date:</label>
        <input className='p-2 m-2' placeholder='Hiring Date' type='date' onChange={(event)=>setHireDate(event.target.value)} required/>
        <label>Manager ID</label>
        <input className='p-2 m-2' placeholder='number' onChange={(event)=>setMngID(event.target.value)} required/>
        {/* <label>Manager Name</label>
        <input className='p-2 m-2' placeholder='name' onChange={(event)=>setMngName(event.target.value)} required/> */}
        <label>Compensation</label>
        <input className='p-2 m-2' placeholder='pay' type='number' onChange={(event)=>setComp(event.target.value)} required></input>
        </div>
        <button className="btn bg-dark text-white mt-3 col-10" onClick={handleForm}> Add employee</button>
        <p className='mt-2'>
        </p>
      </form>
      </div>
    </div>
  )
}

export default Create
