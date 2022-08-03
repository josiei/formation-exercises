/* Typical comparison function */
let defaultCompare = (a, b) => a > b ? 1 : (a < b ? -1 : 0);

/* Version 1:
    O(n)
    Fixed memory
    Loops
*/

// let binarySearch = (array, element, compare = defaultCompare) => {
//     let start = 0;
//     let end = array.length - 1;
//     while(start <= end){
//       let middle = Math.floor((end + start) / 2);
//       let direction = compare(array[middle], element);
//       if(direction === 0){
//         return middle;
//       } else if(direction === 1){
//         end = middle - 1;
//       } else if(direction === -1){
//         start = middle + 1;
//       }
//     }
//     return -1;
// };

function binarySearch(array, element, compare = defaultCompare){
  function helper(start = 0, end = array.length - 1){
    if(start > end) return -1;
    let middle = Math.floor((end + start) / 2);
    let direction = compare(array[middle], element);
    if(direction === 0){
      return middle;
    } else if(direction === 1){
      return helper(start, middle - 1);
    } else {
      return helper(middle + 1, end);
    }
  }
  return helper();
}


console.log(binarySearch([], 2)) //-1;
console.log(binarySearch([1], 1)) //0);
console.log(binarySearch([1], 2)) //-1);
console.log(binarySearch([1,2,3], 2)) //1);
console.log(binarySearch([1,2,3], 3)) //2);
console.log(binarySearch([1,2,3], 4)) //-1);
console.log(binarySearch([1,2,3,7,8,9,10], 3)) //2);
