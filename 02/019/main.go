package main

import (
	"fmt"
	"strconv"
	"time"
)

func NumberOfSundays() int {
	var sundays = 0
	for year := 1901; year <= 2000; year++ {
		for month := 1; month <= 12; month++ {
			var strMonth = strconv.Itoa(month)
			var strYear = strconv.Itoa(year)
			var theDay, _ = time.Parse("1-2006", strMonth+"-"+strYear)
			if theDay.Weekday() == time.Sunday {
				sundays++
			}
		}
	}
	return sundays
}

func main() {
	fmt.Println(NumberOfSundays())
}
