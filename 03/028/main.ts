function spiralDiagonal(range: number) {
  let diagonalSum = 1;
  let skip = 1;
  for (
    let i = 3, diagCount = 4 - 1;
    i <= range ** 2;
    i += skip + 1, diagCount--
  ) {
    diagonalSum += i;
    if (diagCount <= 0) {
      diagCount = 4;
      skip += 2;
    }
  }
  return diagonalSum;
}

console.log(spiralDiagonal(1001));
