package main

func FibEvenProc(max int) int {
	sum, prev, next := 0, 0, 1
	for next < max {
		current := (prev + next)
		next, prev = current, next
		if current%2 == 0 {
			sum += current
		}
	}
	return sum
}

func main() {
	println(FibEvenProc(4_000_000))
}
