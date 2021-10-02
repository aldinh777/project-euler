function collatzRule(num) {
    return num % 2 === 0 ? num / 2 : num * 3 + 1
}

function fillChain(num, map) {
    const stack = [num];
    let collatz = num;
    while (!map.has(collatz)) {
        stack.push(collatz)
        collatz = collatzRule(collatz)
    }
    while (stack.length > 0) {
        const pop = stack.pop()
        const moreChain = map.get(collatzRule(pop)) + 1
        map.set(pop, moreChain)
    }
}

function largestChain(limit) {
    const chainLength = new Map()
    chainLength.set(1, 1)
    for (let i = 2; i <= limit; i++) {
        fillChain(i, chainLength)
    }
    const result = Array.from(chainLength).reduce((a, b) => a[1] > b[1] ? a : b);
    return result[0];
}

console.log(largestChain(1_000_000))
