function sum35(max: number) {
  return [...Array(max)]
    .map((_, i) => i)
    .filter((a) => a % 3 === 0 || a % 5 === 0)
    .reduce((a, b) => a + b);
}

console.log(sum35(1000));
