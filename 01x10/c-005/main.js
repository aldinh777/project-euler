function allReducable(num, reducer) {
    for (let i = 1; i <= reducer; i++) {
        if (num % i !== 0) {
            return false
        }
    }
    return true
}

function reduceResult(num, reducer) {
    for (let i = reducer; i > 1; i--) {
        if (allReducable(num / i, reducer)) {
            return reduceResult(num / i, reducer)
        }
    }
    return num
}

function smallestDivisible(reducer) {
    let result = 1
    for (let i = 2; i <= reducer; i++) {
        result = reduceResult(result * i, i)
    }
    return result
}

console.log(smallestDivisible(20))
