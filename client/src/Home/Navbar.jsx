import React,{useState} from 'react'
import {Offcanvas,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <nav className="navbar-nav navbar-expand-lg fixed-top bg-dark mb-5">
        <ul className='list-unstyled d-flex flex-direction-row justify-content-center align-items-center mt-3'>
<li className='ml-3'>
<Button variant="light"  className="" onClick={handleShow}>
      <i className="bi bi-list"></i>
      </Button>
</li>
<li className='text-center nav-item mx-auto'>
      <h4 className=''>Managenix <img src="../../public/logo.png" className='col-1 p-2'/></h4>
</li>
        </ul>
      </nav>
      <Offcanvas show={show} onHide={handleClose} className="bg-dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-white">Choose an action</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      <ul className="list-unstyled  ">
        <li className='p-2'>
            <Link to='/home'>Home</Link>
        </li>
        <li className="p-2">
          <Link to='/createdept'>Add new department</Link>
        </li>
        <li  className="p-2">
          <Link to="/create">
            Add new employee
          </Link>
        </li>
        <li className="p-2">
            <Link to='/addManager'>Add new manager</Link>
        </li>
        <li className="p-2">
          <Link to="/employees">View all employees</Link>
        </li>
        <li className="p-2">
            <Link to='/departments'>View all departments</Link>
        </li>
        <li className="p-2">
            <Link to='/managers'>View all managers</Link>
        </li>
      </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Navbar
