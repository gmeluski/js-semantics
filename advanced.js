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
*
* @param {String} haystack
* @param {String} needle
* @return {Boolean}
*/
var hasClassName = function (haystack, needle) {
  var classPattern = new RegExp('(^|\\s)' + needle + '(\\s|$)');

  return classPattern.test(haystack);
};

/**
* writing from scratch, what could go wrong?
*
*/
var getElementsByClassName = function (name) {
  var allElements = document.getElementsByTagName('*');
  var classPattern = new RegExp('(^|\\s)' + name + '(\\s|$)');
  var capturedArray = [];
  var currentElement;

  for (var i = 0; i < allElements.length; i++) {
    currentElement = allElements[i];
    if (classPattern.test(currentElement.className)) {
      capturedArray.push(currentElement);
    }
  }

  return capturedArray;

};

var isPalindrome = function (stringToTest) {
  //remove all spaces
  var compressedString = stringToTest.replace(/\s+/g, '');
  var leftMarker = 0;
  var rightMarker = compressedString.length - 1;

  while (leftMarker <= rightMarker) {
    if (compressedString[leftMarker] !== compressedString[rightMarker]) {
      return false;
    }

    leftMarker++;
    rightMarker--;
  }

  return true;
};


/**
* well this is more currying. but it has a closure
*/
var makeMeluski = function (name) {
  var lastName = 'Meluski';

  return function () {
    return name + ' ' + lastName;
  };
};

var modifyPrototype = function () {
  String.prototype.yReplace = function () {
    return this.replace(/i/g, 'y');
  };

};

var isBalanced = function (stringToCheck, frontChar, backChar) {
  var asArray = stringToCheck.split('');
  var i = 0;
  var currentChar = asArray[i];
  var backwardsArray = Array.prototype.slice.call(asArray);
  var j = 0;
  var backwardsChar;

  backwardsArray.reverse();
  backwardsChar = backwardsArray[j];

  while (i < asArray.length && currentChar === frontChar) {
    i++;
    currentChar = asArray[i];
  }

  while (j < backwardsArray.length && backwardsChar === backChar) {
    j++;
    backwardsChar = backwardsArray[j];
  }

  return i === j;

};

module.exports.sum = sum;
module.exports.isInteger = isInteger;
module.exports.hasClassName = hasClassName;
module.exports.getElementsByClassName = getElementsByClassName;
module.exports.isPalindrome = isPalindrome;
module.exports.makeMeluski = makeMeluski;
module.exports.modifyPrototype = modifyPrototype;
module.exports.isBalanced = isBalanced;
