isPalindrome <- function(num) {
    str <- toString(num)
    str == paste(rev(strsplit(str, "")[[1]]), collapse="")
}

largestPalindrome <- function(num) {
    result <- 0
    for (i in num:0) {
        if (isPalindrome(num * i)) {
            result <- num * i
            break
        }
    }
    ifelse(num==0, 0, max(result, largestPalindrome(num-1)))
}

print(largestPalindrome(999))
