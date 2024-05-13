function recursivePermutation(arr) {
    if (arr.length <= 1) {
        return [arr]
    }
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]
        const rest = arr.filter((v) => v !== num)
        const perm = recursivePermutation(rest)
        for (const p of perm) {
            result.push([num, ...p])
        }
    }
    return result
}

function isSpecial(digits) {
    const divisors = [2, 3, 5, 7, 11, 13, 17]
    for (let i = 0; i < divisors.length; i++) {
        const divisor = divisors[i]
        const startIndex = i + 1
        const num = parseInt(digits.slice(startIndex, startIndex + 3))
        if (num % divisor !== 0) {
            return false
        }
    }
    return true
}

const result = recursivePermutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    .map((n) => n.join(""))
    .filter(isSpecial)
    .map((a) => parseInt(a))
    .reduce((a, b) => a + b, 0)

console.log(result)
