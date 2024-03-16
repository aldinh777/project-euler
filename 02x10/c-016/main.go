package main

import (
	"fmt"
	"strconv"
)

func Digify(a *string, b *string) {
	if len(*a) > len(*b) {
		var oom = len(*a) - len(*b)
		for i := 0; i < oom; i++ {
			*b = "0" + *b
		}
	} else {
		var oom = len(*b) - len(*a)
		for i := 0; i < oom; i++ {
			*a = "0" + *a
		}
	}
}

func ChrAdd(a string, b string, r bool) (string, bool) {
	var num_a = int(a[0] - 48)
	var num_b = int(b[0] - 48)
	var rem = false
	var res = num_a + num_b
	if r {
		res += 1
	}
	if res >= 10 {
		rem = true
		res -= 10
	}
	var stress string = strconv.Itoa(res)
	return stress, rem
}

func StrAdd(a string, b string) string {
	var dupe_a, dupe_b = a, b
	var result, rem = "", false
	Digify(&dupe_a, &dupe_b)
	for i := len(dupe_a) - 1; i >= 0; i-- {
		var res, temprem = ChrAdd(string(dupe_a[i]), string(dupe_b[i]), rem)
		rem = temprem
		result = res + result
		if i == 0 && rem {
			result = "1" + result
		}
	}
	return result
}

func StrPow(strnum string, times int) string {
	var res = strnum
	for i := 1; i < times; i++ {
		res = StrAdd(res, res)
	}
	return res
}

func Sum2Power(power int) int {
	var powstr = StrPow("2", power)
	var result = 0
	for i := 0; i < len(powstr); i++ {
		var num = powstr[i] - 48
		result += int(num)
	}
	return result
}

func main() {
	fmt.Println(Sum2Power(1000))
}
