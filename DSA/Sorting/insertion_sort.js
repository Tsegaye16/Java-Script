"use strict";
function insertion_sort(arr) {
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }
  return arr;
}
let arr = [3, 1, 5, 3, 9, 0];
console.log(insertion_sort(arr));
