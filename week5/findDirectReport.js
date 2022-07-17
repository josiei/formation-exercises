class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findDirectReport(root, a, b){
  function helper(current, parent){
    if(current === null) return false;
    const inLeft = helper(current.left, current);
    const inRight = helper(current.right, current);
    const direct = (parent && parent.value === a && current.value === b);
    return direct || inLeft || inRight;
  }
  return helper(root, null)
}
const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(findDirectReport(tree, 1, 2)) // 3
