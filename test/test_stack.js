var chai = require('chai');
var expect = chai.expect;
var Stack = require('../stack.js');

describe('some basics of the stack', function () {

  it('performs core operations', function () {
    var testStack = new Stack();
    var testValue = 3;

    expect(testStack.isEmpty()).to.be.true;
    testStack.push(testValue);
    expect(testStack.isEmpty()).to.be.false;
    expect(testStack.peek()).to.equal(testValue);
    testStack.pop();
    expect(testStack.isEmpty()).to.be.true;
  });

  it('actually stacks', function () {
    var jenga = new Stack();
    var firstPop;
    var nextPop;

    jenga.push(1);
    jenga.push(2);
    jenga.push(3);
    jenga.push(4);
    jenga.push(5);

    firstPop = jenga.pop();
    expect(firstPop).to.equal(5);
    jenga.pop();
    nextPop = jenga.pop();
    expect(nextPop).to.equal(3);
  });

  it('reverses a string', function () {
    var reverseStack = new Stack();
    var testString = 'jimbob';
    var reverseString = 'bobmij';

    expect(reverseStack.cheatReverse(testString)).to.equal(reverseString);
  });

  it('can check brackets', function () {
    var bracketStack = new Stack();
    var bracketString = 'a{b(c]d}e';
    var goodBrackets = 'a{b[c]d}e';

    expect(bracketStack.checkBrackets(bracketString)).to.be.false;
    expect(bracketStack.checkBrackets(goodBrackets)).to.be.true;
  });

});
