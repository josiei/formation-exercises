// Given an array of strings, combine them into one string, comma separated except for the last two pair, which should be separated with the word "and". We don't want an Oxford comma, so given ["Sam", "Grant", "Jenny"], return "Sam, Grant and Jenny"
//happy case: ["Oliver", "Jenny", "Mike"] => "Oliver, Jenny and Mike"
//edge case: ["Oliver"] => "Oliver"
//            [] => ""

function commaSeparate(input) {
  let result = "";
  const andIdx = input.length - 2;

  for(let i = 0; i < input.length; i++){
    if(input.length === 1 || i === input.length - 1){
      result += input[i]
    } else if(i === andIdx){
      result += `${input[i]} and `
    } else {
      result += `${input[i]}, `
    }
  }
  return result;
}

console.log(commaSeparate(["Oliver", "Jenny", "Mike"]));
console.log(commaSeparate(["Oliver", "Jenny", "Steve", "Mike"]));
console.log(commaSeparate(["Oliver"]));
console.log(commaSeparate([]));
