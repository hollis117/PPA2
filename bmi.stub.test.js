const bmi = require('./bmi');
const sinon = require('sinon');
const invalid = 'Oops. It seems like your input is invalid.';

var stub = sinon.stub();
stub.withArgs(6,1,210).returns("Your BMI is 28.4 and that means you are Overweight.");
stub.withArgs(-9,-1,200).returns(invalid);
stub.withArgs(5,8,-1).returns(invalid);
stub.withArgs(5,'a',100).returns(invalid);
stub.withArgs('ab',5,100).returns(invalid);
stub.withArgs(5,7,'b').returns(invalid);

describe('Testing new DB functionality (with stubs)', () => {
  it('calculates bmi of me (stubs)', () => {
    expect(stub(6,1,210)).toMatch("Your BMI is 28.4 and that means you are Overweight.");
  });
  it('output typeof test (stubs)', () => {
    expect(typeof(stub(6,1,210))).toMatch('string');
  });
  it('invalid height input test (stubs)', () => {
    expect(stub(-9,-1,200)).toMatch(invalid);
  });
  it('invalid weight input test (stubs)', () => {
    expect(stub(5,8,-1)).toMatch(invalid);
  });
  it('invalid type input test (stubs)', () => {
    expect(stub(5,'a',100)).toMatch(invalid);
    expect(stub('ab',5,100)).toMatch(invalid);
    expect(stub(5,7,'b')).toMatch(invalid);
  });
});
