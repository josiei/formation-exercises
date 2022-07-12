function sumNodesWithEvenParent(root){
  function helper(root, parent = null){
    if(root === null) return 0;
    const leftSum = helper(root.left, root);
    const rightSum = helper(root.right, root);
    if(parent !== null && parent.val % 2 === 0){
      return root.val + leftSum + rightSum;
    }
    return leftSum + rightSum;
  }
  return helper(root);
}
