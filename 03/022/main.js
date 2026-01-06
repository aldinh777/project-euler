const names = require('./names.json')

function sumScoreNames(list) {
    return list
        .sort()
        .map((s, i) => (i + 1) * s
            .split('')
            .map(s => s.charCodeAt(0) - 64)
            .reduce((a, b) => a + b)
        )
        .reduce((a, b) => a + b)
}

console.log(sumScoreNames(names))
