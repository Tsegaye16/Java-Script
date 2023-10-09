"use strict";
class hash {
  constructor(size = 4) {
    this.keymap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let weird_prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weird_prime + value) % this.keymap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keymap[index]) {
      this.keymap[index] = [];
    }
    this.keymap[index].push([key, value]);
  }
}
let ht = new hash();
