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

function lexicographicPermutationsAt(arr, at) {
    const result = recursivePermutation(arr)
    return result[at - 1].join('')
}

function factorial(num) {
    return num > 1 ? num * factorial(num - 1) : 1
}

function theFasterLexicographicPermutationIndex(arr, at) {
    if (arr.length < 1) {
        return '';
    }
    const index = at - 1
    const fac = factorial(arr.length - 1)
    const permIndex = Math.floor(index / fac)
    const nextAt = index - fac * permIndex + 1
    const result = arr.splice(permIndex, 1)
    return '' + result + theFasterLexicographicPermutationIndex(arr, nextAt)
}

// console.log(lexicographicPermutationsAt([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1_000_000))
console.log(theFasterLexicographicPermutationIndex([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1_000_000))
