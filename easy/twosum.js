function twoNumberSum(array, targetSum) {
  const m = new Map();

  array.forEach((x) => m.set(x, targetSum - x));

  for (const k of m.keys()) {
    let v = m.get(k);
    if (m.has(v) && v != k) {
      return [k, v];
    }
  }

  return [];
}

const arr = [3, 5, -4, 8, 11, 1, -1, 6];
console.log(twoNumberSum(arr, 10));
