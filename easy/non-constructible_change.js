function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let min = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > min + 1) return min + 1;

    min += coins[i];
  }

  return min + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
