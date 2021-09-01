largestPrimeFactor <- function(num) {
    for (i in 2:(num-1)) {
        if (num %% i == 0) {
            return(largestPrimeFactor(num / i))
        }
    }
    num
}

print(largestPrimeFactor(600851475143))
