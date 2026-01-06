const COINS = [200, 100, 50, 20, 10, 5, 2, 1];

function getCombinations(limit: number, arr: number[], money = 0) {
  if (money < limit) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const nextMoney = money + arr[i]!;
      sum += getCombinations(limit, arr.slice(i), nextMoney);
    }
    return sum;
  } else {
    return +(money === limit);
  }
}

console.log(getCombinations(200, COINS));
