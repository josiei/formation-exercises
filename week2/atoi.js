function atoi(intAsString){
  const convert =
  {"1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "0": 0,
}

const splitArr = intAsString.split('')
let output = 0;
let negative = intAsString[0] === '-';

  function recursionHelper(arr){
    if(arr.length === 0 && negative) return -output;
    if(arr.length === 0) return output;

    let first = arr[0];
    let rest = arr.slice(1);
    if(first in convert){
      arr[0] = convert[first];
      output = output * 10 + arr[0]
    }
    return recursionHelper(rest);
  }

  return recursionHelper(splitArr);
}

console.log(atoi("123")) //== 123
console.log(atoi("4")) //== 4
console.log(atoi("007")) //== 7
console.log(atoi("-1")) //== -1
