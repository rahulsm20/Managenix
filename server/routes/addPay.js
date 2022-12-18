const db = require('../db/connect')
const addPay = async(req,res)=>{
    const empID = req.body.empID
    const f = new Intl.NumberFormat("en-in",{
        currency:'INR',
        style:'currency'
    })
    const deptID= req.body.deptID
    const comp = req.body.comp
    db.query('INSERT INTO payroll (empID,deptID,comp) VALUES (?,?,?)',[empID,deptID,comp],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send('Values inserted')
        }
    })
}
module.exports=addPay