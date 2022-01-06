package main

import "fmt"

func factorsLengthOver(num int, max int) bool {
	totalFactor := 0
	limit := num
	for i := 1; i < limit; i++ {
		if num%i == 0 {
			if num/i == i {
				totalFactor += 1
			} else {
				totalFactor += 2
			}
			limit = num / i
			if totalFactor > max {
				return true
			}
		}
	}
	return false
}

func triangleFactorOver(maxFactor int) int {
	triangle := 0
	for i := 1; ; i++ {
		triangle += i
		if factorsLengthOver(triangle, maxFactor) {
			break
		}
	}
	return triangle
}

func main() {
	fmt.Println(triangleFactorOver(500))
}
