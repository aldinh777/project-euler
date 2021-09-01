sum35 <- function(max) {
    vec <- 0:(max-1)
    vec <- vec[Vectorize(\(a) a %% 3 == 0 || a %% 5 == 0)(vec)]
    sum(vec)
}

print(sum35(1000))
