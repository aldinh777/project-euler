function divSum(n) {
    const divisors = [1]
    let limit = n
    for (let i = 2; i < limit; i++) {
        if (n % i === 0) {
            divisors.push(i, n/i)
            limit = n/i
        }
    }
    return divisors.reduce((a, b) => a + b)
}

function isAmicable(n) {
    const isit = divSum(n)
    return n !== isit && divSum(isit) === n
}

function amicablesUnder(n) {
    let sum = 0
    for (let i = 2; i < n; i++) {
        if (isAmicable(i)) {
            sum += i
        }
    }
    return sum
}

console.log(amicablesUnder(10000))
