class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.curr = 0;
    this.storage = {};
  }

  push(string) {
    this.curr++;
    this.storage[this.curr] = string;
  }

  pop() {
    if (Object.keys(this.storage).length === 0) {
      return 0;
    }
    var popped = this.storage[this.curr];
    delete this.storage[this.curr];
    this.curr--;
    return popped;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
