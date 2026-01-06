const factorialmap: Record<number, number> = {};

function factorial(num: number): number {
  if (num <= 1) {
    return 1;
  } else if (factorialmap[num]) {
    return factorialmap[num];
  } else {
    factorialmap[num] = num * factorial(num - 1);
    return factorialmap[num];
  }
}

function getDigits(num: number) {
  return String(num).split("").map(Number);
}

function digitFactorials() {
  let sum = 0;
  for (let i = 3; i < 100_000; i++) {
    const factorialDigitSum = getDigits(i).reduce(
      (a, b) => a + factorial(b),
      0,
    );
    if (factorialDigitSum === i) {
      sum += i;
    }
  }
  console.log(sum);
}

digitFactorials();
