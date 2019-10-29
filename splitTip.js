function splitTip (price, people) {
  if ((isNaN(price) || isNaN(people) || (people < 1) || (price < 0) || !(Number.isInteger(people)))) {
    return 'Oops. That looks like invalid input.'
  }
  price *= 1.15;
  var split = (price/people);
  split = Math.round(split*100)/100;
  var rem = split*people;
  rem = Math.round((price-rem)*100);
  if (rem == 0) {
    return '\nEach person owes $'+split
  } else if (rem > 0) {
    var posSplit = split + 0.01;
    posSplit = Math.round(posSplit*100)/100;
    return '\n'+rem+' memeber(s) owe(s) $'+posSplit+' and '+(people-rem)+' memeber(s) owe(s) $'+split;
  } else if (rem < 0) {
    var negSplit = split - 0.01;
    negSplit = Math.round(negSplit*100)/100;
    return '\n'+(people+rem)+' member(s) owe(s) $'+split+' and '+(rem*-1)+' member(s) owe(s) $'+negSplit;
  }
}
module.exports = splitTip;
