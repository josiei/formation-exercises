/*
    PROMPT___
    sort input array using selection sort

    COMPLEXITY___
    O(n) where n === input.length

    min = 4

    [  1,   2,   4,   3,   5  ]
                 i
                           j
  1. Create a min variable
  2. Set our min to the position at array i i
  3. Initialize our pointers i, being at the 0th index, j being i + 1;
  4. Iterate through the array – checking to see if any input is lesser than the value at min
      - if min needs update, set min to the smaller value
  5. Swap our index with min if needed.
  6. Return the array


*/

const sort = (input) => {
  for(let i = 0; i < input.length; i++){
    let min = i;
    for(let j = i + 1; j < input.length; j++){
        if(input[min] > input[j]){
          min = j;
        }
    }
    if(min !== i){
      let temp = input[i]; // temp = A
      input[i] = input[min]; // A = B
      input[min] = temp // B = temp
    }
  }
  return input;
}

console.log(sort([1, 4, 2, 3, 5]), '=> ', [1, 2, 3, 4, 5])
console.log(sort([5, 4, 3, 2, 1]), '=> ', [1, 2, 3, 4, 5])
console.log(sort([1, 4, 3, 2, 1]), '=> ', [1, 1, 2, 3, 4])
console.log(sort([1, 1, 1, 1, 1]), '=> ', [1, 1, 1, 1, 1])
console.log(sort([]), '=> ', [])
