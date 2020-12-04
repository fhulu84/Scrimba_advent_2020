function depositProfit(deposit, rate, threshold) {
  let year = 0, balance = deposit;
  while(balance < threshold){
      balance *= (100 + rate) / 100;
      year++;
  }
  return year;
}

console.log(depositProfit(100, 20, 170));