function getAllTernaryOfLengthN(num){
  let results = [];
  function ternaryHelper(num, str = ""){
    if(str.length === num){
      results.push(str);
      return;
    }
    for(let i = 0; i < 3; i++){
      ternaryHelper(num, str + i);
    }
  }
  for(let i = 1; i < 3; i++){
    ternaryHelper(num, `${i}`);
  }
  return results;
}

console.log(getAllTernaryOfLengthN(2));
