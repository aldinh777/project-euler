package main

import "fmt"

func GetBriishVocal(num int) string {
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
		var thousandth = num / 1000
		var theRest = num - 1000*thousandth
		var theRestVocal = ""
		if theRest > 0 {
			theRestVocal = " and " + GetBriishVocal(theRest)
		}
		return GetBriishVocal(thousandth) + " thousand" + theRestVocal
	}
	if num > 99 {
		var hundredth = num / 100
		var theRest = num - 100*hundredth
		var theRestVocal = ""
		if theRest > 0 {
			theRestVocal = " and " + GetBriishVocal(theRest)
		}
		return GetBriishVocal(hundredth) + " hundred" + theRestVocal
	}
	if num > 20 {
		var tenth = num / 10 * 10
		var oneth = num % 10
		return GetBriishVocal(tenth) + "-" + GetBriishVocal(oneth)
	}
	return ""
}

func CountValidLetters(strnum string) int {
	var length = 0
	for i := 0; i < len(strnum); i++ {
		var ch = strnum[i]
		if ch != ' ' && ch != '-' {
			length++
		}
	}
	return length
}

func NumberLetters() int {
	var result = 0
	for i := 1; i <= 1000; i++ {
		result += CountValidLetters(GetBriishVocal(i))
	}
	return result
}

func main() {
	fmt.Println(NumberLetters())
}
