function reverseAString(str) {
  return [...str].reverse().join('');
}

console.log(reverseAString("hello"));
console.log(reverseAString("Howdy"));