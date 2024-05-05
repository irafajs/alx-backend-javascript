const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(function() {
    consoleSpy.restore();
    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with correct arguments', function() {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
