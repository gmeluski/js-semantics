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

module.exports = Stack;
