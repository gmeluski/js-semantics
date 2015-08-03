function Queue() {
  var storage = [];

  this.insert = function (item) {
    storage.push(item);
  };

  this.remove = function () {
    return storage.shift();
  };

  this.peek = function () {
    return storage[0];
  };
}


module.exports = Queue;
