const splitTip = require('./splitTip');
const invalid = 'Oops. That looks like invalid input.'

describe('split tip calculator returns the correct values when given input', function() {
  it('checks for correct return type', () => {
    expect(typeof((splitTip(7.24, 2)))).toMatch('string');
  });
  it('checks for correct return', () => {
    expect(splitTip(8,2)).toMatch('Each person owes $4.6');
  });
  it('test for uneven amounts', () => {
    expect(splitTip(8,3)).toMatch('2 member(s) owe(s) $3.07 and 1 member(s) owe(s) $3.06');
  });
  it('test for invalid input', () => {
    expect(splitTip('c',8)).toMatch(invalid);
    expect(splitTip(9.45,'string')).toMatch(invalid);
  });
  it('test for negative inputs', () => {
    expect(splitTip(-50.67, 3)).toMatch(invalid);
    expect(splitTip(50.67, -3)).toMatch(invalid);
  });
  it('check for fractions of people', () => {
   expect(splitTip(50.94, 3.5)).toMatch(invalid);
  });
});
