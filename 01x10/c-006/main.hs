sumDifSquare num =
    sum [1..num] ^ 2 - sum [a ^ 2| a <- [1..num]]

main = do
    print $ sumDifSquare 100
