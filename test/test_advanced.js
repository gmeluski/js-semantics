var chai = require('chai');
var jsdom = require('jsdom');
var expect = chai.expect;
var advanced = require('../advanced.js');

describe('the sum function', function () {
  it('adds up three arguments', function () {

    expect(advanced.sum(1, 2, 3)).to.equal(6);
  });

  it('adds up four arguments', function () {

    expect(advanced.sum(1, 2, 3, 4)).to.equal(10);

  });

  it('works on an array', function () {
    var data = [1, 2, 3];

    expect(advanced.sum.apply(null, data)).to.equal(6);
  });

});

describe('the integer function', function () {
  it('returns false for some random type', function () {
    expect(advanced.isInteger('string')).to.be.false;
  });

  it('returns true for an integer', function () {
    expect(advanced.isInteger(3)).to.be.true;
  });

  it('returns false for a decimal', function () {
    expect(advanced.isInteger(0.3)).to.be.false;

  });

});

describe('the class string regex', function () {
  var testString = 'me you dupree';

  it('returns true for middle strings', function () {
    expect(advanced.hasClassName(testString, 'you')).to.be.true;
  });

  it('returns true for end strings', function () {
    expect(advanced.hasClassName(testString, 'dupree')).to.be.true;
  });

  it('returns false for no strings', function () {
    expect(advanced.hasClassName(testString, 'homie')).to.be.false;
  });
});

describe('the class name selector', function () {
  it('returns the right number of elements', function () {
    var availableHtml =
      '<html>' +
      '<div class="hello my dolly">yay</div>' +
      '<div class="hello my">yay</div>' +
      '<div class="badness">yay</div>' +
      '<div class="my goodness">yay</div>' +
      '</html>';
    var availableDocument = jsdom.jsdom(availableHtml);

    window = availableDocument.defaultView;
    document = window.document;
    expect(advanced.getElementsByClassName('my').length).to.equal(3);
  });

});

describe('the palindrome function', function () {
  it('returns true when it IS a palindrome', function () {
    expect(advanced.isPalindrome('a but tuba')).to.be.true;
  });

  it('returns false when not', function () {
    expect(advanced.isPalindrome('gregg is')).to.be.false;
  });

});

describe('a simple closure', function () {
  var fullName = advanced.makeMeluski('Gregg');

  it('returns a full name when just given the first', function () {
    expect(fullName()).to.equal('Gregg Meluski');
  });

});

describe('checking the depth of some shit', function () {
  var frontChar = '[';
  var backChar = ']';

  it('tells us if some shit is balanced', function () {
    expect(advanced.isBalanced('[[gregg]]', frontChar, backChar)).to.be.true;

  });

  it('tells us if some shit isnt balanced', function () {
    expect(advanced.isBalanced('[[gregg]', frontChar, backChar)).to.be.false;
  });
});

describe('modifying the prototype', function () {
  var passedString = 'missing';

  advanced.modifyPrototype();

  it('properly modifies a method on the prototype', function () {
    expect(passedString.yReplace()).to.equal('myssyng');
  });

  it('can chain a modified method on the prototype', function () {
    advanced.modifyPrototype();
    expect(passedString.yReplace().charAt(6)).to.equal('g');
  });
});
