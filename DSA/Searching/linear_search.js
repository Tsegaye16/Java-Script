function linear_search(arr, item) {
  let flag = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      flag.push(i);
    }
  }
  if (!flag[0]) {
    console.log("the item is not found in the list");
  } else {
    for (let j = 0; j < flag.length; j++) {
      console.log(`the item ${item} is found at the index ${flag}`);
    }
  }
}
linear_search([3, 6, 9, 2, 0, -5, 9], 10);
