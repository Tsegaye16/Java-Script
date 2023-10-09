"use strict";
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
    return this;
  }
  pop() {
    if (!this.top) {
      return undefined;
    }
    let removed = this.top;
    this.top = this.top.next;

    this.size--;
    removed.next = null;
    return this;
  }
  peek() {
    return this.top ? this.top.val : undefined;
  }
  isempty() {
    return !!(this.size === 0);
  }
  getsize() {
    return this.size;
  }
}

var stack = new Stack();
