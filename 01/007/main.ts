function isPrime(number: number) {
  let limit = number;
  for (let i = 2; i < limit; i++) {
    if (number % i === 0) {
      return false;
    } else {
      limit = Math.floor(number / i);
    }
  }
  return true;
}

function primeAt(at: number) {
  let loopen = 0,
    number = 1;
  while (loopen < at) {
    number++;
    if (isPrime(number)) {
      loopen++;
    }
  }
  return number;
}

console.log(primeAt(10001));
