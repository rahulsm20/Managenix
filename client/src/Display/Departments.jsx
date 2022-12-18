import {React,useState,useEffect,useMemo} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import Navbar from '../Home/Navbar'
const Departments = () => {
    const [query,setQuery]=useState('')
    const [deptList,setDeptList]=useState([{
        deptID:"",
        deptName:"",
        empNumber:""
    }])
    useEffect(()=>{
        axios.get("http://localhost:3000/departments")
        .then((res)=>setDeptList(res.data))
        .catch((err)=>console.log(err))
    },[])
    const filteredDepartments = useMemo(() => {
        return deptList.filter((dept) => {
        return dept.deptName.toLowerCase().includes(query.toLowerCase());
        })},[deptList,query]);
  return (
    <div className='p-5 mt-5'>
      <Navbar/>
        <h1 className='my-5 mb-5'>Departments</h1>
        <input placeholder='Search for an employee' className='p-3 mb-5' role="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)}}></input>
      <Table responsive striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Number of Employees</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {filteredDepartments.map((dept,key)=>
        <tr key={key}>    
          <td>{dept.deptID}</td>
        <td>{dept.deptName}</td>
        <td>{dept.empNumber}</td>
        <td>
            <ul className='list-unstyled d-flex '>
                <li>
                    <button className="btn bg-primary m-1">Edit</button>
                    </li>
                </ul>
                </td>
        </tr>)}
        </tbody>
      </Table>
    </div>
  )
}

export default Departments
