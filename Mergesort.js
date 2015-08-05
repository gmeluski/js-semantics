function Mergesort () {
  var _this = this;
  var finalList = [];

  this.getList = function () {
    return finalList;
  };

  this.addElement = function (element) {
    finalList.push(element);
  };

}

Mergesort.prototype.merge = function (firstList, secondList) {
  var firstIndex = 0;
  var secondIndex = 0;

  // while firstList has length
  // while secondList has length
  while (firstIndex < firstList.length && secondIndex < secondList.length) {
    // compare the first element in first list to the first element in second
    // whichever is smaller, add that to the third array and increment the index
    if (firstList[firstIndex] < secondList[secondIndex]) {
      this.addElement(firstList[firstIndex]);
      firstIndex++;
    } else {
      this.addElement(secondList[secondIndex]);
      secondIndex++;
    }

  }
  // if either one runs out of positions, dump the contents of the other into the index
  if (firstIndex < firstList.length) {
    for (var i = firstIndex; i < firstList.length; i++) {
      this.addElement(firstList[i]);
    }
  }

  // if either one runs out of positions, dump the contents of the other into the index
  if (secondIndex < secondList.length) {
    for (var i = secondIndex; i < secondList.length; i++) {
      this.addElement(secondList[i]);
    }
  }
  return this.getList();
};

Mergesort.prototype.mergeRecursive = function () {


};

module.exports = Mergesort;
