// Given a base-10 integer as a string, parse the integer and return it as an int. This problem can be done iteratively and recursively and it's worth doing both!

function atoi(intAsString){
  let convert = {
    "0":0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9

  }
  function helper(string, count = 0, result = 0){
    if(count > string.length - 1) return result;
    if(count === 0 && string[count] !== "0"){
      result = result * 10 + convert[string[count]]
    } else if(count > 0){
      result = result * 10 + convert[string[count]]
    }
    return helper(string, count + 1, result);
  }

  if(intAsString[0] === "-"){
    let rest = intAsString.slice(1);
    return -1 * helper(rest);
  }
  return helper(intAsString);
}

console.log(atoi("-1"));
