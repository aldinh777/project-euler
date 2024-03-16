package main

import (
	"fmt"
	"strings"
)

func getBriishVocal(num int) string {
	switch num {
	case 0:
		return ""
	case 1:
		return "one"
	case 2:
		return "two"
	case 3:
		return "three"
	case 4:
		return "four"
	case 5:
		return "five"
	case 6:
		return "six"
	case 7:
		return "seven"
	case 8:
		return "eight"
	case 9:
		return "nine"
	case 10:
		return "ten"
	case 11:
		return "eleven"
	case 12:
		return "twelve"
	case 13:
		return "thirteen"
	case 14:
		return "fourteen"
	case 15:
		return "fifteen"
	case 16:
		return "sixteen"
	case 17:
		return "seventeen"
	case 18:
		return "eighteen"
	case 19:
		return "nineteen"
	case 20:
		return "twenty"
	case 30:
		return "thirty"
	case 40:
		return "forty"
	case 50:
		return "fifty"
	case 60:
		return "sixty"
	case 70:
		return "seventy"
	case 80:
		return "eighty"
	case 90:
		return "ninety"
	}
	if num > 999 {
		thousandth := num / 1000
		theRest := num - 1000*thousandth
		theRestVocal := ""
		if theRest > 0 {
			theRestVocal = " and " + getBriishVocal(theRest)
		}
		return getBriishVocal(thousandth) + " thousand" + theRestVocal
	}
	if num > 99 {
		hundredth := num / 100
		theRest := num - 100*hundredth
		theRestVocal := ""
		if theRest > 0 {
			theRestVocal = " and " + getBriishVocal(theRest)
		}
		return getBriishVocal(hundredth) + " hundred" + theRestVocal
	}
	if num > 20 {
		tenth := num / 10 * 10
		oneth := num % 10
		return getBriishVocal(tenth) + "-" + getBriishVocal(oneth)
	}
	return ""
}

func countLetters(strnum string) int {
	strnum = strings.ReplaceAll(strnum, " ", "")
	strnum = strings.ReplaceAll(strnum, "-", "")
	return len(strnum)
}

func numberLetters() int {
	result := 0
	for i := 1; i <= 1000; i++ {
		result += countLetters(getBriishVocal(i))
	}
	return result
}

func main() {
	fmt.Println(numberLetters())
}
