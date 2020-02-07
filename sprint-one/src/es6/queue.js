class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.storage = {};
    this.nextOut = 0;
    this.last = 0;
  }
  dequeue() {
    if (Object.keys(this.storage).length === 0) {
      return 0;
    }
    this.nextOut++;
    var next = this.storage[this.nextOut];
    delete this.storage[this.nextOut];
    return next;
  }

  enqueue(string) {
    this.last++;
    this.storage[this.last] = string;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

