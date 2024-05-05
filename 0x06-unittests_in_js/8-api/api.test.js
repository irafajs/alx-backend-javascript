const request = require('request');
const { expect } = require('chai');

const server = require('./api');

describe('Index Page', () => {
  it('should return status code 200', (done) => {
    request.get('http://localhost:7865/', (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
