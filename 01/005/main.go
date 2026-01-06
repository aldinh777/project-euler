package main

import "fmt"

func AllReducable(num int, reducer int) bool {
	for i := 1; i <= reducer; i++ {
		if num%i != 0 {
			return false
		}
	}
	return true
}

func ReduceResult(num int, reducer int) int {
	for i := reducer; i > 1; i-- {
		if AllReducable(num/i, reducer) {
			return ReduceResult(num/i, reducer)
		}
	}
	return num
}

func SmallestDivisible(reducer int) int {
	var result = 1
	for i := 2; i <= reducer; i++ {
		result = ReduceResult(result*i, i)
	}
	return result
}

func main() {
	fmt.Println(SmallestDivisible(20))
}
