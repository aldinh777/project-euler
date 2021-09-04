getLastPair <- function(a, b) {
    sqrt(a ** 2 + b ** 2)
}

isPythagorasPair <- function(a, b) {
    a ** 2 + b ** 2 == getLastPair(a, b) ** 2
}

pythagoreanTripletExplosion <- function(sumTotal) {
    a <- 1
    while (TRUE) {
        for (b in 1:a) {
            if (isPythagorasPair(a, b)) {
                c <- getLastPair(a, b)
                if (a + b + c == sumTotal) {
                    return(a * b * c)
                }
            }
        }
        a <- a + 1
    }
}

print(pythagoreanTripletExplosion(1000))
