const HashTable = require('../data-structures/HashTable');

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Given an array = [2,5,5,2,3,5,1,2,4]:
// It should return 5

const firstRecurringCharacter = arr => {
  const hashTable = new HashTable();

  for (let i = 0; i < arr.length; i++) {
    if (hashTable.has(arr[i])) return arr[i];
    hashTable.set(arr[i], i);
  }

  return undefined;
};
