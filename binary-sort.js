function binaryFind(needle) {
  var lowerBound = 0;
  var upperBound = this.length - 1;
  var middle;
  var currentValue;
  var division;

  while (lowerBound <= upperBound) {
    // get the middle of the upper and lower bound
    middle = Math.floor((lowerBound + upperBound) / 2);
    // get the value out of that index
    currentValue = this[middle];
    // if that value = the needle value, then return
    if (currentValue === needle) {
      return middle;
    }

    // if the currentValue < needle value, we are too low, make the lowerBound the middle
    if (currentValue < needle) {
      lowerBound = middle + 1;
    }
    // if that currentValue > needle value, we are too high, set the upperbound to the middle
    if (currentValue > needle) {
      upperBound = middle - 1;
    }
    // repeat until the lowerbound is greater than the upperbound
  }
}


var searchFind = 88;
var disGuy = [1, 2, 88, 55, 6, 7, 22, 3, 4, 68];
var foundIndex;

disGuy.sort(function (a, b) {
  return a > b ? true: false;
});

foundIndex = binaryFind.call(disGuy, searchFind);
console.log(foundIndex);

