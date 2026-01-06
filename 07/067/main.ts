import triangleOfDestiny from "./demons.json";

function findLargeRoute(index: number, triangle: number[][]): number[] {
  if (!triangle[index + 1]) {
    return triangle[index]!;
  }
  const triangleOfDeath = triangle[index]!;
  const triangelOfSuffer = findLargeRoute(index + 1, triangle);
  return triangleOfDeath.map(
    (val: number, idx: number) =>
      val + Math.max(triangelOfSuffer[idx]!, triangelOfSuffer[idx + 1]!),
  );
}

function largestRoute(triangle: number[][]) {
  const [result] = findLargeRoute(0, triangle);
  return result;
}

console.log(largestRoute(triangleOfDestiny));
