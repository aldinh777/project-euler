function pentagonNumber(n) {
    return (n * (3 * n - 1)) / 2
}

// D = abs (Pj - Pk)
// Pj + Pk = Px
// Pk - Pj = Py

function pentagonPairDiff() {
    const P = []
    let i = 1

    while (true) {
        const plast = pentagonNumber(i)
        let j = 0
        let k = P.length - 1
        while (j <= k) {
            const px = P[j] + P[k]
            if (px === plast && P.includes(P[k] - P[j])) {
                return P[k] - P[j]
            } else if (px >= plast) {
                k--
            } else if (px < plast) {
                j++
            }
        }
        P.push(plast)
        i++
    }
}

console.log(pentagonPairDiff())
