package main

func LargestPrimeFactor(num int) int {
	for i := 2; i < num; i++ {
		if num%i == 0 {
			return LargestPrimeFactor(num / i)
		}
	}
	return num
}

func main() {
	println(LargestPrimeFactor(600_851_475_143))
}
