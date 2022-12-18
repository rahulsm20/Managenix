const db= require('../db/connect')
const addDept = async(req,res) =>{
    const id=req.body.deptID
    const name=req.body.deptName
    db.query('INSERT INTO department (deptID,deptName) VALUES (?,?)',[id,name],
    (err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send('Department added')
        }
    })}

module.exports=addDept