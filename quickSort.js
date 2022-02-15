let arr = [
  2, 1, 0.4, 0.2, 1.5, 1, 1.1, 1.3, 1.2, 0.2, 0.4, 0.9, 10, 11, 15, 25, 45, 65,
  77, 87, 32, 23, 46, 700, 500, 12, 13, 52, 54, 72, 501,
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
