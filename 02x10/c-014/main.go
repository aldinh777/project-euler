package main

import "fmt"

func collatzRule(num int) int {
	if num%2 == 0 {
		return num / 2
	} else {
		return num*3 + 1
	}
}

func fillChain(num int, collatzMap *map[int]int, indexes *[]int) {
	stack := []int{num}
	collatz := num
	_, has := (*collatzMap)[collatz]
	for !has {
		stack = append(stack, collatz)
		collatz = collatzRule(collatz)
		_, has = (*collatzMap)[collatz]
	}
	for len(stack) > 0 {
		ln := len(stack)
		pop := stack[ln-1]
		stack = stack[:ln-1]
		moreChain := (*collatzMap)[collatzRule(pop)] + 1

		(*collatzMap)[pop] = moreChain
		*indexes = append(*indexes, pop)
	}
}

func largestChain(limit int) int {
	indexes := []int{1}
	chainLength := map[int]int{1: 1}
	for i := 2; i <= limit; i++ {
		fillChain(i, &chainLength, &indexes)
	}
	largestIndex := 0
	largestValue := 0
	for i, val := range chainLength {
		if val > largestValue {
			largestValue = val
			largestIndex = i
		}
	}
	return largestIndex
}

func main() {
	fmt.Println(largestChain(1_000_000))
}
