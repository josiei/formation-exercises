//The task here is to determine if an array contains a pair that adds up to a value, k. The array is sorted ahead of time.

// happy case: [1, 5, 8, 10, 13, 18], k = 15 => true
//edge case: [] k = 10 => false
//            [5, 5, 5]  k = 10 => true
//            [5, 5, 7, 3] k = 10 => true
//            [1, 1, 4] k = 10 => false

//brute force way O(n^2)
// function sumToK(array, k) {
//   for(let i = 0; i < array.length - 1; i++){
//     for(let j = i + 1; j < array.length; j++){
//       if((array[i] + array[j]) === k){
//         return true
//       }
//     }
//   }
//   return false;
// }

function sumToK(array, k){
  let start = 0;
  let end = array.length - 1;
  while(start < end){
    if((array[start] + array[end]) === k){
      return true;
    } else if((array[start] + array[end]) < k){
      start += 1;
    } else {
      end -= 1;
    }
  }
  return false;
}
console.log(sumToK([1, 5, 8, 10, 13, 18], 15));
console.log(sumToK([1, 1, 4], 10));
