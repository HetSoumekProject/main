const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'iLUVmFrlF<3',
  database : ''
}).promise()
connection.connect().then(res=>console.log("db connected")).catch(err=>console.log(err))

module.exports = connection;
// testing