isPrime <- function(number) {
    limit <- number
    i <- 2
    while (i < limit) {
        if (number %% i == 0) {
            return(FALSE)
        } else {
            limit <- floor(number / i)
        }
        i <- i + 1
    }
    TRUE
}

primeAt <- function(at) {
    loopen <- 0
    number <- 1
    while (loopen < at) {
        number <- number + 1
        if (isPrime(number)) {
            loopen <- loopen + 1
        }
    }
    number
}

print(primeAt(10001))
