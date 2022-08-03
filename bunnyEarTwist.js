// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the usual 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

function bunnyEarsTwist(rabits, count = 0){
  if(rabits === 0) return count;
  if(rabits % 2 === 1){
    count += 2;
  } else {
    count += 3;
  }
  return bunnyEarsTwist(rabits - 1, count);
}



console.log(bunnyEarsTwist(12)) //== 30
console.log(bunnyEarsTwist(10)) //== 25
console.log(bunnyEarsTwist(5)) //== 12
console.log(bunnyEarsTwist(3)) //== 7
console.log(bunnyEarsTwist(2)) //== 5
console.log(bunnyEarsTwist(1)) //== 2
console.log(bunnyEarsTwist(0)) //== 0
