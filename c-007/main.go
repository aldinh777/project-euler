package main

import "math"

func isPrime(number int) bool {
	limit := number
	for i := 2; i < limit; i++ {
		if number%i == 0 {
			return false
		} else {
			limit = int(math.Floor(float64(number / i)))
		}
	}
	return true
}

func primeAt(at int) int {
	loopen, number := 0, 1
	for loopen < at {
		number++
		if isPrime(number) {
			loopen++
		}
	}
	return number
}

func main() {
	println(primeAt(10001))
}
