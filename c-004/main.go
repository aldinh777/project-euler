package main

import (
	"math"
	"strconv"
)

func IsPalindrome(num int) bool {
	str := strconv.FormatInt(int64(num), 10)
	for i := 0; i < len(str)/2; i++ {
		if str[i] != str[len(str)-i-1] {
			return false
		}
	}
	return true
}

func LargestPalindrome(num int) int {
	if num == 0 {
		return 0
	}
	result := 0
	for i := num; i > 0; i-- {
		if IsPalindrome(num * i) {
			result = num * i
			break
		}
	}
	return int(math.Max(float64(result), float64(LargestPalindrome(num-1))))
}

func main() {
	println(LargestPalindrome(999))
}
