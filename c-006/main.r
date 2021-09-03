sumDifSquare <- function(num) {
    x <- sum((1:num) ** 2)
    y <- sum(1:num) ** 2
    y - x
}

print(sumDifSquare(100))
