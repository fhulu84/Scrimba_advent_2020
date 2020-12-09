function sumOddFibonacciNumbers(n) {
  // 1, 1, 2, 3, 5, 8, 13, ...
  if(n <= 1) return 2; // 1, 1 -> 1 + 1 = 2
  
  let [fprev, fcurr, sum] = [1, 2, 2];
  while(fcurr <= n){
    if(fcurr % 2) sum += fcurr;
    [fprev, fcurr] = [fcurr, fprev + fcurr];
  }
  return sum;
}

console.log(sumOddFibonacciNumbers(10))
console.log(sumOddFibonacciNumbers(13))
console.log(sumOddFibonacciNumbers(1000))
console.log(sumOddFibonacciNumbers(4000000))