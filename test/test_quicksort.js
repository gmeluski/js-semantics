var chai = require('chai');
var expect = chai.expect;
var Quicksort = require('../Quicksort.js');

describe('quicksort!', function () {
  var items = [4, 2, 6, 5, 3, 9];
  var finalList = [2, 3, 4, 5, 6, 9];

  it('works with a simple array', function () {
    var quicksort = new Quicksort(items);

    expect(quicksort.getList()).to.eql(finalList);
  });

});
