const reverseStr = str => {
  let rev = '';
  for (let char of str) {
    rev = char + rev;
  }
  return rev;
};

console.log(reverseStr('Travis Shields'));