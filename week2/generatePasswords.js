function generatePasswords(chars, min, max){
  const results = [];

  function recursiveHelper(currStr){
    if(currStr.length === max){
      results.push(currStr);
      return;
    } else if(currStr.length >= min && currStr.length < max){
      results.push(currStr);
      for(let char of chars){
        recursiveHelper(currStr + char);
      }
    } else if(currStr.length < min) {
        for(let char of chars){
          recursiveHelper(currStr + char)
        }
      }
  }

  recursiveHelper("");
  return results;
}

console.log(generatePasswords(["a", "b"], 2, 4))
