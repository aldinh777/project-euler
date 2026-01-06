function factorial(n: number): any {
  return n <= 1 ? 1n : BigInt(n) * factorial(n - 1);
}

function digitFactorial(n: number) {
  return BigInt(factorial(n))
    .toString()
    .split("")
    .map((s) => parseInt(s))
    .reduce((a, b) => a + b);
}

console.log(digitFactorial(100));
