// Q. Given an unsorted array, return the number of unique elements that appear only once in the array.

// Examples:
// • Given an array: [3, 1, 1, 2, 3, 1, 1, 1, 4] // returns 2 (unique elements: 2 and 4)
// • Given an array: [1] // returns 1 (unique element: 1)


function numUniques(array) {
  // Write your code here.
  const map = {}
  let count = 0;
  for(let i = 0; i < array.length; i++){
    if(map[array[i]]){
      map[array[i]] += 1
    } else {
      map[array[i]] = 1;
    }
  }

  Object.keys(map).forEach(element => {
    if(map[element] === 1){
      count += 1;
    }
  });
  return count;
}

// Test Cases
console.log(numUniques([])) // 0
console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
console.log(numUniques([1])) // 1
