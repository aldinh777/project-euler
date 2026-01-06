package main

import "fmt"

func TheCoolerIsPrime(number int, primelist *[]int) bool {
	var limitcheck = number
	for index := 0; index < len(*primelist); index++ {
		var i = (*primelist)[index]
		if i > limitcheck {
			return true
		}
		if number%i == 0 {
			return false
		} else {
			limitcheck = number / i
		}
	}
	return true
}

func PrimeSumUpto(limit int) int64 {
	var primes []int
	var total = int64(0)
	for i := 2; i < limit; i++ {
		if TheCoolerIsPrime(i, &primes) {
			primes = append(primes, i)
			total += int64(i)
		}
	}
	return total
}

func main() {
	fmt.Println(PrimeSumUpto(2_000_000))
}
