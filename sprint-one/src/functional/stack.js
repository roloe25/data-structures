var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.push = function(value) {
    //loop and make all keys add by one
    //then add element with key one
    storage[someInstance.size() + 1] = value;

  };

  someInstance.pop = function() {
    var popped = storage[someInstance.size()];
    delete storage[someInstance.size()];
    return popped;

  };

  someInstance.size = function() {
    var currSize = Object.keys(storage).length;
    return currSize;
  };

  return someInstance;
};