function isPalindrome(str) {
    return str === str.split('').reverse().join('')
}

function doubleBasePalindromeSum() {
    let sum = 0
    for (let i = 1; i < 1_000_000; i++) {
        if (isPalindrome(i.toString()) && isPalindrome(i.toString(2))) {
            sum += i
        }
    }
    return sum
}


console.log(doubleBasePalindromeSum())