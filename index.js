const bmi = require('./bmi');
const retirement = require('./retirement');
const shortestDistance = require('./shortestDistance');
const emailVerifier = require('./emailVerifier');
const splitTip = require('./splitTip');
const sql = require('./sql');
const prompt = require('prompt');
//const colors = require('colors/safe')


//Tried to put this in a while loop, but prompt didn't like that.
//Wouldn't stop for input for some reason.
prompt.start();
console.log(('\nEnter the number of the program you would like to run:\n' +
            //'[0]  Exit\n' +
            '[1]  Body Mass Index\n' +
            '[2]  Retirement\n' +
            '[3]  Shortest Distance\n' +
            '[4]  Email Verifier\n' +
            '[5]  Split the Tip\n'));
prompt.get('choice', (err,res) => {
  switch (parseInt(res.choice)) {

    /*case 0:
    run = 0;
    break;*/

    case 1:
    console.log('\nWelcome to the \'Body Mass Index\' function!' +
                '\nPlease enter your height and weight:\n');
    prompt.get(['feet','inches','weight'], (err,res) => {
      console.log(bmi(parseInt(res.feet,10), parseInt(res.inches,10), parseInt(res.weight,10)));
    });
    break;

    case 2:
    console.log('\nWelcome to the \'Retirement\' function!' +
                '\nPlease enter your age, annual salary, percentage (as a decimal) of salary saved, and desired amout to be saved:\n');
    prompt.get(['age','salary','percentage','desired'], (err,res) => {
      console.log(retirement(parseInt(res.age,10), parseInt(res.salary,10), parseFloat(res.percentage), parseFloat(res.desired)));
    });
    break;

    case 3:
    console.log('\nWelcome to the \'Shortest Distance\' function!' +
                '\nPlease input 2 points:\n');
    prompt.get(['x1','y1','x2','y2'], (err,res) => {
      console.log(shortestDistance(parseFloat(res.x1), parseFloat(res.y1), parseFloat(res.x2), parseFloat(res.y2)));
    });
    break;

    case 4:
    console.log('\nWelcome to the \'Email Verifier\' function!' +
                '\nPlease input a string that could be an email:\n');
    prompt.get('email', (err,res) => {
      console.log(emailVerifier(res.email));
    });
    break;

    case 5:
    console.log('\nWelcome to the \'Split the Tip\' function!' +
                '\nPlease input the total of your meal and the amount of people to split between:\n');
    prompt.get(['price','people'], (err,res) => {
      console.log(splitTip(parseFloat(res.price), parseInt(res.people,10)));
    });
    break;

    default:
    console.log('\nOops, that doesn\'t look like valid input.\n');
  }
});
