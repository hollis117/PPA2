const shortestDistance = require('./shortestDistance');
const invalid = "Oops. It seems like your input is invalid."

describe('shortestDistance returns the correct values when given input', function() {
  it('calculates shortest distance between easy points', () => {
    expect(shortestDistance(2,1,1,5)).toMatch('The shortest distance between (2,1) and (1,5) is (4.12).');
  });
  it('checks for invalid input', () => {
    expect(shortestDistance('a',1,1,1)).toMatch(invalid);
    expect(shortestDistance(1,'b',1,1)).toMatch(invalid);
    expect(shortestDistance(1,1,'c',1)).toMatch(invalid);
    expect(shortestDistance(1,1,1,'d')).toMatch(invalid);
  });
  it('checks for non-integer input', () => {
    expect(shortestDistance(1.5,2,3,4)).toMatch('The shortest distance between (1.5,2) and (3,4) is (2.5).');
  });
  it('checks for negative input', () => {
    expect(shortestDistance(-2,1,1,5)).toMatch('The shortest distance between (-2,1) and (1,5) is (5).');
  });
});
