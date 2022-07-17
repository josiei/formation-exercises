// In Visual Basic (an old language I hope most of you never need to use), if statements are bounded by four keywords: if, elseif, else, and endif. Given a sequence of these keywords, return the max nesting depth or -1 if the structure is incorrect.
// The structure is incorrect if:
// The first keyword is anything other than an if.
// If and endif keywords do not pair up or are out of order.
// An else or elseif is not inside an if.
// There are two else blocks in a row.
// An elseif follows an else at a given level.
// Start by implementing this with only if, and endif. Then add support for else. Once that is working, modify the code to support elseif as well.

function vbNesting(controlFlow){
  let maxDepth = 0;
  let stack = [];
  for(let i = 0; i < controlFlow.length; i++){
    if(controlFlow[i] === "if"){
      stack.push(controlFlow[i]);
      maxDepth = Math.max(maxDepth, stack.length);
    } else if(controlFlow[i] === "endif"){
      let popped = stack.pop();
      if(popped === undefined){
        return -1;
      }
    } else if(controlFlow[i] === "else" || controlFlow[i] === "elseif"){
      const topKeyword = stack.pop();
      if (topKeyword === "if" || topKeyword === "elseif") {
        stack.push(controlFlow[i]);
      } else {
        return -1;
      }
    }
  }
  if (stack.length === 0) {
    return maxDepth;
  }
  return -1;
}

console.log(vbNesting(["if"])) //=>-1
console.log(vbNesting(["endif"])) //=> -1
console.log(vbNesting(["if", "endif"])) //=> 1
console.log(vbNesting(["if", "else", "endif"])) //=> 1
console.log(vbNesting(["if", "endif", "if", "endif"])) //=> 1
console.log(vbNesting(["if", "if", "endif", "endif"])) //=> 2
console.log(vbNesting(["else"])) //=> -1
console.log(vbNesting(["endif", "if"])) //=> -1
console.log(vbNesting(["if", "else", "if", "endif", "endif"])) //=> 2
console.log(vbNesting(["if", "endif", "if", "elseif", "else", "endif", "endif"])) //=> -1
console.log(vbNesting(["if", "elseif", "elseif", "elseif", "endif"])) //=> 1
console.log(vbNesting(["if", "elseif", "else", "endif"])) //=> 1
console.log(vbNesting(["if", "if", "elseif", "else", "endif", "endif"])) //=> 2
console.log(vbNesting(["if", "endif", "if", "elseif", "else", "endif"])) //=>1
