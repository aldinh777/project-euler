package main

import "fmt"
import "strconv"

func digify(a *string, b *string) {
	if len(*a) > len(*b) {
		oom := len(*a) - len(*b)
		for i := 0; i < oom; i++ {
			*b = "0" + *b
		}
	} else {
		oom := len(*b) - len(*a)
		for i := 0; i < oom; i++ {
			*a = "0" + *a
		}
	}
}

func chradd(a string, b string, r bool) (string, bool) {
	num_a := int(a[0] - 48)
	num_b := int(b[0] - 48)
	rem := false
	res := num_a + num_b
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

func stradd(a string, b string) string {
	dupe_a, dupe_b := a, b
	result, rem := "", false
	digify(&dupe_a, &dupe_b)
	for i := len(dupe_a) - 1; i >= 0; i-- {
		res, temprem := chradd(string(dupe_a[i]), string(dupe_b[i]), rem)
		rem = temprem
		result = res + result
		if i == 0 && rem {
			result = "1" + result
		}
	}
	return result
}

func strpow(strnum string, times int) string {
	res := strnum
	for i := 1; i < times; i++ {
		res = stradd(res, res)
	}
	return res
}

func sum2Power(power int) int {
	powstr := strpow("2", power)
	result := 0
	for i := 0; i < len(powstr); i++ {
		num := powstr[i] - 48
		result += int(num)
	}
	return result
}

func main() {
	fmt.Println(sum2Power(1000))
}
