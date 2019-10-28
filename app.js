/*
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
var qData = {feet: 6, inches: 1, weight: 200, output: 'test', timeIn: new Date().toISOString().slice(0, 19).replace('T', ' ')};
connection.query('INSERT INTO bmi SET ?',qData,(err,res) => {
  if(err) throw err;
  console.log('Inserted!');
});
connection.end();*/
