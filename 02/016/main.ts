function sum2pow(power: number) {
  return BigInt(Math.pow(2, power))
    .toString()
    .split("")
    .map((s) => parseInt(s))
    .reduce((a, b) => a + b);
}

console.log(sum2pow(1000));
