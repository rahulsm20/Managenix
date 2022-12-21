const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const addEmp = require('./routes/addEmp')
const viewEmp=require('./routes/viewEmp')
const addDept = require('./routes/addDept')
const viewDept = require('./routes/viewDept')
const addMng = require('./routes/addMng')
const addPay = require('./routes/addPay')
const addPerm = require('./routes/addPerm')
const viewMng = require('./routes/viewMng')
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => res.json('Management API live'))
app.post('/create',addEmp)
app.get('/employees',viewEmp)
app.post('/createDept',addDept)
app.get('/departments',viewDept)
app.post('/addManager',addMng)
app.post('/addPayroll',addPay)
app.post('/addPerm',addPerm)
app.get('/managers',viewMng)
app.listen(port, () => console.log(`Listening on ${port}!`))