function largestPrimeFactor(num) {
	for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return largestPrimeFactor(num / i)
        }
    }
    return num
}

console.log(largestPrimeFactor(600_851_475_143))
