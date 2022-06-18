

function getAllSubsequences(str){
  let splitStr = str.split('');

  function helper(arr){
    if(arr.length === 0) return [[]];

    let firstElement = arr[0];
    let rest = arr.slice(1);
    let withoutFirst = helper(rest);

    let withFirst = withoutFirst.map(set => {
      return [firstElement, ...set]
    })

    return [...withFirst, ...withoutFirst]

  }

  return helper(splitStr).map(ele => ele.join(''));
}

console.log(getAllSubsequences("abc"))
// getAllSubsequences("abc") == [
//   "a",
//   "b",
//   "c",
//   "ab",
//   "ac",
//   "bc",
//   "abc",
// ]
