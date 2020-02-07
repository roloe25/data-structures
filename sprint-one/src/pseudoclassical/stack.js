var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.curr = 0;
  this.storage = {};
};

Stack.prototype.push = function(string) {
  this.curr++;
  this.storage[this.curr] = string;
};

Stack.prototype.pop = function () {
  if (Object.keys(this.storage).length === 0) {
    return 0;
  }
  var popped = this.storage[this.curr];
  delete this.storage[this.curr];
  this.curr--;
  return popped;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};


