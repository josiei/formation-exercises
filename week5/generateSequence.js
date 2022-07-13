function generateSequence(target){
  let matrix = []
  for(let i = target; i > 0; i--){
    let build = []
    for(let j = i; j > 0; j--){
      build.push(j);
    }
    matrix.push(build)
  }
  return matrix;
}

console.log(generateSequence(3));
