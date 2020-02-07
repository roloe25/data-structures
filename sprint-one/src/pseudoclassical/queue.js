var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.nextOut = 0;
  this.last = 0;
};


Queue.prototype.dequeue = function () {
  if (Object.keys(this.storage).length === 0) {
    return 0;
  }
  this.nextOut++;
  var next = this.storage[this.nextOut];
  delete this.storage[this.nextOut];
  return next;
};

Queue.prototype.enqueue = function (string) {
  this.last++;
  this.storage[this.last] = string;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};


