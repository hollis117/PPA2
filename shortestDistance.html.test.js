const shortestDistance = require('./shortestDistance');
const nock = require('nock');
const axios = require('axios');
const invalid = "Oops. It seems like your input is invalid."

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
