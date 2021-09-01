package main

func Sum35(max int) int {
	sum := 0
	for i := 0; i < max; i++ {
		if i%3 == 0 || i%5 == 0 {
			sum += i
		}
	}
	return sum
}

func main() {
	println(Sum35(1000))
}
