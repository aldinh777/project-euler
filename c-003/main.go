package main

import "fmt"

func LargestPrimeFactor(num int) int {
	for i := 2; i < num; i++ {
		if num%i == 0 {
			return LargestPrimeFactor(num / i)
		}
	}
	return num
}

func main() {
	fmt.Println(LargestPrimeFactor(600_851_475_143))
}
