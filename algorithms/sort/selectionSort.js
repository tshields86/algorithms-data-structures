const swap = require('./helpers');

const selectionSort = arr => {
  let firstUnsorted = 0;

  while (firstUnsorted < arr.length) {
    let minIdx = firstUnsorted;

    for (let i = firstUnsorted; i < arr.length; i++) {
      if (arr[i] < arr[minIdx]) minIdx = i;
    }

    swap(arr, firstUnsorted, minIdx);
    firstUnsorted++;
  }

  return arr;
};

module.exports = selectionSort;