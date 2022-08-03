class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function treeIsImmediatelyDistinct(root, parent = null){
  if(root === null) return true;
  const left = treeIsImmediatelyDistinct(root.left, root);
  const right = treeIsImmediatelyDistinct(root.right, root);
  let distinct = true;
  if (parent && root.value === parent.value){
    distinct = false;
  }
  return distinct && left && right;
}

console.log(treeIsImmediatelyDistinct(new TreeNode(1, new TreeNode(2), new TreeNode(2))));
