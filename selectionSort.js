function findSmalest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let a = [...arr];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let smallest = findSmalest(a);
    newArr.push(a[smallest]);
    a.splice(smallest, 1);
  }
  console.log(newArr);
}

let a = [5, 3, 6, 7, 2, 10, 1, 4, 15];
selectionSort(a);
