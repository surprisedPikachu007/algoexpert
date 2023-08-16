function twoNumberSum(array, targetSum) {
  const m = new Map();

  for (let i = 0; i < array.length; i++) {
    m.set(i, array[i]);
  }

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
