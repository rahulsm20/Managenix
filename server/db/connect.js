const mysql=require('mysql2')
require('dotenv').config()
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "dafuq3579@",
    database: "employee",
  });

module.exports = db