const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = [];
  let i = 0, j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (!arr2[j] || arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray;
};

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));