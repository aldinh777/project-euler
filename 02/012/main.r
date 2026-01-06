factorsLengthOver <- function(num, max) {
    totalFactor <- 0
    limit <- num
    i <- 1
    while (i < limit) {
        if (num %% i == 0) {
            if (num / i == i) {
                totalFactor <- totalFactor + 1
            } else {
                totalFactor <- totalFactor + 2
            }
            limit <- num / i
            if (totalFactor > max) {
                return(TRUE)
            }
        }
        i <- i + 1
    }
    FALSE
}

triangleFactorOver <- function(maxFactor) {
    triangle <- 0
    i <- 1
    while (TRUE) {
        triangle <- triangle + i
        if (factorsLengthOver(triangle, maxFactor)) {
            break
        }
        i <- i + 1
    }
    triangle
}

print(triangleFactorOver(5))
