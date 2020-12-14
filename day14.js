function arrayMaximalAdjacentDifference(nums) {
  return nums.reduce((diff, n, i) => {
    return (i < nums.length-1) ? Math.max(Math.abs(n - nums[i+1]), diff) : diff;
  }, Number.NEGATIVE_INFINITY);
}


console.log(arrayMaximalAdjacentDifference([2,4,1,0]));
console.log(arrayMaximalAdjacentDifference([2,9,1,0]));
console.log(arrayMaximalAdjacentDifference([-2,-9,1,0]));

