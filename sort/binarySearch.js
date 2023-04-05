
// !important, need to put -1 or +1 at middle to make star <= end situation
const binarySearchError = (arr, value) => {
  let start = 0;
  let end = arr.length - 1; //3
  let middle = Math.floor((start + end) / 2); // 1
  if (arr.length < 1) {
    return null;
  }
  // middle = 1
  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) { // 100 < 1
      end = middle - 1;
    } else {
      start = middle + 1; 
      console.log('start',start)
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === value) {
    return middle;
  }
  return -1;
};

console.log(binarySearchError([1, 2, 3, 4], 100));

// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
