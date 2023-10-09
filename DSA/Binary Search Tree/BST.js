"use strict";
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (current.val === val) {
          return undefined;
        }
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  get(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) {
        return current;
      } else if (current.val < val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return null;
  }

  findMin() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }
  findMax() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  //#######################################
  findMinNode(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  delete(val) {
    this.root = this.deleteNode(this.root, val);
  }

  deleteNode(root, key) {
    if (root === null) {
      return root;
    }

    if (key < root.val) {
      root.left = this.deleteNode(root.left, key);
    } else if (key > root.val) {
      root.right = this.deleteNode(root.right, key);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      let temp = this.findMinNode(root.right);
      root.val = temp.val;

      root.right = this.deleteNode(root.right, temp.val);
    }
    return root;
  }
  //#######################################
  preOrder() {
    this.preOrderHelper(this.root);
  }
  preOrderHelper(root) {
    if (root) {
      console.log(root.val);
      this.preOrderHelper(root.left);
      this.preOrderHelper(root.right);
    }
  }
  inOrder() {
    this.inOrderHelper(this.root);
  }
  inOrderHelper(root) {
    if (root) {
      this.inOrderHelper(root.left);
      console.log(root.val);
      this.inOrderHelper(root.right);
    }
  }
  postOrder() {
    this.postOrderHelper(this.root);
  }
  postOrderHelper(root) {
    if (root) {
      this.postOrderHelper(root.left);

      this.postOrderHelper(root.right);
      console.log(root.val);
    }
  }
  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
  dfsPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }
  dfsPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }
}
const tree = new BST();
