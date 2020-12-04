function centuryFromYear(num) {
  return Math.floor((num-1)/100)+1;
}

console.log(centuryFromYear(1700));
console.log(centuryFromYear(1905));