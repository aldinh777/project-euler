package main

import "fmt"

func FactorsLengthOver(num int, max int) bool {
	var totalFactor = 0
	var limit = num
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

func TriangleFactorOver(maxFactor int) int {
	var triangle = 0
	for i := 1; ; i++ {
		triangle += i
		if FactorsLengthOver(triangle, maxFactor) {
			break
		}
	}
	return triangle
}

func main() {
	fmt.Println(TriangleFactorOver(500))
}
