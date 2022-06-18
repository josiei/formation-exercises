
function sumNestedList(arr){
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      sum += sumNestedList(arr[i])
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumNestedList([1, 2, 3])) //== 6
