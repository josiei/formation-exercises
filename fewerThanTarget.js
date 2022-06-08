// Given an array and a target count X, return true if there are fewer than X distinct values in the array. For example, given [1, 2, 2, 3, 3], 4 return true because there are only 3 distinct values 1, 2 and 3.

//[1, 2, 2, 3, 3], 3 => false (there are exactly 3 distinct values)

function fewerThanTargetDistinct(input, target) {
  const mapValues = {};

  for(let i = 0; i < input.length; i++){
    if(mapValues[input[i]]){
      mapValues[input[i]] += 1;
    } else {
      mapValues[input[i]] = 1;
    }
  }

  if(Object.keys(mapValues).length < target){
    return true;
  }
  return false;
}

console.log(fewerThanTargetDistinct([1, 2, 2, 3, 3], 3))
console.log(fewerThanTargetDistinct([1, 2, 2, 3, 3], 4))
