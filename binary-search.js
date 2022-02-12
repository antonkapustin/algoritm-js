function binarySearch(arr, number) {
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

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// Бинарный поиск рекурсивно

function recursionBinarySearch(arr, number, start, end) {
  let middle = Math.floor((start + end) / 2);

  if (number === arr[middle]) {
    console.log(middle);
    return middle;
  }
  if (number > arr[middle]) {
    return recursionBinarySearch(arr, number, middle + 1, arr.length);
  } else if (number < arr[middle]) {
    return recursionBinarySearch(arr, number, 0, middle - 1);
  }
}

recursionBinarySearch(arr, 15, 0, arr.length);
