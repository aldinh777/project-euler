const pmap = new Map();
let max = 0;

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

function isPandigital(str: string) {
  if (!str.length) {
    return true;
  }
  const index = str.indexOf(str.length.toString());
  if (index === -1) {
    return false;
  }
  return isPandigital(str.slice(0, index) + str.slice(index + 1));
}

function recursivePermutation(arr: number[]): number[][] {
  if (arr.length <= 1) {
    return [arr];
  }
  if (pmap.has(arr.join(""))) {
    return pmap.get(arr.join(""));
  }
  const result: number[][] = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]!;
    const rest = arr.filter((v: any) => v !== num);
    const perm = recursivePermutation(rest);
    for (const p of perm) {
      result.push([num, ...p]);
    }
  }
  pmap.set(arr.join(""), result);
  for (const item of result) {
    const num = Number(item.join(""));
    if (isPrime(num) && isPandigital(String(num)) && num > max) {
      max = num;
    }
  }
  return result;
}

recursivePermutation([9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(max);
