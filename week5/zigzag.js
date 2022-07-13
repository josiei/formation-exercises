// Given a two dimensional array, output a new one dimensional array with the elements of the input in zig zag order. This means that the first row will be in the output from first to last, but the second row will be the reverse, last to first, then the third is back to normal order again, each row the opposite order of the ones before and after.

function linearizeZigZag(matrix){
  let results = [];
  let forward = true;
  for(let array = 0; array < matrix.length; array++){
    if(forward){
      for(let j = 0; j < matrix[array].length; j++){
        results.push(matrix[array][j]);
        console.log(matrix[array][j])
      }
    } else {
      for(let j = matrix[array].length - 1; j >= 0; j--){
        results.push(matrix[array][j]);
        console.log(matrix[array][j])
      }
    }
    forward = !forward;
  }
  return results;
}
const matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(linearizeZigZag(matrix));
