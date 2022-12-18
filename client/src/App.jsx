import {Routes,Route} from 'react-router-dom'
import Login from './Login/Login'
import Home from './Home/Home'
import Create from './Create/Create'
import Employees from './Display/Employees'
import Departments from './Display/Departments'
import CreateDept from './Create/CreateDept'
import AddMng from './Create/AddMng'
import Managers from './Display/Managers'
import './App.css'
function App() {

  return (
    <div className="text-white">
      <Routes>
        <Route path='/' element ={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/employees' element={<Employees/>}/>
        <Route path='/departments' element={<Departments/>}/>
        <Route path='/createdept' element={<CreateDept/>}/>
        <Route path='/addManager' element={<AddMng/>}/>
        <Route path='/managers' element={<Managers/>}/>
        <Route path='*' element={<h1 className='text-white'>Error 404 Page not found :(</h1>}/>
      </Routes>
    </div>
  )
}

export default App
