//Given an array, return the first element is repeated if you were to traverse the array from left to right.

//happy case: [1, 2, 3, 1, 2, 2] =≥ 1
// edge case: [1, 2, 3] => null;

function firstRepeatedElement(input) {
  let repeated = {}
  for(let i = 0; i < input.length; i++){
    if(repeated[input[i]]){
      return input[i]
    } else {
      repeated[input[i]] = 1;
    }
  }
  return null;
}

console.log(firstRepeatedElement([1, 2, 3, 1, 2, 2]));
console.log(firstRepeatedElement([1, 2, 3]));
