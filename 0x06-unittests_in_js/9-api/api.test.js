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

  describe('Cart Page', () => {
    it('should return status code 200 when :id is a number', (done) => {
      request.get('http://localhost:7865/cart/123', (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('should return status code 404 when :id is not a number', (done) => {
      request.get('http://localhost:7865/cart/abc', (_err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
