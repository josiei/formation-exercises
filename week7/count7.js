// Given a non-negative int n, return the count of the occurrences of 7 as a digit, so for example 717 yields 2. (no loops).
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while dividing (/) by 10 removes the rightmost digit (126 / 10 is 12).

function count7(nums, count = 0){
  if(!nums) return count;
  let digit = nums % 10;
  if(digit === 7){
    count += 1;
  }
  return count7(Math.floor(nums / 10), count);
}

console.log(count7(7)) //== 1
console.log(count7(123)) //== 0
console.log(count7(717)) //== 2
