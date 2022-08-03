function blocks(row, result = 0){
  if(row === 0) return result;
  result += row;
  return blocks(row - 1, result);
}

console.log(blocks(1));
