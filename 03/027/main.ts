function isPrimeAbsolute(number: number) {
  const absolute = Math.abs(number);
  let limit = absolute;
  for (let i = 2; i < limit; i++) {
    if (absolute % i === 0) {
      return false;
    } else {
      limit = Math.floor(absolute / i);
    }
  }
  return true;
}

function howManyPrime(a: number, b: number) {
  let n = 0;
  while (isPrimeAbsolute(n ** 2 + a * n + b)) {
    n++;
  }
  return n;
}

function maxPrimeQuadProduct() {
  let maxPrimes = 0;
  let maxPrimesProduct = 0;
  let ma: number, mb: number;
  for (let a = -999; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      const primeCount = howManyPrime(a, b);
      if (primeCount > maxPrimes) {
        maxPrimes = primeCount;
        maxPrimesProduct = a * b;
        ma = a;
        mb = b;
      }
    }
  }
  return maxPrimesProduct;
}

console.log(maxPrimeQuadProduct());
