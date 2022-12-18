const db = require('../db/connect')
const addPerm = async(req,res)=>{
    const empID = req.body.empID
    const mngID= req.body.mngID
    const rating = req.body.rating
    db.query('INSERT INTO performance (empID,mngID,rating) VALUES (?,?,?)',[empID,mngID,rating],
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send('Values inserted')
        }
    })
}
module.exports=addPerm