//app.js

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '192.168.99.100',
  user: 'tester',
  password: 'tester',
  database: 'ppa2'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
