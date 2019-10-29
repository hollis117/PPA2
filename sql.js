//docker pull mysql:latest
//docker run --name mysql -p 3306:3306 -p 50001:50000 -p 8080:8080 -d -e MYSQL_ROOT_PASSWORD='root' mysql:latest

const mysql = require('mysql');
function connect() {
  const connection = mysql.createConnection({
    host: '192.168.99.100',
    user: 'tester',
    password: 'tester',
    database: 'ppa2',
    resultFormat: 'json',
    timezone: 'utc'
  });
  connection.connect((err) => {
    if (err) throw err;
    //console.log('Connected!');
  });
  return connection;
}

function disconnect(connection) {
  connection.end();
}
module.exports = {
  connect: connect,
  disconnect: disconnect
};
