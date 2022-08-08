function getAllSubsequences(str){
  let result = [""];
  let split = str.split('');
  for(let element of split){
    let length = result.length;
    for(let i = 0; i < length; i++){
      let substring = result[i] + element;
      result.push(substring)
    }
  }
  return result;
}



console.log(getAllSubsequences("abc"))
//== [
//   "a",
//   "b",
//   "c",
//   "ab",
//   "ac",
//   "bc",
//   "abc",
// ]
