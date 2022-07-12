// Q. Given a binary search tree and a target integer, check if the tree contains a target.
class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
      this.value = value
      this.left = leftChild
      this.right = rightChild
  }
}

function searchBST(root, target){
  if(root === null) return false;
  if(target === root.value){
    return true;
  } else if (target < root.value){
    return searchBST(root.left, target);
  } else if(target > root.value) {
    return searchBST(root.right, target);
  }
}

let tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))

//console.log(targetExists(tree, 3));
console.log(searchBST(null, 1)) // false
console.log(searchBST(tree, 1)) // true
console.log(searchBST(tree, 14)) // true
console.log(searchBST(tree, 2)) // false
console.log(searchBST(tree, 13)) // true
console.log(searchBST(new TreeNode(), 0)) // true
