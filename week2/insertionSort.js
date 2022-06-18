// 3 2 1. 7. 8. 5
// 2 3 1. 7  8. 5

/*
1. Start with the 1st index (second element)
2. Compare second element with the one before it and swap them if needed
3. Look at next element, and if it is out of order we will insert it in the sorted half of array
4. Keep going until the array is sorted





*/
function insertionSort(array){

  for(let i = 1; i < array.length; i++){
    for(let j = 0; j <= i; j++){
      if(array[i] < array[j]){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//       let key = array[i];
//       let j = i - 1;
//       console.log("j", j)
//       while (j >= 0 && array[j] > key) {
//           array[j + 1] = array[j];
//           j = j - 1;
//       }
//       array[j + 1] = key;
//   }
//   return array;
// }
// console.log(Insertion([1,3,6,7,0,19]))
// console.log(Insertion([]))
console.log(insertionSort([100, 25, 52]))

