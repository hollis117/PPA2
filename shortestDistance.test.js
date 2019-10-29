const shortestDistance = require('./shortestDistance');
const nock = require('nock');
const axios = require('axios');
const sinon = require('sinon');
const invalid = "Oops. It seems like your input is invalid."

describe('shortestDistance returns the correct values when given input', () => {
  it('Checks for correct return type', () => {
    expect(typeof(shortestDistance(2,1,1,5))).toMatch('string');
  });
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

var stub = sinnon.stub();
stub.withArgs(2,1,1,5).returns('The shortest distance between (2,1) and (1,5) is (4.12).');
stub.withArgs('a',1,1,1).returns(invalid);
stub.withArgs(1,'b',1,1).returns(invalid);
stub.withArgs(1,1,'c',1).returns(inavlid);
stub.withArgs(1,1,1,'d').returns(invalid);
stub.withArgs(1.5,2,3,4).returns('The shortest distance between (1.5,2) and (3,4) is (2.5).');
wtub.withArgs(-2,1,1,5).returns('The shortest distance between (-2,1) and (1,5) is (5).');

describe('Testing new DB functionality (with stubs)', () => {
  it('Checks for correct return type (stub)', () => {
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

const scope = nock('http://localhost:5000')
  .get('/shortestDistance')
  .reply(200, {
    results: [
      {
      output: "↵The shortest distance between (7,5) and (9,1) is (4.47).",
      timeIn: "2019-10-29T15:14:20.000Z",
      x1: 7,
      x2: 9,
      y1: 5,
      y2: 1
      },
      {
      output: "↵The shortest distance between (5,7) and (8,9) is (3.61).",
      timeIn: "2019-10-29T15:15:42.000Z",
      x1: 5,
      x2: 8,
      y1: 7,
      y2: 9
      }]
  });

  describe ('Testing new http functionality (with a mock)', () => {
    it('Get info from shortest distance db and check type', () => {
      axios.get('http://localhost:5000/shortestDistance')
      .then(res => res.data)
      .then(response => {
        expect(typeof response).toMatch('object');
      })
      .catch(function(err) {
        if (err) throw err;
      });
    });
    it('Get info from shortest distance db and check x1', () => {
      axios.get('http://localhost:5000/shortestDistance')
      .then(res => res.data)
      .then(response => {
        expect(response.results[0].x1).toEqual(7);
        expect(response.results[1].x1).toEqual(5);
      })
      .catch(function(err) {
        if (err) throw err;
      });
    });
    it('Get info from shortest distance db and check y1', () => {
      axios.get('http://localhost:5000/shortestDistance')
      .then(res => res.data)
      .then(response => {
        expect(response.results[0].y1).toEqual(5);
        expect(response.results[1].y1).toEqual(7);
      })
      .catch(function(err) {
        if (err) throw err;
      });
    });
    it('Get info from shortest distance db and check x2', () => {
      axios.get('http://localhost:5000/shortestDistance')
      .then(res => res.data)
      .then(response => {
        expect(response.results[0].x2).toEqual(9);
        expect(response.results[1].x2).toEqual(8);
      })
      .catch(function(err) {
        if (err) throw err;
      });
    });
    it('Get info from shortest distance db and check y2', () => {
      axios.get('http://localhost:5000/shortestDistance')
      .then(res => res.data)
      .then(response => {
        expect(response.results[0].y2).toEqual(1);
        expect(response.results[1].y2).toEqual(9);
      })
      .catch(function(err) {
        if (err) throw err;
      });
    });
  });
