// Ternary is a base-3 number system that uses the digits 0, 1, and 2, similar to how decimal uses 0-9 and binary uses 0 and 1.
// Given an integer, write a function that converts the number into its base 3 representation. Return the result as a string.

/*
EX: Converting Base 10 to Base 3

4517 % 3 = 1,505 remainder: 2
1505 % 3 = 501 remainder: 2
501 % 3 = 167 remainder: 0
167 % 3 = 55 remainder: 2
55 % 3 = 18 remainder: 1
18 % 6 = 6 remainder: 0
6 % 3 = 2 remainder: 0
2 % 3 = 0 remainder: 2

FINAL ANSWER: 20012022

// starting number
// starting number % 3 = result
// add result to beginning of newNum array (later conver to string)
// call the function again with result
// base case is when result = 0
*/

// function convertToBase3(number, ternaryNumber = []) {
//   /// base case
//   if (number === 0) return ternaryNumber.join('')

//   // recursive case
//   let remainder;
//   let newNumber;
//   let newNumWithDec;

//   remainder = (number % 3)
//   newNumWithDec = (number / 3)
//   newNumber = Math.floor(newNumWithDec)

//   ternaryNumber.unshift(remainder)
//   return convertToBase3(newNumber, ternaryNumber)
// }

function convertToBase(number) {

  function helper(number) {
    const currNum = number % 3;
    const restToProcess = (number - currNum) / 3;
    return (restToProcess !== 0 ? helper(restToProcess) : '') + currNum.toString();
  }

  if (number < 0) {
    return "-" + helper(number * -1);
  }
  return helper(number);
}



// console.log(convertToBase3(0))
// "0"
// console.log(convertToBase3(1))
// "1"
// console.log(convertToBase3(2))
//  "2"
// console.log(convertToBase3(3))
// // "10"
// console.log(convertToBase3(4))
// // "11"
console.log(convertToBase(92))
// "10102"
// console.log(convertToBase3(-5))
// //  "-12"
