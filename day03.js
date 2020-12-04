function chunkyMonkey(values, size) {
  let resultArr = [];
  for(let i=0; i<values.length; i+=size){
      resultArr.push(values.slice(i, i+size));
  }
  return resultArr;
}

console.log(chunkyMonkey([3,5,8,9], 1));
console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));