function getNthFib(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib[n - 1];
}

console.log(getNthFib(6));
