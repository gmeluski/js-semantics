function Stack() {
  var storage = [];

  this.push = function (store) {
    storage.push(store);
  };

  this.pop = function () {
    return storage.pop();
  };

  this.peek = function () {
    return storage[storage.length - 1];
  };

  this.isEmpty = function () {
    return storage.length === 0;
  };
}

Stack.prototype.cheatReverse = function (input) {
  var asArray = input.split('');
  var returner = [];

  while (asArray.length > 0) {
    returner.push(asArray.pop());
  }

  return returner.join('');

};

Stack.prototype.checkBrackets = function (stringToCheck) {
  var asArray = stringToCheck.split('');
  var localStack = [];
  var currentCharacter;
  var storedCharacter;

  for (var i = 0; i < asArray.length; i++) {
    currentCharacter = asArray[i];

    switch(currentCharacter) {
      case '(':
      case '[':
      case '{':
        localStack.push(currentCharacter);
        break;

      case ')':
      case ']':
      case '}':
        if (localStack.length > 0) {
          storedCharacter = localStack.pop();
          if ((currentCharacter === ')' && storedCharacter !== '(') ||
            (currentCharacter === ']' && storedCharacter !== '[') ||
            (currentCharacter === '}' && storedCharacter !== '{')) {
            return false;
          }
        } else {
          return false;
        }
        break;
    }
  }
  return true;
};

module.exports = Stack;
