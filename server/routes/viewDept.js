const db= require('../db/connect')
const viewDept = (req,res)=>{
    db.query('select * from department',
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

module.exports=viewDept