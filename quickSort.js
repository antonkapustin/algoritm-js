let arr = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
  3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
  -1, -5, 23,
];

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let middleElement = arr[middle];
  let less = [];
  let greater = [];

  arr.forEach((el, i) => {
    if (i === middle) {
      return;
    }
    if (el < middleElement) {
      less.push(el);
    } else {
      greater.push(el);
    }
  });

  return (arr = [...quickSort(less), middleElement, ...quickSort(greater)]);
}

quickSort(arr);
console.log(quickSort(arr));
