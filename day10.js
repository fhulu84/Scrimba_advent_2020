function adjacentElementsProduct(nums) {
  let products = [];
  for(let i=1; i<nums.length; i++){
    products.push(nums[i-1] * nums[i]);
  }

  return Math.max(...products);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))