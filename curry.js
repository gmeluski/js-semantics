var babyAnimals = function (a) {
  return function (b) {
    var result = 'i love '.concat(a).concat(' and ').concat(b);

    return result;
  };
};

function curriedMultiply(x) {
  return function (y) {
    return x * y;
  };
}

function curriedSum(x) {
  return function(y) {
    return x + y;
  };
}

function sumFour(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

/**
* automatically curry shit for ppl
*
* @param {Function} fx
*/
function autoCurry (fx) {
  var arity = fx.length;

  return function f1() {
    var args = Array.prototype.slice.call(arguments, 0);

    if (args.length >= arity) {
      // call the function with this = null
      return fx.apply(null, args);
    } else {
      return function f2() {
        var args2 = Array.prototype.slice.call(arguments, 0);

        return f1.apply(null, args.concat(args2));
      };
    }
  };
}

module.exports.babyAnimals = babyAnimals;
module.exports.curriedMultiply = curriedMultiply;
module.exports.curriedSum = curriedSum;
module.exports.sumFour = sumFour;
module.exports.autoCurry = autoCurry;
