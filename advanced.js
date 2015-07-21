/**
* take a variable number of arguments and sum them up
*
* @return {Number}
*/
var sum = function () {
  var argumentsArray = Array.prototype.slice.call(arguments);
  var sumTotal = 0;

  for (var i = 0; i < argumentsArray.length; i++) {
    sumTotal += argumentsArray[i];
  }
  return sumTotal;
};

/**
* is it an integer? a float? SOMETHING ELSE???
*
* @param {???} anything
* @return {Boolean}
*/
var isInteger = function (toTest) {
  if (typeof toTest === 'number') {
    return toTest % 1 === 0;
  }

  return false;
};

/**
* decide whether the string is found inside the other string
*/
var classRegEx = function () {

};

module.exports.sum = sum;
module.exports.isInteger = isInteger;
