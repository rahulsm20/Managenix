const db = require('../db/connect')
const addMng = async(req,res)=>{
    const mngID = req.body.mngID
    const deptID= req.body.deptID
    const mngName = req.body.mngName
    db.query('INSERT INTO manager (mngID,deptID,mngName) VALUES (?,?,?)',[mngID,deptID,mngName],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send('Values inserted')
        }
    })
}
module.exports=addMng