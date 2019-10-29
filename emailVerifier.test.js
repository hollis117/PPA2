const emailVerifier = require('./emailVerifier');

describe('email verifier returns the correct values when given input', function() {
  it('checks for functionality', () => {
    expect(emailVerifier('ckalaf@ufl.edu')).toMatch('Oops. It looks like this function wasn\'t implemented.');
  });
});
