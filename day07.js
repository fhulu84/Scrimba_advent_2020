function countVowelConsonant(str) {
  return [...str.toLowerCase()].reduce((cnt, letter) => {
    if('aeiou'.indexOf(letter) > -1){
      cnt += 1;
    } else if('bcdfghjklmnpqrstvwxyz'.indexOf(letter) > -1) {
      cnt += 2;
    }
    return cnt;
  }, 0);
}


console.log(countVowelConsonant('abcde'));
console.log(countVowelConsonant('Hello world'));