class BTNode {
  constructor(value, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

let tree1 = new BTNode(1,
  new BTNode(2,
    new BTNode(4),
    new BTNode(5),
  ),
  new BTNode(3,
    new BTNode(6),
    new BTNode(7),
  ),
);

//tree1 = prune(tree1, 7);
//tree1 = prune(tree1, 3);

function prune(root, target){
  if(root === null) return;
  if(root.value === target) return null;
  const left = prune(root.left, target);
  const right = prune(root.right, target);
  if(root.left && root.left.value === target){
    root.left = null;
  } else if(root.right && root.right.value === target){
    root.right = null;
  }
  return root;
}

console.log(prune(tree1, 3));
