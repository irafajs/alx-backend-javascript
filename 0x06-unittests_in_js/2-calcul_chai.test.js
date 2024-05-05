const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return the sum of two rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
    });
  });

  describe('SUBTRACT', function() {
    it('should return the difference of two rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 5.6, 3.2)).to.equal(3);
    });
  });

  describe('DIVIDE', function() {
    it('should return the division result of two rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 8.2, 2)).to.equal(4);
    });

    it('should return "Error" if second number is rounded to 0', function() {
      expect(calculateNumber('DIVIDE', 8.2, 0)).to.equal('Error');
        });
    });

	describe('Invalid Type', function() {
    it('should throw an error for an invalid type', function() {
      expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(Error);
    });
  });
});
