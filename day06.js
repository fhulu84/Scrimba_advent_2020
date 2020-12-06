function sortByLength(strs) {
  return strs.sort((s1, s2) => s1.length - s2.length);
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]))
console.log(sortByLength(["1", "", "112", "34", "8"]))