# Now this is the R way of doing this
primeSumUpto <- function (limit) {
    primesflag <- rep(TRUE, limit - 1)
    for (i in 2:limit) {
        for (j in 2:i) {
            target <- i * j
            if (target > limit) {
                break
            }
            primesflag[target - 1] <- FALSE
        }
    }
    primes <- c(2:limit)
    sum(primes[primesflag])
}

print(primeSumUpto(2000000))
