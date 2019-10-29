var sql = require('./sql.js');
function bmi(feet, inches, weight) {
  if ((isNaN(feet) || isNaN(inches) || isNaN(weight)) || feet <= 0 || weight <= 0) {
    return "Oops. It seems like your input is invalid.";
  }
  var height = feet*12 + inches;
  var bmiHeight = height * 0.025;
  bmiHeight *= bmiHeight;
  var bmi = (weight*0.45)/bmiHeight;
  bmi = Math.round(bmi*10)/10;
  var size;
  if (bmi <= 18.5) {
    size = "Underweight";
  } else if (bmi <= 24.9) {
    size = "Normal weight";
  } else if (bmi <= 29.9) {
    size = "Overweight";
  } else {
    size = "Obese";
  }
  var output = "Your BMI is " + bmi + " and that means you are " + size + ".";
  var qData = {feet: feet, inches: inches, weight: weight, output: output, timeIn: new Date().toISOString().slice(0, 19).replace('T', ' ')};
  var connection = sql.connect();
  connection.query('INSERT INTO bmi SET ?',qData,(err,res) => {
    if(err) throw err;
  });
  sql.disconnect(connection);
  return "\n"+output;
}
module.exports = bmi;
