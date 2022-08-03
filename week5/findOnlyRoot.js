class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findOnlyChildren(root){
  let results = [];
  if(root === null) return results;
  let stack = [root];
  while(stack.length > 0){
    let current = stack.pop();
    if(current.right && current.left === null){
      results.push(current.right.value);
    } else if(current.left && current.right === null){
      results.push(current.left.value);
    }
    if(current.left) stack.push(current.left);
    if(current.right) stack.push(current.right);
  }
  return results;
}

console.log(findOnlyChildren(new TreeNode(1, new TreeNode(2), null)));
