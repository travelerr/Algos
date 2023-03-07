// Ascending
array.sort((a, b) => a - b);

// Descending
array.sort((a, b) => b - a);

// Swapping
let temp = arr[i];
arr[i] = arr[x];
arr[x] = temp;

// Merge Sort
var findMedianSortedArrays = function (nums1, nums2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    result.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    result.push(nums2[j]);
    j++;
  }
};

// Quick Sort

function quickSort(arr, left = 0, right = arr.length - 1) {
  function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        pivotIndex++;
        let temp = arr[i];
        arr[i] = arr[pivotIndex];
        arr[pivotIndex] = temp;
      }
    }
    let temp = arr[start];
    arr[start] = arr[pivotIndex];
    arr[pivotIndex] = temp;
    return pivotIndex;
  }
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
quickSort([4, 8, 2, 1, 5, 7, 6, 3]);

// Bubble Sort
function bubbleSort(arr) {
  var noSwaps;
  //DOUBLE LOOP!
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      //COMPARE!
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
