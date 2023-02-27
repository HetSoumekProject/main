const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ahlem',
  password : 'password',
  database : ''
}).promise()
connection.connect().then(res=>console.log("db connected")).catch(err=>console.log(err))

module.exports = connection;
// testing