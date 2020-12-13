function extractEachKth(nums, index) {
  return nums.filter((n, i) => (i+1) % index !== 0);
}

console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10], 3))