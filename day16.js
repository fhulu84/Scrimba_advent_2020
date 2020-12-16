function insertDashes(str) {
  return str.replace(/(\w)(?!(\s|$))/g, "$1-");
}


console.log(insertDashes("1ba caba"));
console.log(insertDashes("aBa caba"));
console.log(insertDashes("aba  caba  eee"));