var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.currIndex = 0;
  return stack;
};


stackMethods = {};

stackMethods.pop = function() {
  if (Object.keys(this.storage).length === 0) {
    return 0;
  }
  var popped = this.storage[this.currIndex];
  delete this.storage[this.currIndex];
  this.currIndex--;
  return popped;
};

stackMethods.push = function(string) {
  this.currIndex++;
  this.storage[this.currIndex] = string;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};




