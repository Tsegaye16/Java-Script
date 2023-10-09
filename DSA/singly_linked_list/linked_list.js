"use strict";
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let new_tail = current;
    while (current.next) {
      new_tail = current;
      current = current.next;
    }
    this.tail = new_tail;
    this.tail.next = null;
    this.length--;
    return current;
  }
  traverse() {
    let temp = this.head;
    while (temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
  shift() {
    const cur = this.head;
    if (!this.head) {
      return undefined;
    } else if (this.head == this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return cur;
  }
  unshift(val) {
    const newNode = new Node(val);
    newNode.next = null;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    let count = 1;
    let curr = this.head;
    if (index < 0 || index > this.length) {
      return undefined;
    } else {
      while (count !== index) {
        curr = curr.next;
        count++;
      }
      return curr;
    }
  }
  set(index, val) {
    let count = 1;
    let cur = this.head;
    if (!this.head) {
      return undefined;
    } else if (this.head == this.tail) {
      this.head.val = val;
    } else {
      while (count !== index) {
        cur = cur.next;
        count++;
      }
      cur.val = val;
    }
  }
  insert(index, val) {
    let newNode = new Node(val);
    newNode.nex = null;
    if (index < 0 || index > this.length) {
      return undefined;
    } else if (index == this.length) {
      this.push(val);
      this.length++;
    } else if (index == 0) {
      this.unshift(val);
      this.length++;
    } else {
      let count = 1;
      let cur = this.head;
      while (count !== index - 1) {
        cur = cur.next;
        count++;
      }
      newNode.next = cur.next;
      cur.next = newNode;
    }
    this.length++;
  }
  remove(index) {
    if (index < 1 || index > this.length) {
      return undefined;
    } else if (index == 1) {
      this.shift();
      this.length--;
    } else if (index == this.length) {
      this.pop();
      this.length--;
    } else {
      let cur = this.head;
      let count = 1;
      while (count != index - 1) {
        cur = cur.next;
        count++;
      }
      cur.next = cur.next.next;
      this.length--;
    }
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let nextNode = null;
    let i = 1;
    while (i <= this.length) {
      nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
      i++;
    }
  }
  reverse1() {
    let data = [];
    function printreverse(node) {
      if (!node) {
        return null;
      }
      printreverse(node.next);
      data.push(node);
    }
    printreverse(this.head);
    return data;
  }
  traverse2() {
    const rev = (node) => {
      if (!node || !node.next) {
        this.head = node;
        return;
      }
      rev(node.next);
      node.next.next = node;

      node.next = null;
    };
    rev(this.head);
  }
}
let linked = new LinkedList();
