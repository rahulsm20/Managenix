const db= require('../db/connect')
const viewMng = (req,res)=>{
    db.query('SELECT * FROM manager',
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

module.exports=viewMng