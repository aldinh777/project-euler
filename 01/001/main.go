package main

import "fmt"

func Sum35(max int) int {
	var sum = 0
	for i := 0; i < max; i++ {
		if i%3 == 0 || i%5 == 0 {
			sum += i
		}
	}
	return sum
}

func main() {
	fmt.Println(Sum35(1000))
}
