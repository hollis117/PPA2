const bmi = require('./bmi');
const nock = require('nock');
const axios = require('axios');
const sinon = require('sinon');
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

const scope = nock('http://localhost:5000')
  .get('/bmi')
  .reply(200, {
      results: [
        {
        feet: 6,
        inches: 1,
        output: "Your BMI is 28.4 and that means you are Overweight.",
        timeIn: "2019-10-29T16:40:07.000Z",
        weight: 210
        },
        {
        feet: 6,
        inches: 4,
        output: "Your BMI is 62.8 and that means you are Obese.",
        timeIn: "2019-10-29T16:44:40.000Z",
        weight: 504
        }
      ]
  });

describe ('Testing new http functionality (with a mock)', () => {
  it('Get info from bmi db and check type', () => {
    axios.get('http://localhost:5000/bmi')
    .then(res => res.data)
    .then(response => {
      expect(typeof response).toMatch('object');
    })
    .catch(function(err) {
      if (err) throw err;
    });
  });
  it('Get info from bmi db and check weight', () => {
    axios.get('http://localhost:5000/bmi')
    .then(res => res.data)
    .then(response => {
      expect(response.results[0].weight).toEqual(210);
      expect(response.results[1].weight).toEqual(504);
    })
    .catch(function(err) {
      if (err) throw err;
    });
  });
  it('Get info from bmi db and check feet', () => {
    axios.get('http://localhost:5000/bmi')
    //.then(res => res.data)
    .then(response => {
      expect(response.results[0].feet).toEqual(6);
      expect(response.results[1].feet).toEqual(6);
    })
    .catch(function(err) {
      if (err) throw err;
    });
  });
  it('Get info from bmi db and check inches', () => {
    axios.get('http://localhost:5000/bmi')
    //.then(res => res.data)
    .then(response => {
      expect(response.results[0].inches).toEqual(1);
      expect(response.results[1].inches).toEqual(4);
    })
    .catch(function(err) {
      if (err) throw err;
    });
  });
});


//test('jest framework runs correctly', () => {
//  expect(true).toBeTruthy();
//});
