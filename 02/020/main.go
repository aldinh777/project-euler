package main

import (
	"fmt"
	"math/big"
)

func Factorial(n int64) *big.Int {
	if n <= 1 {
		return big.NewInt(1)
	}
	return big.NewInt(0).Mul(big.NewInt(n), Factorial(n-1))
}

func FactorialDigitSum(n int64) int {
	var strresult = Factorial(n).String()
	var result = 0
	for i := 0; i < len(strresult); i++ {
		var num = strresult[i] - 48
		result += int(num)
	}
	return result
}

func main() {
	fmt.Println(FactorialDigitSum(100))
}
