function factorsLengthOver(num, max) {
    let totalFactor = 0
    let limit = num
    for (let i = 1; i < limit; i++) {
        if (num % i === 0) {
            totalFactor += num / i === i ? 1 : 2
            limit = num / i
            if (totalFactor > max) {
                return true
            }
        }
    }
    return false
}

function triangleFactorOver(maxFactor) {
    let triangle = 0;
    for (let i = 1; ; i++) {
        triangle += i;
        if (factorsLengthOver(triangle, maxFactor)) {
            break
        }
    }
    return triangle
}

console.log(triangleFactorOver(500))
