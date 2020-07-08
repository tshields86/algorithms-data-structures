const reverseStrRecursive = ([x, ...xs]) => {
  return x ? [...reverseStrRecursive(xs), x].join('') : [];
};

console.log(reverseStrRecursive('Travis Shields'));