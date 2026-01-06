function theCoolerIsPrime(number: number, primelist: number[]) {
  let limitcheck = number;
  for (let i of primelist) {
    if (i > limitcheck) {
      return true;
    }
    if (number % i === 0) {
      return false;
    } else {
      limitcheck = number / i;
    }
  }
  return true;
}

function primeSumUpto(limit: number) {
  let primes: number[] = [];
  for (let i = 2; i < limit; i++) {
    if (theCoolerIsPrime(i, primes)) {
      primes.push(i);
    }
  }
  return primes.reduce((a, b) => a + b);
}

console.log(primeSumUpto(2_000_000));
