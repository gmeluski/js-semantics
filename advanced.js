var sum = function () {
  var argumentsArray = Array.prototype.slice.call(arguments);
  var sumTotal = 0;

  console.log(argumentsArray);
  for (var i = 0; i < argumentsArray.length; i++) {
    sumTotal += argumentsArray[i];
  }
  return sumTotal;
};

module.exports.sum = sum;
