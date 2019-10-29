function retirement (age, salary, saved, desired) {
  //No interest on this money? Just, hiding under your mattress retirement fund
  if((isNaN(age) || isNaN(salary) || isNaN(saved) || isNaN(desired) || age > 99 || age < 1 || salary < 1 || saved < 0 || desired < 1)) {
    return 'Oops. It looks like you entered invalid input.'
  }
  if(saved > 1) {
    saved /= 100;
  }
  if(saved > 0.35) {
    saved += 0.35;
  } else {
    saved *= 2;
  }
  var time = 100-age;
  var perYear = salary*saved;
  var earned = time*perYear;
  if(desired > earned) {
    return 'Goal can\'t be met before the sweet release of death :(';
  } else {
    var desiredAge = desired/perYear;
    desiredAge = Math.round(desiredAge*10)/10;
    desiredAge += age;
    return 'Your goal shall be reached when you are '+desiredAge+'!'
  }
}
module.exports = retirement;
