function avoidObstacles(obs) {
  obs.sort((a, b) => a-b); // sort obstacles ascending
  for(let len = 2; len < obs[obs.length-1]; len++){
    const jumps = []; //landing points after each jump
    for(let i = len; i <= obs[obs.length-1]; i += len){
      jumps.push(i);
    }
    jumps.push(jumps[jumps.length-1]+len); //an extra jump to avoid last obstacle

    if(jumps.every(n => !obs.includes(n))) return len; //return jump length if you can avoid all obstacles
  }
  return obs[obs.length-1] + 1; //to be able to avoid this situation [2]
}


console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([8,9]));
console.log(avoidObstacles([5,7,8,9,10]))
console.log(avoidObstacles([2]))
console.log(avoidObstacles([4]))