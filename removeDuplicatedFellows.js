// Given an array of names representing Fellows in a session, remove an array of all Fellows with duplicates removed. The array must be in the same order as they appeared in the input.

//["oliver", "pixel", "oliver", "pinky"] => ["oliver", "pixel", "pinky"]

function removeDuplicatedFellows(input) {
  const names = {};
  const orderedNames = []

  for(let i = 0; i < input.length; i++){
    if(!(input[i] in names)){
      names[input[i]] = 0;
      orderedNames.push(input[i])
    } else {
      names[input[i]] += 1;
    }
  }
  return orderedNames;
}

console.log(removeDuplicatedFellows(["oliver", "pixel", "oliver", "pinky"]))
