function sumOfTwo(nums1, nums2, value) {
  return nums1.some(n => nums2.includes(value-n));
}

console.log(sumOfTwo([1,2,3], [10,20,30,40], 42));
console.log(sumOfTwo([10,20,30,40], [1,2,3], 32));
console.log(sumOfTwo([1,2,3], [4,5,6,7], 10));
console.log(sumOfTwo([1,2,3], [4,5,6], 4));