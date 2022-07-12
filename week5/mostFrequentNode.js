// Given a binary tree with node values represented as integers, find and return the most frequent node value.
// You can assume there will always be a most frequent node.

function findMostFrequentNodeValue(root){
  let count = {};
  let max = -Infinity;
  let nodeVal;
  function countElements(root){
    if(root === null) return;
    const countLeft = countElements(root.left);
    const countRight = countElements(root.right);
    count[root.val] = count[root.val] || 0;
    count[root.val] += 1;
    return count;
  }
  count = countElements(root);
  for(let key in count){
    if(count[key] > max){
      max = count[key];
      nodeVal = key;
    }

  }
  return nodeVal;
}
