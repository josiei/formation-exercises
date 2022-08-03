// We have a number of bunnies, each with two big floppy ears. We want to compute the total number of ears across all the bunnies recursively, without loops or multiplication.

function bunnyEars(num, result = 0){
  if(num === 0) return result;
  result += 2;
  return bunnyEars(num - 1, result);
}

console.log(bunnyEars(12)) //== 24
console.log(bunnyEars(10)) //== 20
console.log(bunnyEars(5)) //== 10
console.log(bunnyEars(3)) //== 6
console.log(bunnyEars(2)) //== 4
console.log(bunnyEars(1)) //== 2
console.log(bunnyEars(0)) //== 0


