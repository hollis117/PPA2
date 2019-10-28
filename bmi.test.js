const bmi = require('./bmi');
const invalid = 'Oops. It seems like your input is invalid.';

describe('BMI calculator returns the correct values when given input', function() {
  it('calculates bmi of me', () => {
    expect(bmi(6,1,210)).toMatch("Your BMI is 28.4 and that means you are Overweight.");
  });
  it('output typeof test', () => {
    expect(typeof(bmi(6,1,210))).toMatch('string');
  });
  it('invalid height input test', () => {
    expect(bmi(-9,-1,200)).toMatch(invalid);
  });
  it('invalid weight input test', () => {
    expect(bmi(5,8,-1)).toMatch(invalid);
  });
  it('invalid type input test', () => {
    expect(bmi(5,'a',100)).toMatch(invalid);
    expect(bmi('ab',5,100)).toMatch(invalid);
    expect(bmi(5,7,'b')).toMatch(invalid);
  });
});


//test('jest framework runs correctly', () => {
//  expect(true).toBeTruthy();
//});
