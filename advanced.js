var sum = function () {
  var argumentsArray = Array.prototype.slice.call(arguments);
  var sumTotal = 0;

  for (var i = 0; i < argumentsArray.length; i++) {
    sumTotal += argumentsArray[i];
  }
  return sumTotal;
};

var isInteger = function (toTest) {
  if (typeof toTest === 'number') {
    return toTest % 1 === 0;
  }

  return false;
};

var classRegEx = function () {

};

module.exports.sum = sum;
module.exports.isInteger = isInteger;
