function sumDifSquare(num) {
    const x = [...Array(num)]
        .map((_, i) => (i + 1) ** 2)
        .reduce((a, b) => a + b)
    const y = [...Array(num)]
        .map((_, i) => i + 1)
        .reduce((a, b) => a + b) ** 2
    return y - x
}

console.log(sumDifSquare(100))
