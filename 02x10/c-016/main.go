package main

import (
	"fmt"
	"math/big"
)

func Sum2PowerBig(power int64) int {
	var powstr = big.NewInt(0).Exp(big.NewInt(2), big.NewInt(power), nil).String()
	var result = 0
	for i := 0; i < len(powstr); i++ {
		var num = powstr[i] - 48
		result += int(num)
	}
	return result
}

func main() {
	fmt.Println(Sum2PowerBig(1000))
}
