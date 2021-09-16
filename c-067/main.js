const triangleOfDestiny = require('./demons.json')

function findLargeRoute(index, triangle) {
    if (!triangle[index + 1]) {
        return triangle[index]
    }
    const triangleOfDeath = triangle[index]
    const triangelOfSuffer = findLargeRoute(index + 1, triangle)
    return triangleOfDeath.map((val, idx) => val + Math.max(triangelOfSuffer[idx], triangelOfSuffer[idx + 1]))
}

function largestRoute(triangle) {
    const [result] = findLargeRoute(0, triangle)
    return result
}

console.log(largestRoute(triangleOfDestiny))
