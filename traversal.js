//DON'T USE IF STATEMENTS
// Print out every other value (even indices: 0, 2, 4, etc)
// Print out every other value (odd indices: 1, 3, 5, etc)
// Add a second parameter, k, and now print out every kth value, starting with the first.
// Finally, do all of these again, but in reverse:
// Every element in reverse starting with the last
// Every other element starting with the last
// Every other element starting with the second to last
// Every kth element starting with the last.

//happy case: [1, 2, 3, 4] => 1 2 3 4
// edge case: [1, "hi", 3, false] => 1 hi 3 false

//printing every value
function printArray(array) {
  // for each item in the array
    for(let i = 0; i < array.length; i++){
      //console log the item
      console.log(array[i]);
    }
  }

  //test cases:
  // printArray([1, 2, 3, 4]);
  // printArray([1, "hi", 3, false]);

  //happy case: [1, 2, 3, 4, 5] => 1 3 5
  //edge case: [2, -3, 4, 8] => 2 4

  function printValuesAtEvenIndices(array) {
    //decide our starting point
    let idx = 0;
    //iterate through through the array, stopping when idx is greater than the length of the array
    while(idx < array.length){
      //print our given index
      console.log(array[idx]);
      //update index
      idx += 2;
    }
  }

  // printValuesAtEvenIndices([1, 2, 3, 4, 5]);
  // printValuesAtEvenIndices([2, -3, 4, 8]);

  //happy case: [1, 2, 3, 4] => 2 4
  //edge case: [2, -3, 4, 8, 5] => -3 8

  function printValuesAtOddIndices(array) {
    //decide our starting point
    let idx = 1;
    //iterate, and stop when idx is greater than array length
    while(idx < array.length){
      //print what is at arr[idx]
      console.log(array[idx])
      idx += 2;
    }
  }

  // printValuesAtOddIndices([1, 2, 3, 4])
  // printValuesAtOddIndices([2, -3, 4, 8, 5])

  //happy case: [1, 2, 3, 4, 5, 6, 7] k = 3 =≥ 1 4 7
  //edge case: [-1, 3, 7, -2, 1] k = 3 => -1 -2

  function printEveryKth(array, k) {
    //set our starting
    let idx = 0;
    while(idx < array.length ){
      //print what is at arr[idx]
      console.log(array[idx])
      //increment
      idx += k;
    }

  }
  // printEveryKth([1, 2, 3, 4, 5, 6, 7], 3);
  // printEveryKth([-1, 3, 7, -2, 1], 3);

  //happy case: [1, 2, 3, 4] => 4 3 2 1
  // edge case: [1, "hi", 3, false] => false 3 hi 1

  function printReverse(array) {
    //set our starting point
    let idx = array.length - 1;
    //iterate backwards while idx >= 0
    while(idx >= 0){
      //print items
      console.log(array[idx])
      //decrement
      idx -= 1;
    }
  }

  // printReverse([1, 2, 3, 4]);
  // printReverse([1, "hi", 3, false]);

  //happy case: [1, 2, 3, 4, 5] => 5 3 1
  //edge case: [2, -3, 4, 8] => 4 2

  function printReverseEvenIndices(array) {
    //set our starting index
    let idx = 0;
    // find our reverse starting index
    while(idx < array.length - 2){
      idx += 2;
    }
    //reverse iterate and print while idx >= 0
    while(idx >= 0){
      console.log(array[idx]);
      //update idx
      idx -= 2;
    }
  }

  // printReverseEvenIndices([1, 2, 3, 4, 5]);
  // printReverseEvenIndices([2, -3, 4, 8]);

  //happy case: [1, 2, 3, 4] => 4 2
  //edge case: [2, -3, 4, 8, 5] => 8 -3
  function printReverseOddIndices(array) {
      //set our starting index
      let idx = 1;
      // find our reverse starting index
      while(idx < array.length - 2){
        idx += 2;
      }
      //reverse iterate and print while idx >= 0
      while(idx >= 0){
        console.log(array[idx]);
        //update idx
        idx -= 2;
      }

  }

  // printReverseOddIndices([1, 2, 3, 4]);
  // printReverseOddIndices([2, -3, 4, 8, 5])

  //happy case: [1, 2, 3, 4, 5, 6, 7] k = 3 =≥ 7 4 1
  //edge case: [-1, 3, 7, -2, 1] k = 3 => 1 3

  function printReverseEveryKth(array, k) {
  //set our starting idx
    let idx = array.length - 1;
    while(idx >= 0){
      console.log(array[idx]);
      //update idx
      idx -= k;
    }
  }

  // printReverseEveryKth([1, 2, 3, 4, 5, 6, 7], 3)
  // printReverseEveryKth([-1, 3, 7, -2, 1], 3)
