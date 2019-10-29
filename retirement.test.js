const retirement = require('./retirement');
const nope = 'Goal can\'t be met before the sweet release of death :(';
const invalid = 'Oops. It looks like you entered invalid input.';

describe('retirement calculator returns the correct values when given input', function() {
  it('tests type of return from retirement', () => {
    expect(typeof(retirement(18,15,2,100))).toMatch('string');
  });
  it('tests valid sample input', () => {
    expect(retirement(35,100000,35,1000000)).toMatch('Your goal shall be reached when you are 49.3!');
    expect(retirement(35,100,35,1000000)).toMatch(nope);
  });
  it('tests invalid input', () => {
    expect(retirement('a',100,20,300)).toMatch(invalid);
    expect(retirement(20,'b',20,300)).toMatch(invalid);
    expect(retirement(20,100,'c',300)).toMatch(invalid);
    expect(retirement(20,100,20,'d')).toMatch(invalid);
  });
  it('tests for negative input', () => {
    expect(retirement(-100,10000,35,1000000)).toMatch(invalid);
    expect(retirement(100,-10000,35,1000000)).toMatch(invalid);
    expect(retirement(100,10000,-35,1000000)).toMatch(invalid);
    expect(retirement(100,10000,35,-1000000)).toMatch(invalid);
  });
});
