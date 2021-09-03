allReducable <- function(num, reducer) {
    for (i in 1:reducer) {
        if (num %% i != 0) {
            return(FALSE)
        }
    }
    TRUE
}

reduceResult <- function(num, reducer) {
    for (i in reducer:2) {
        if (allReducable(num / i, reducer)) {
            return(reduceResult(num / i, reducer))
        }
    }
    num
}

smallestDivisible <- function(reducer) {
    result <- 1
    for (i in 2:reducer) {
        result <- reduceResult(result * i, i)
    }
    result
}

print(smallestDivisible(20))
