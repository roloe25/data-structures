//made syntax error why does this not work
//for a quiz questions

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.currIndex = 0;
  stack.stackStorage = {};
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};



stackMethods.push = function(string) {
  this.currIndex++;
  this.stackStorage[this.currIndex] = string;
};

stackMethods.pop = function() {
  if (Object.keys(this.stackStorage).length === 0) {
    return 0;
  } else {
    var popped = this.stackStorage[this.currIndex];
    delete this.stackStorage[this.currIndex];
    this.currIndex--;
    return popped;
  }
};

stackMethods.size = function(string) {
  return Object.keys(this.stackStorage).length;
};

//stackMethods.stackStorage = {};





