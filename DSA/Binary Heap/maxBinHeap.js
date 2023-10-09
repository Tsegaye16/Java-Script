"use strict";
class MaxBinHeap {
  constructor() {
    this.values = [78, 12, 34, 8, 9, 28, 27];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleup();
  }
  bubbleup() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent >= element) {
        break;
      }
      this.values[parentIndex] = element;
      this.values[idx] = parent;
      idx = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown() {
    let index = 0;
    let len = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < len) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < len) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) {
        break;
      }
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let bubble = new MaxBinHeap();
