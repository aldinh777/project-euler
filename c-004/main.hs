isPalindrome num =
    show num == reverse (show num)

largestPalindrome num
    | num == 0      = 0
    | otherwise     = max result (largestPalindrome (num - 1))
    where
        result = head [num * a| a <- reverse [0..num], isPalindrome (num * a)]

main =
    print $ largestPalindrome 999
