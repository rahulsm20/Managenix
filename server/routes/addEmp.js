const db = require('../db/connect')
const addEmp = async(req,res)=>{
    const id = req.body.id
    const name= req.body.name
    const dob = req.body.dob
    const position = req.body.position
    const mngID=req.body.mngID
    const dept = req.body.dept
    const hiredate=req.body.hiredate
    db.query('INSERT INTO employeedet (id,name,dateOfBirth,position,mngID,deptID,hiredate) VALUES (?,?,?,?,?,?,?)',[id,name,dob,position,mngID,dept,hiredate],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send('Values inserted')
        }
    })
}
module.exports=addEmp