let productOfLowestCommonDenominator = 1

function hasCommonThingy(a, b) {
    const [a1, a2] = [Math.floor(a / 10), a % 10]
    const [b1, b2] = [Math.floor(b / 10), b % 10]
    if (a2 === 0 && b2 === 0) {
        return false
    }
    if (a1 === b1 && a / b === a2 / b2) {
        return true
    } else if (a1 === b2 && a / b === a2 / b1) {
        return true
    } else if (a2 === b1 && a / b === a1 / b2) {
        return true
    } else if (a2 === b2 && a / b === a1 / b1) {
        return true
    }
    return false
}

for (let a = 10; a <= 99; a++) {
    for (let b = a + 1; b <= 99; b++) {
        if (hasCommonThingy(a, b)) {
            productOfLowestCommonDenominator *= b / a
        }
    }
}

console.log(productOfLowestCommonDenominator)
