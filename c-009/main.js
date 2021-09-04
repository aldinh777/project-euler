function getLastPair(a, b) {
    return Math.sqrt(a ** 2 + b ** 2)
}

function isPythagorasPair(a, b) {
    return a ** 2 + b ** 2 === getLastPair(a, b) ** 2
}

function pythagoreanTripletExplosion(sumTotal) {
    for (let a = 1;; a++) {
        for (let b = 1; a > b ; b++) {
            if (isPythagorasPair(a, b)) {
                const c = getLastPair(a, b)
                if (a + b + c === sumTotal) {
                    return a * b * c
                }
            }
        }
    }
}

console.log(pythagoreanTripletExplosion(1000))
