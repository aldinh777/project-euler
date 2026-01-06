function distincPowers(maxPower) {
    const s = new Set()
    for (let a = 2; a <= maxPower; a++) {
        for (let b = 2; b <= maxPower; b++) {
            s.add(a ** b)
        }
    }
    return s.size
}

console.log(distincPowers(100))
