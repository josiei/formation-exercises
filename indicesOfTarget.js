// Given an array and a target value X, return an array of all indices containing value X.

//happy case: [1, 2, 3, 2, 4] target = 2 => [1, 3]
//edge case: [] target = 2 => []

function indicesOfTarget(input, target) {
  const indexArr = []
  for(let i = 0; i < input.length; i++){
    if(input[i] === target){
      indexArr.push(i);
    }
  }
  return indexArr;
}

console.log(indicesOfTarget([1, 2, 3, 2, 4], 2))
console.log(indicesOfTarget([], 2))
