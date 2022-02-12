function binarySearch(arr: any[], number: any) {
  let start = 0;
  let end = arr.length - 1;
  let found = false;
  let position = -1;

  do {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === number) {
      found = true;
      position = middle;
    }

    if (arr[middle] > number) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  } while (found === false && start <= end);

  console.log(position);
  return position;
}

let a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
binarySearch(a, 7);
