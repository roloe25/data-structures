var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.nextOut = 0;
  queue.last = 0;

  _.extend(queue, queueMethods);


  return queue;
};

var queueMethods = {};


queueMethods.enqueue = function (string) {
  this.last++;
  this.storage[this.last] = string;
};

queueMethods.dequeue = function () {
  this.nextOut++;
  var next = this.storage[this.nextOut];
  delete this.storage[this.nextOut];
  return next;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};

