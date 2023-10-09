"use strict";
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class ques {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.last) {
      this.last = newNode;
      this.first = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.size++;
    return newNode;
  }
  deque() {
    if (!this.first) {
      return undefined;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return this;
  }
}

var enq = new ques();
