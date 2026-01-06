function isPandigital(str: string) {
  const set = new Set();
  for (const ch of str) {
    if (set.has(ch) || ch === "0") {
      return false;
    } else {
      set.add(ch);
    }
  }
  return true;
}

function lenn(num: number) {
  return String(num).length;
}

let arr: number[] = [];

for (let a = 1; a < 100; a++) {
  for (let b = a; ; b++) {
    const prod = a * b;
    const lennn = lenn(a) + lenn(b) + lenn(prod);
    if (lennn > 9) {
      break;
    } else if (lennn === 9 && isPandigital("" + a + b + prod)) {
      if (!arr.includes(prod)) {
        arr.push(prod);
      }
    }
  }
}

console.log(arr.reduce((a, b) => a + b));
