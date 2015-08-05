var chai = require('chai');
var expect = chai.expect;
var Mergesort = require('../Mergesort.js');

describe('the merge sort', function () {
  var firstList = [23, 47, 81, 95];
  var secondList = [7, 14, 39, 55, 62, 74];
  var finalList = [7, 14, 23, 39, 47, 55, 62, 74, 81, 95];

  it('combines successfully', function () {
    var merger = new Mergesort();

    expect(merger.merge(firstList, secondList)).to.eql(finalList);
  });

  it('successfully recursively merges', function () {
    var recursionMerge = new Mergesort();

    expect(recursionMerge.mergeRecursive(firstList, secondList)).to.equal(finalList);
  });
});
