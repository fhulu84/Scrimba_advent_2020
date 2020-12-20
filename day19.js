function alphabetSubsequence(str) {
  str = str.toLowerCase();
  return [...new Set([...str].sort())].join('') === str;
}

console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("zba"));
console.log(alphabetSubsequence("Aabc"));
console.log(alphabetSubsequence("GHLNZ"));
