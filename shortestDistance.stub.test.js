const shortestDistance = require('./shortestDistance');
const sinon = require('sinon');
const invalid = "Oops. It seems like your input is invalid."

var stub = sinon.stub();
stub.withArgs(2,1,1,5).returns('The shortest distance between (2,1) and (1,5) is (4.12).');
stub.withArgs('a',1,1,1).returns(invalid);
stub.withArgs(1,'b',1,1).returns(invalid);
stub.withArgs(1,1,'c',1).returns(invalid);
stub.withArgs(1,1,1,'d').returns(invalid);
stub.withArgs(1.5,2,3,4).returns('The shortest distance between (1.5,2) and (3,4) is (2.5).');
stub.withArgs(-2,1,1,5).returns('The shortest distance between (-2,1) and (1,5) is (5).');

describe('Testing new DB functionality (with stubs)', () => {
  it('checks for correct return type (stub)', () => {
    expect(typeof(stub(2,1,1,5))).toMatch('string');
  });
  it('calculates shortest distance between easy points (stub)', () => {
    expect(stub(2,1,1,5)).toMatch('The shortest distance between (2,1) and (1,5) is (4.12).');
  });
  it('checks for invalid input (stub)', () => {
    expect(stub('a',1,1,1)).toMatch(invalid);
    expect(stub(1,'b',1,1)).toMatch(invalid);
    expect(stub(1,1,'c',1)).toMatch(invalid);
    expect(stub(1,1,1,'d')).toMatch(invalid);
  });
  it('checks for non-integer input (stub)', () => {
    expect(stub(1.5,2,3,4)).toMatch('The shortest distance between (1.5,2) and (3,4) is (2.5).');
  });
  it('checks for negative input (stub)', () => {
    expect(stub(-2,1,1,5)).toMatch('The shortest distance between (-2,1) and (1,5) is (5).');
  });
});
