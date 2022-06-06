// Write a function that takes an array and reverses its elements in place. Do not use built in methods!

//happy case: [1, 2, 3] => [3, 2, 1]
//edge case: [1] => [1]

function reverse(array) {
  //begin by assigning pointers to start and end idxs
  let start = 0;
  let end = array.length - 1;

  //iterate through until they are about to meet
  while(start < end){
   let holdValue = array[end]
   array[end] = array[start];
   array[start] = holdValue;

   start += 1;
   end -= 1;
  }
  return array;
}

console.log(reverse([1, 2, 3]))
console.log(reverse([1]))
