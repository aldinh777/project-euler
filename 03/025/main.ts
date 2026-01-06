function fibIndexWithNdigit(n: number) {
  let i = 1;
  let x = 1n;
  let y = 1n;
  // @ts-ignore
  while (x.toString().length < n && x != Infinity) {
    const t = x + y;
    x = y;
    y = t;
    i++;
  }
  return i;
}

console.log(fibIndexWithNdigit(1000));
