function findClosestValueInBst(tree, target) {
  if (tree === null) return null;

  let closest = tree.value;
  let current = tree;

  while (current !== null) {
    if (Math.abs(target - current.value) < Math.abs(target - closest)) {
      closest = current.value;
    }

    if (target < current.value) {
      current = current.left;
    } else if (target > current.value) {
      current = current.right;
    } else {
      break;
    }
  }

  return closest;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BST(10);
tree.left = new BST(5);
tree.right = new BST(15);
tree.left.left = new BST(2);
tree.left.right = new BST(5);
tree.left.left.left = new BST(1);
tree.right.left = new BST(13);
tree.right.right = new BST(22);
tree.right.left.right = new BST(14);

console.log(findClosestValueInBst(tree, 12));
