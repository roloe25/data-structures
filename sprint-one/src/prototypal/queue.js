var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.nextOut = 0;
  queue.last = 0;
  return queue;
};

var queueMethods = {};

queueMethods.dequeue = function () {
  if (Object.keys(this.storage).length === 0) {
    return 0;
  }
  this.nextOut++;
  var next = this.storage[this.nextOut];
  delete this.storage[this.nextOut];
  return next;
};

queueMethods.enqueue = function (string) {
  this.last++;
  this.storage[this.last] = string;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};




