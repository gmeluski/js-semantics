var chai = require('chai');
var expect = chai.expect;
var Storage = require('../storage.js');

describe('the storage object', function () {
  it('should push the elements', function() {
    var basicStore = new Storage();

    expect(basicStore.fillStore().getStorage().length).to.equal(11);
  });

  it('implements bubble sort properly', function () {
    var bubbleStore = new Storage();

    expect(bubbleStore.fillStore().bubbleSort().getStorage()).to.eql([0, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99]);
  });

  it('implements insertion sort properly', function () {
    var insertionStore = new Storage();

    expect(insertionStore.fillStore().insertionSort().getStorage()).to.eql([0, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99]);
  });
});
