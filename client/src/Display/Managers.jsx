import {React,useState,useEffect,useMemo} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import Navbar from '../Home/Navbar'
const Departments = () => {
    const [query,setQuery]=useState('')
    const [deptList,setDeptList]=useState([{
        deptID:"",
        mngID:"",
        mngName:""
    }])
    useEffect(()=>{
        axios.get("http://localhost:3000/managers")
        .then((res)=>setDeptList(res.data))
        .catch((err)=>console.log(err))
    },[])
    const filteredDepartments = useMemo(() => {
        return deptList.filter((dept) => {
        return dept.mngName.toLowerCase().includes(query.toLowerCase());
        })},[deptList,query]);
  return (
    <div>
      <Navbar/>
      <div className='p-5'>
        <h1 className='mt-5 mb-5 pt-5'>Managers</h1>
        <input placeholder='Search for an employee' className='p-3 mb-5' role="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)}}></input>
      <Table responsive striped bordered hover variant="dark">
        <thead>
            <tr>
            <th>Manager ID</th>
            <th>Department ID</th>
            <th>Manager Name</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {filteredDepartments.map((dept,key)=>
        <tr key={key}>    
          <td>{dept.mngID}</td>
        <td>{dept.deptID}</td>
        <td>{dept.mngName}</td>
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
    </div>
  )
}

export default Departments
