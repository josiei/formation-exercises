function targetExists(root, target){
  if(root === null) return false;
  const isInLeft = targetExists(root.left, target);
  const isInRight = targetExists(root.right, target);
  return root.val === target || isInLeft || isInRight;
}
