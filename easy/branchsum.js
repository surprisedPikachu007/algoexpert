class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sums(root, res, sum) {
  let cur = root.value + sum;

  if (root.left === null && root.right === null) {
    res.push(cur);
  }

  if (root.left !== null) {
    sums(root.left, res, cur);
  }

  if (root.right !== null) {
    sums(root.right, res, cur);
  }
}

function branchSums(root) {
  let res = [];
  let sum = 0;

  sums(root, res, sum);

  return res;
}

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right.left = new BinaryTree(10);

console.log(branchSums(root));
