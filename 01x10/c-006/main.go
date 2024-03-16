package main

import (
	"fmt"
	"math"
)

func SumDifSquare(num int) int {
	var x, y = 0, 0
	for i := 1; i <= num; i++ {
		x += int(math.Pow(float64(i), 2))
	}
	for i := 0; i <= num; i++ {
		y += i
	}
	return int(math.Pow(float64(y), 2)) - x
}

func main() {
	fmt.Println(SumDifSquare(100))
}
