const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('test the first number rounding', () => {
    assert.equal(calculateNumber(1.2, 3), 4);
  });
});

describe('calculateNumber', () => {
  it('tests the second number rounding', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
});

describe('calculateNumber', () => {
  it('tests both number rounding', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
});


describe('calculateNumber', () => {
  it('test both number zero and the right outcome', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
});

describe('calculateNumber', () => {
  it('test first number negative', () => {
    assert.equal(calculateNumber(-1.6, 0), -2);
  });
});

describe('calculateNumber', () => {
  it('test second number negative', () => {
    assert.equal(calculateNumber(0, -1.3), -1);
  });
});

describe('calculateNumber', () => {
  it('test both number negative', () => {
    assert.equal(calculateNumber(-1.6, -2.9), -5);
  });
});

