package main

import "fmt"

func CollatzRule(num int) int {
	if num%2 == 0 {
		return num / 2
	} else {
		return num*3 + 1
	}
}

func FillChain(num int, collatzMap *map[int]int, indexes *[]int) {
	var stack = []int{num}
	var collatz = num
	var _, has = (*collatzMap)[collatz]
	for !has {
		stack = append(stack, collatz)
		collatz = CollatzRule(collatz)
		_, has = (*collatzMap)[collatz]
	}
	for len(stack) > 0 {
		var ln = len(stack)
		var pop = stack[ln-1]
		stack = stack[:ln-1]
		var moreChain = (*collatzMap)[CollatzRule(pop)] + 1

		(*collatzMap)[pop] = moreChain
		*indexes = append(*indexes, pop)
	}
}

func LargestChain(limit int) int {
	var indexes = []int{1}
	var chainLength = map[int]int{1: 1}
	for i := 2; i <= limit; i++ {
		FillChain(i, &chainLength, &indexes)
	}
	var largestIndex = 0
	var largestValue = 0
	for i, val := range chainLength {
		if val > largestValue {
			largestValue = val
			largestIndex = i
		}
	}
	return largestIndex
}

func main() {
	fmt.Println(LargestChain(1_000_000))
}
