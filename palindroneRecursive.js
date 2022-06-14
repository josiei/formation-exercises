/*
1. Sum all the elements in an array.
2. Remove all target elements from an array. **
[1, 6, 2]
index: 5
 0  1  2. 3. 4
[1, 3, 6, 3, 2], target 3 -> [1, 6, 2]
[], target = 5 -> []
[1, 2], target 6 -> [1,2]
[1,1], target 1 -> []

Approach 1:
  initalize an empty results array
  base case:
    index is the length of our input array
  recursive case:
    if index not equal to target -> add it to results array
    call recursive function with input array and index+1
  return results array

3. Return true if an array has palindrome values ([3, 2, 1, 2, 3] => true,  [3, 2, 1] => false) ***
[1, 2, 2, 1] -> true
[3, 2, 1, 1, 2, 3] -> true
       j. i
[] -> true

set up the function to have two pointers i, j
  if i and j are the same or i is greater than j, return true;
  if arr at i and arr at j are NOT equal return false;
  return recursive function i+1. j-1

Approach 1:
  iterate over the entire input array recursively
  stop (base case) when our index is the lenght of the array
  add the element at current index to a queue
  call recursive function with index incremented by 1
  compare front of queue with current element (coming back up the stack)
    if they're different -> return false
  return queue.size === 0??

4. Shift the elements in an array by 1 and move the last element to the first ([1, 2, 3, 4] => [4, 1, 2, 3])**
*/

function isPalindrome(array) {

  function helper(i, j) {
    if (i >= j) return true;
    if (array[i] !== array[j]) return false;
    return helper(i+1, j-1);
  }

  return helper(0, array.length-1);
}

const removeTargetElements = (array, target, i = 0, resArr = []) => {
  if (i === array.length){
    return resArr;
  }

  if (target !== array[i]){
      resArr.push(array[i]);
  }
  return removeTargetElements(array, target, i + 1, resArr)

}

console.log(removeTargetElements([1, 2, 6, 2, 8, 9, 2], 2), [1, 6, 8, 9])
console.log(removeTargetElements([1, 2], 6), [1,2])
console.log(removeTargetElements([1,1], 1), [])

console.log(isPalindrome([1,1]), true)

let array = [ 3, 6, 0, 6, 3 ];

//if i == arr.length return array
//set array at i to array at i -1 or the next index in the array
//call rotate on the next index
const rotate = (arr, i = 0, prev=arr[arr.length - 1]) => {
  if (i === array.length){
    return arr
  }
  let tmp = arr[i];
  arr[i] = prev;
  return rotate(arr, i + 1, tmp);
}

console.log(rotate(array), [3, 3, 6, 0, 6])
