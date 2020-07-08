const swap = require('./helpers');

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot && left <= right) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return;

  const index = partition(arr, left, right);
  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);

  return arr;
};

module.exports = quickSort;