"use strict";
function selection_sort(arr) {
  console.log("*******First array********");
  console.log(arr);
  console.log("**********************************");
  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }

    if (i != small) {
      console.log(`ROUND ${i} is starting......`);
      console.log(arr);
      let temp = arr[i];
      arr[i] = arr[small];
      arr[small] = temp;
      console.log(
        `Round ${i} result ${arr} || (${arr[i]} , ${arr[small]}) swaped`
      );
    }
  }
  console.log(arr);
}
let arr1 = [3, 1, 6, 4, 9];
selection_sort(arr1);
