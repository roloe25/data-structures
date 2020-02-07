var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var curr = 1;
  var nextOutIndex = 1;
  var nextOut = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[curr] = value;
    curr++;
  };

  someInstance.dequeue = function() {
    nextOut = storage[nextOutIndex];
    delete storage[nextOutIndex];
    nextOutIndex++;
    return nextOut;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};