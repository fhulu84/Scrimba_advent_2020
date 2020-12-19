function alphabetSubsequence(str) {
  return [...new Set([...str])].join('') === str 
      && [...str].sort((a, b) => a.charCodeAt(0)-b.charCodeAt(0)).join('') === str;
}

console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("zba"));