theCoolerIsPrime <- function (number, primelist) {
    limitcheck <- number
    for (i in primelist) {
        if (i > limitcheck) {
            return(TRUE)
        }
        if (number %% i == 0) {
            return(FALSE)
        } else {
            limitcheck <- number / i
        }
    }
    TRUE
}

primeSumUpto <- function (limit) {
    primes <- c()
    for (i in 2:limit) {
        if (theCoolerIsPrime(i, primes)) {
            primes <- c(primes, i)
        }
    }
    sum(primes)
}

print(primeSumUpto(2000000))
