getBritishVocal 0 = ""
getBritishVocal 1 = "one"
getBritishVocal 2 = "two"
getBritishVocal 3 = "three"
getBritishVocal 4 = "four"
getBritishVocal 5 = "five"
getBritishVocal 6 = "six"
getBritishVocal 7 = "seven"
getBritishVocal 8 = "eight"
getBritishVocal 9 = "nine"
getBritishVocal 10 = "ten"
getBritishVocal 11 = "eleven"
getBritishVocal 12 = "twelve"
getBritishVocal 13 = "thirteen"
getBritishVocal 14 = "fourteen"
getBritishVocal 15 = "fifteen"
getBritishVocal 16 = "sixteen"
getBritishVocal 17 = "seventeen"
getBritishVocal 18 = "eighteen"
getBritishVocal 19 = "nineteen"
getBritishVocal 20 = "twenty"
getBritishVocal 30 = "thirty"
getBritishVocal 40 = "forty"
getBritishVocal 50 = "fifty"
getBritishVocal 60 = "sixty"
getBritishVocal 70 = "seventy"
getBritishVocal 80 = "eighty"
getBritishVocal 90 = "ninety"
getBritishVocal num
    | num > 999     = getBritishVocal thousandth ++ " thousand" ++ vocalRestThousand
    | num > 99      = getBritishVocal hundredth ++ " hundred" ++ vocalRestHundred
    | num > 20      = getBritishVocal (div num 10 * 10) ++ "-" ++ getBritishVocal(mod num 10)
    where
        thousandth = div num 1000
        hundredth = div num 100
        restThousand = num - 1000 * thousandth
        restHundred = num - 100 * hundredth
        vocalRestThousand = if restThousand > 0 then " and " ++ getBritishVocal restThousand else ""
        vocalRestHundred = if restHundred > 0 then " and " ++ getBritishVocal restHundred else ""

numberVocalCount num = length [a | a <- getBritishVocal num, a /= ' ' && a /= '-']

numberLetterCounts = sum [numberVocalCount a | a <- [1..1000]]

main = do
    print numberLetterCounts
