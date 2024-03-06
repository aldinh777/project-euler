function theCoolerIsPrime(number, primelist) {
    let limitcheck = number
    for (let i of primelist) {
        if (i > limitcheck) {
            return true
        }
        if (number % i === 0) {
            return false
        } else {
            limitcheck = number / i
        }
    }
    return true
}

function generatePrimeCheckerUntil(limit) {
    const primelist = []
    for (let i = 2; i < limit; i++) {
        if (theCoolerIsPrime(i, primelist)) {
            primelist.push(i)
        }
    }
    const primeSet = new Set(primelist)
    return function isPrime(num) {
        return primeSet.has(num)
    }
}

function isTruncatablePrime(num, isPrime) {
    if (isPrime(num)) {
        let strnum = String(num)
        let truncateLeft = strnum
        let truncateRight = strnum
        while (truncateLeft.length > 1) {
            truncateLeft = truncateLeft.slice(1)
            truncateRight = truncateRight.slice(0, truncateRight.length - 1)
            // console.log({ truncateLeft, truncateRight })
            if (!isPrime(Number(truncateLeft)) || !isPrime(Number(truncateRight))) {
                return false
            }
        }
        return true
    }
    return false
}

function truncatablePrimeSum(LIMIT) {
    let sum = 0
    const isPrime = generatePrimeCheckerUntil(LIMIT)
    for (let i = 10; i < LIMIT; i++) {
        if (isTruncatablePrime(i, isPrime)) {
            sum += i
        }
    }
    return sum
}

console.log(truncatablePrimeSum(2_000_000))