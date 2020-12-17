function differentSymbolsNaive(str) {
  // Set
  return new Set([...str]).size;

  // Array, reduce, includes
  // return [...str].reduce((acc, c) => {
  //   if(!acc.includes(c)) acc.push(c);
  //   return acc;
  // },[]).length;

  // Lodash
  // return _.uniq([...str]).length; 

  // Array, includes, push, slice
  // const symbols = [];
  // while(str.length > 0){
  //   if(!symbols.includes(str[0])) symbols.push(str[0]);
  //   str = str.slice(1);
  // }
  // return symbols.length;
}


console.log(differentSymbolsNaive("cabca"));
console.log(differentSymbolsNaive(""));
console.log(differentSymbolsNaive("c"));
console.log(differentSymbolsNaive("%34acca"));
console.log(differentSymbolsNaive("-2334"));