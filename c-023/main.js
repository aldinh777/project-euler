function divSum(n) {
    const divisors = [1]
    let limit = n
    for (let i = 2; i < limit; i++) {
        if (n % i === 0) {
            divisors.push(i)
            if (i !== n/i) {
                divisors.push(n/i)
            }
            limit = n/i
        }
    }
    return divisors.reduce((a, b) => a + b)
}

function isAbundant(n) {
    return divSum(n) > n
}

function abundantsUnder(limit) {
    const abundantNumbers = []
    for (let i = 1; i <= limit; i++) {
        if (isAbundant(i)) {
            abundantNumbers.push(i)
        }
    }
    return abundantNumbers
}

function abundantSums(limit) {
    const abundantNumbers = abundantsUnder(limit)
    const abundantSum = new Set()
    for (let i = 0; i < abundantNumbers.length; i++) {
        for (j = i; j < abundantNumbers.length; j++) {
            const sum = abundantNumbers[i] + abundantNumbers[j]
            if (sum > limit) {
                break
            }
            abundantSum.add(sum)
        }
    }
    return abundantSum
}

function nonAbundantUnders(limit) {
    const abundantSum = abundantSums(limit)
    let sum = 0
    for (let i = 1; i <= limit; i++) {
        if (!abundantSum.has(i)) {
            sum += i
        }
    }
    return sum
}

console.log(nonAbundantUnders(28123))
