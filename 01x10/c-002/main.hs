fibonaccis = scanl (+) 1 (1:fibonaccis)

fibEven max =
    sum [a | a <- takeWhile (< max) fibonaccis, even a]

main = do
    print $ fibEven 4000000
