function binary_search(arr, item) {
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    var mid = Math.floor((first + last) / 2);
    if (arr[mid] < item) {
      first = mid + 1;
    } else if (arr[mid] > item) {
      last = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binary_search([2, 4, 6, 7, 9, 9], 9));
