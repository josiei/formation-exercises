// Q. Given an unsorted array, perform selection sort in ascending order.

// Examples:
// • Given an array: [1] // returns [1]
// • Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

function selectionSort(array) {
  // Write your code here.
  let i = 0;
  while(i < array.length){
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[i]){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    i++;
  }
  return array;
}

// Test Cases
console.log(selectionSort([])) // []
console.log(selectionSort([1])) // [1]
console.log(selectionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
