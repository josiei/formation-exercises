function getAllTernaryOfLengthN(length){
  const ternary = [0, 1, 2];
  const start = [1, 2];
  const results = []

  function helper(currentBits){
    if(currentBits.length === length){
      results.push(currentBits);
      return;
    } else if(currentBits.length < length && currentBits.length >= 1){
      for(let digit of ternary){
        helper(currentBits + digit);
      }
    } else if(currentBits.length < 1) {
      if(length === 1){
        for(let digit of ternary){
          helper(currentBits + digit)
        }
      } else {
        for(let digit of start){
          helper(currentBits + digit)
        }
      }
    }
  }

  helper("");
  return results;

}


console.log(getAllTernaryOfLengthN(3))

// "10",
// "11",
// "12",
// "20",
// "21",
// "22",
