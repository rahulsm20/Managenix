const mysql=require('mysql2')
require('dotenv').config()
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: (process.env.dbPass),
    database: "employee",
  });

module.exports = db