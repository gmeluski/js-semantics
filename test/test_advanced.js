var chai = require('chai');
var expect = chai.expect;
var advanced = require('../advanced.js');

describe('the sum function', function () {
  it('adds up three arguments', function () {

    expect(advanced.sum(1, 2, 3)).to.equal(6);
  });

  it('adds up four arguments', function () {

    expect(advanced.sum(1, 2, 3, 4)).to.equal(10);

  });

  it('works on an array', function () {
    var data = [1, 2, 3];

    expect(advanced.sum.apply(null, data)).to.equal(6);
  });

});

describe('the integer function', function () {
  it('returns false for some random type', function () {
    expect(advanced.isInteger('string')).to.be.false;
  });

  it('returns true for an integer', function () {
    expect(advanced.isInteger(3)).to.be.true;
  });

  it('returns false for a decimal', function () {
    expect(advanced.isInteger(0.3)).to.be.false;

  });

});
