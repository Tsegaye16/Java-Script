"use strict";
function bubble_sort(arr) {
  console.log("Initial list");
  console.log(arr);
  console.log("Starting sorting......");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr, arr[j], arr[j + 1]);
    }
  }
  console.log("final answer");
  console.log(arr);
}
let array = [4, 3, 2, 1];
bubble_sort(array);

//Optimized code for bubble sort

function opt_bubble_sort(arr) {
  console.log("Initial list");
  console.log(arr);
  console.log("Starting sorting......");
  var noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
      console.log(arr, arr[j], arr[j + 1]);
    }
    if (noSwap) {
      break;
    }
  }
  console.log("final answer");
  console.log(arr);
}
let ar1 = [9, 1, 2, 6, 3, 4, 5, 7, 8];
opt_bubble_sort(ar1);
