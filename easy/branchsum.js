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
