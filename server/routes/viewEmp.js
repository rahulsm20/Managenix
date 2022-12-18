const db= require('../db/connect')
const viewEmp = (req,res)=>{
    db.query('select E.* , M.mngName,P.comp,D.deptName from employeedet E, manager M , department D, payroll P where E.mngID=M.mngID and D.deptID=M.deptID;',
    (err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.json(result)
        }
    })
}

module.exports=viewEmp