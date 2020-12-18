function arrayPreviousLess(nums) {
  return nums.map((num, i) => {
    let prevLess = nums.slice(0, i).reverse().find(n => n < num);
    return typeof prevLess === 'undefined' ? -1 : prevLess;
  })
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
console.log(arrayPreviousLess([-1, 0, 4, 3, 5]));
console.log(arrayPreviousLess([-1, 2, 1, -2, 3]));