var sql = require('./sql');
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
  return "\nYour BMI is " + bmi + " and that means you are " + size + ".";
}
module.exports = bmi;
