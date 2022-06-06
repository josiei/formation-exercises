// To illustrate this pattern, write a function that takes an array and prints out all of the pairs of elements from the array.

const arrayData = [1, 2, 3, 4, 5];

// =>
// [1, 2] [1, 3] [1, 4] [1, 5]
// [2, 3] [2, 4] [2, 5]
// [3, 4] [3, 5]
// [4, 5]

function printAllPairs(array){
  for(let i = 0; i < array.length - 1; i++){
    for(let j = i + 1; j < array.length; j++){
      console.log([array[i], array[j]])
    }
  }
}

printAllPairs(arrayData);
