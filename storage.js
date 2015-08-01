function ArrayStorage(desiredStore) {
  var storage = (desiredStore) ? desiredStore : [];

  this.addElement = function (store) {
    storage.push(store);
  };

  this.getElement = function (index) {
    return storage[index];
  };

  this.getStorage = function () {
    return storage;
  };

  this.setStorage = function(newStore) {
    storage = newStore;
  };

  this.swap = function (firstPosition, secondPosition) {
    var temp = storage[firstPosition];

    storage[firstPosition] = storage[secondPosition];
    storage[secondPosition] = temp;
  };

}

ArrayStorage.prototype.fillStore = function () {

  this.addElement(77);
  this.addElement(99);
  this.addElement(44);
  this.addElement(55);
  this.addElement(22);
  this.addElement(88);
  this.addElement(11);
  this.addElement(00);
  this.addElement(66);
  this.addElement(33);
  this.addElement(10);

  return this;
};


ArrayStorage.prototype.bubbleSort = function () {
  var localStorage = this.getStorage();
  var nextPosition;

  // a nice loop counting backward from the end of the array
  for (var i = localStorage.length - 1; i > 1; i--) {

    // count forward from the first element to the desired last element
    for (var j = 0; j < i; j++) {
      nextPosition = j + 1;
      if (localStorage[j] > localStorage[nextPosition]) {
        this.swap(j, nextPosition);
      }
    }
  }

  return this;
};

/**
* use a growing range to make comparisons to the left
*/
ArrayStorage.prototype.insertionSort = function () {
  var localStorage = this.getStorage();
  var tempStore;
  var secondIndex;
  var neighbor;

  // start at current index = 1
  for (var i = 1; i < localStorage.length; i ++) {
    // copy the current index's value to a temp variable
    tempStore = localStorage[i];

    // copy the current index to a second index
    secondIndex = i;

    // going to move backwards with the second index
    // compare the neighbor to the value we stored from the right bound

    while (secondIndex > 0 && localStorage[secondIndex - 1] >= tempStore) {
      // if current index -1 is greater than current index, copy current index -1 to current index
      localStorage[secondIndex] = localStorage[secondIndex - 1];
      // now decrement the second index
      secondIndex--;
    }

    // copy temp to current index
    localStorage[secondIndex] = tempStore;

  }

  this.setStorage(localStorage);
  return this;
};


module.exports = ArrayStorage;
