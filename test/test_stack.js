var chai = require('chai');
var expect = chai.expect;
var Stack = require('../stack.js');

describe('some basics of the stack', function () {
  var testStack = new Stack();

  it('performs core operations', function () {
    var testValue = 3;

    expect(testStack.isEmpty()).to.be.true;
    testStack.push(testValue);
    expect(testStack.isEmpty()).to.be.false;
    expect(testStack.peek()).to.equal(testValue);
    testStack.pop();
    expect(testStack.isEmpty()).to.be.true;
  });

});
