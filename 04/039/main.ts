function pythagoras(a: number, b: number) {
  return Math.sqrt(a ** 2 + b ** 2);
}

const pmap: Record<number, number> = {};
for (let a = 1; a < 10000; a++) {
  for (let b = a; b < 10000; b++) {
    const c = pythagoras(a, b);
    const p = a + b + c;
    if (p >= 1000) {
      break;
    }
    if (c % 1 === 0) {
      if (pmap[p]) {
        pmap[p]++;
      } else {
        pmap[p] = 1;
      }
    }
  }
}

let max = 0;
let pmax = "0";
for (const p in pmap) {
  if (pmap[p]! > max) {
    max = pmap[p]!;
    pmax = p;
  }
}

console.log(pmax);
