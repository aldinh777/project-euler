const POW = 5;

function getDigit(num: number) {
  const out: number[] = [];
  for (let i = num.toString().length - 1; i >= 0; i--) {
    const pao = 10 ** i;
    const p = num - (num % pao);
    num -= p;
    out.push(p / pao);
  }
  return out;
}

function sumPowDigits(num: number, pow = POW) {
  return getDigit(num).reduce((p, n) => (p += n ** pow), 0);
}

function digitPowerSum() {
  let sum = 0;
  const max = 9 ** POW * POW;
  for (let i = 2; i < max; i++) {
    if (sumPowDigits(i) === i) {
      sum += i;
    }
  }
  return sum;
}

console.log(digitPowerSum());
