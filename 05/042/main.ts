import { join } from "path";
import { readFileSync } from "fs";

function triangle(n: number) {
  return (n / 2) * (n + 1);
}

function isTriangleWord(n: number) {
  for (let i = 1; true; i++) {
    const triangleTest = triangle(i);
    if (n === triangleTest) {
      return true;
    }
    if (triangleTest > n) {
      return false;
    }
  }
}

function charToNumber(char: string) {
  return char.charCodeAt(0) - 64;
}

const file = readFileSync(join(__dirname, "0042_words.txt"), "utf8");
const result = file
  .split(",")
  .map((a) => a.slice(1, a.length - 1))
  .map((a) =>
    a
      .split("")
      .map(charToNumber)
      .reduce((a, b) => a + b, 0),
  )
  .filter(isTriangleWord).length;
console.log(result);
