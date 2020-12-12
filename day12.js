function validTime(str) {
  const [h, min] = str.split(":");
  return h >= 0 && h < 25 && min >= 0 && min < 60;
}

console.log(validTime("13:58"))
console.log(validTime("25:51"))
console.log(validTime("02:76"))