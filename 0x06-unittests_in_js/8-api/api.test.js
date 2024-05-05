const request = require('request');
const { expect } = require('chai');

const server = require('./api');

describe('Index Page', function() {
    it('should return status code 200', function(done) {
        request.get('http://localhost:7865/', function(error, response) {
            if (error) {
                done(error);
            } else {
                expect(response.statusCode).to.equal(200);
                done();
            }
        });
    });

    it('should return the correct result', function(done) {
        request.get('http://localhost:7865/', function(error, response, body) {
            if (error) {
                done(error);
            } else {
                expect(body).to.equal('Welcome to the payment system');
                done();
            }
        });
    });

});
