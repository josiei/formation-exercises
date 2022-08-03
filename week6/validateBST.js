// Q. Given a binary tree, determine if it is a valid binary search tree (BST).

// Examples:
// • Given a binary tree:
//         2
//        / \
//       1   3
// // returns True

// • Given a binary tree:
//         1
//        / \
//       2   3
// // returns False

class TreeNode {
  constructor(value = 0, leftChild = null, rightChild = null) {
      this.value = value
      this.left = leftChild
      this.right = rightChild
  }
}

function validateBST(tree, min = -Infinity, max = Infinity) {
  // Write your code here.
  if(tree === null) return true;
  const left = validateBST(tree.left, min, tree.value);
  const right = validateBST(tree.right, tree.value, max);

  return ((tree.value > min) && (tree.value < max)) && left && right;
}

var tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
var tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(validateBST(null)) // true
console.log(validateBST(tree1)) // true
console.log(validateBST(tree2)) // false
console.log(validateBST(tree3)) // true
console.log(validateBST(new TreeNode())) // true
