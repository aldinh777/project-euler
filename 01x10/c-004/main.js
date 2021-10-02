function isPalindrome(num) {
    return num == num.toString()
        .split('')
        .reverse()
        .join('')
}

function largestPalindrome(num) {
    let result = 0
    for (let i = num; i > 0; i--) {
        if (isPalindrome(num * i)) {
            result = num * i
            break
        }
    }
    return num > 0 ? Math.max(result, largestPalindrome(num - 1)) : 0
}

console.log(largestPalindrome(999))
