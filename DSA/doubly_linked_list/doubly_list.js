"use strict";
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class doubly {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;

      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let popped = this.tail;
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    let removed = this.head;
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return this;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 1) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    let count = 0;
    let temp = this.head;
    if (index < 0 || index > this.length) {
      return undefined;
    } else {
      while (count !== index - 1) {
        temp = temp.next;
        count++;
      }
      return temp;
    }
  }
  set(index, val) {
    let count = 0;
    let temp = this.head;
    if (index < 0 || index > this.length) {
      return undefined;
    } else {
      while (count !== index - 1) {
        temp = temp.next;
        count++;
      }
      temp.val = val;
    }
  }
  traverse_forward() {
    let temp = this.head;
    while (temp) {
      console.log(temp);
      temp = temp.next;
    }
  }

  insert(index, val) {
    let newNode = new Node(val);
    let temp = this.get(index);
    if (index < 1 || index > this.length) {
      return undefined;
    }
    if (index === 1) {
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    } else {
      newNode.next = temp;
      newNode.prev = temp.prev;
      temp.prev = newNode;
      newNode.prev.next = newNode;
    }
    this.length++;
    return newNode;
  }
  remove(index) {
    let removed = this.get(index);
    if (index < 1 || index > this.length) {
      return undefined;
    }
    if (index === 1) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
    }
    if (index === 1) {
      this.head = null;
      this.tail = null;
    } else {
      removed.prev.next = removed.next;
      removed.next.prev = removed.prev;
    }
    this.length--;
    return removed;
  }
  traverse_backward() {
    let temp = this.tail;
    while (temp) {
      console.log(temp);
      temp = temp.prev;
      return temp;
    }
  }
}

let linked = new doubly();
