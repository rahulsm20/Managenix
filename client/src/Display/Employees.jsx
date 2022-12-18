import React from 'react'
import axios from 'axios'
import { useState,useEffect,useMemo} from 'react'
import Table from 'react-bootstrap/Table'
import Navbar from '../Home/Navbar'
const Employees = () => {
    const [employeeList,setEmployeeList]=useState([{
        id:"",
        name:"",
        dob:"",
        position:""
    }]) 
    const [query,setQuery]=useState('')
    useEffect(()=>{
        axios.get("http://localhost:3000/employees")
        .then((res)=>setEmployeeList(res.data))
        .catch((err)=>console.log(err))
    },[])
    const filteredEmployees = useMemo(() => {
        return employeeList.filter((employee) => {
        return employee.name.toLowerCase().includes(query.toLowerCase());
        })},[employeeList,query]);
  return (
        <div>
          <Navbar/>
        <h1 className='mt-5 p-5'> Employees </h1>
        <input placeholder='Search for an employee' className='p-3 mx-5' role="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)}}></input>
    <div className='mt-5 mx-auto'>
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date of birth 📅 
            <code>
                (YYYY-MM-DD)
            </code>
          </th>
          <th>Position 📍 </th>
          <th>Department 🏢</th>
          <th>Hiring Date 🤝
            <code>
                (YYYY-MM-DD)
            </code>
          </th>
          <th>Manager Name</th>
          <th>Yearly Compensation (INR) </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredEmployees.map((employee,key)=>
        <tr key={key}>    
          <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{String(employee.dateOfBirth).substring(0,10)}</td>
        <td>{employee.position}</td>
        <td>{employee.deptName}</td>
        <td>{String(employee.hireDate).substring(0,10)}</td>
        <td>{employee.mngName}</td>
        <td>{employee.comp}</td>
        <td>
            <ul className='list-unstyled d-flex '>
                <li>
                    <button className="btn bg-primary m-1">Edit</button>
                    </li>
                <li>
                    <button className="btn bg-danger m-1">Delete</button>
                </li>
                </ul>
                </td>
        </tr>)}
      </tbody>
    </Table>
        </div>
    </div>
  )
}

export default Employees
