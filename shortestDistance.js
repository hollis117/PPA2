var sql = require('./sql');
function shortestDistance (x1,y1,x2,y2) {
  if ((isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2))) {
    return "Oops. It seems like your input is invalid.";
  }
  var shortest = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
  shortest = Math.round(shortest*100)/100;
  var output = '\nThe shortest distance between ('+x1+','+y1+') and ('+x2+','+y2+') is ('+shortest+').';
  var qData = {x1: x1, y1: y1, x2: x2, y2: y2, output: output, timeIn: new Date().toISOString().slice(0, 19).replace('T', ' ')};
  connection = sql.connect();
  connection.query('INSERT INTO shortestDistance SET ?',qData,(err,res) => {
    if(err) throw err;
  });
  sql.disconnect(connection);
  return output;
}
module.exports = shortestDistance;
