function merging_array(list1, list2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < list1.length && j < list2.length) {
    if (list2[j] > list1[i]) {
      result.push(list1[i]);
      i++;
    } else {
      result.push(list2[j]);
      j++;
    }
  }
  while (i < list1.length) {
    result.push(list1[i]);
    i++;
  }
  while (j < list2.length) {
    result.push(list2[j]);
    j++;
  }
  return result;
}

function merge_sort(list3) {
  if (list3.length <= 1) {
    return list3;
  }
  let mid = Math.floor(list3.length / 2);
  let left = merge_sort(list3.slice(0, mid));
  let right = merge_sort(list3.slice(mid));

  return merging_array(left, right);
}
let list3 = [3, 2, 5, 8, 9, 5];
console.log(merge_sort(list3));
