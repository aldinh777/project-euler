function champernowneDigitAt(at: number) {
  let currentRange = 0;
  let nextDigitRange = 0;
  let length = 0;
  while (at > nextDigitRange) {
    currentRange = nextDigitRange;
    nextDigitRange = 9 * 10 ** length * ++length + nextDigitRange;
  }
  const x = at - currentRange;
  const num = Math.ceil(x / length) + (10 ** (length - 1) - 1);
  const index = (x - 1) % length;
  return Number(String(num)[index]);
}

let prod = 1;
for (let i = 0; i < 7; i++) {
  const res = champernowneDigitAt(10 ** i);
  prod *= res;
}

console.log(prod);
