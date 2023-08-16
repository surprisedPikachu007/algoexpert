function isValidSubsequence(array, sequence) {
  // Write your code here.
  let i = 0,
    j = 0;

  let k = 0;
  while (i < array.length && j < sequence.length) {
    if (array[i] == sequence[j]) {
      k++;
      i++;
      j++;
    } else i++;
  }

  if (k == sequence.length) return true;
  return false;
}

arr = [5, 1, 22, 25, 6, -1, 8, 10];
sub = [1, 6, -1, 10];
console.log(isValidSubsequence(arr, sub));
