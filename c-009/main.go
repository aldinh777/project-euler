package main

import "math"

func GetLastPair(a int, b int) float64 {
	return math.Sqrt(math.Pow(float64(a), 2) + math.Pow(float64(b), 2))
}

func IsPythagorasPair(a int, b int) bool {
	return math.Pow(float64(a), 2)+math.Pow(float64(b), 2) == math.Pow(GetLastPair(a, b), 2)
}

func pythagorean_triplet_explosion(sum_total int) int {
	a := 1
	for {
		for b := 1; a > b; b++ {
			if IsPythagorasPair(a, b) {
				c := GetLastPair(a, b)
				if float64(a+b)+c == float64(sum_total) {
					return a * b * int(c)
				}
			}
		}
		a = a + 1
	}
}

func main() {
	println(pythagorean_triplet_explosion(1000))
}
