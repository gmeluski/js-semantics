var chai = require('chai');
var expect = chai.expect;
var curry = require('../curry.js');

describe('curried functions', function () {

  it('curries an animal', function () {
    var babyKoala = curry.babyAnimals('koalas');

    expect(babyKoala('elephants')).to.equal('i love koalas and elephants');
  });

  it('curries a multiplier', function () {
    var multiplier = curry.curriedMultiply(5);

    expect(multiplier(5)).to.equal(25);
  });

  it('curries a sum', function () {
    var mySum = curry.curriedSum(4);

    expect(mySum(12)).to.equal(16);
    expect(curry.curriedSum(4)(5)).to.equal(9);
  });

  it('curries an insane sum', function () {
    var yolo = curry.sumFour(3)(3)(4);

    expect(yolo(4)).to.equal(14);
  });

  it('curries automagically', function () {
    var sumFour = curry.autoCurry(function (a, b, c, d) {
      return a + b + c + d;
    });

    expect(sumFour(1)(2)(3)(4)).to.equal(10);
  });
});
