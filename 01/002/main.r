fibEvenProc <- function(max) {
	sum <- 0
    a <- 0
    b <- 1
	while (b < max) {
		current <- a + b
        a <- b
		b <- current
		if (current %% 2 == 0) {
			sum <- sum + current
		}
	}
	sum
}

print(fibEvenProc(4000000))
