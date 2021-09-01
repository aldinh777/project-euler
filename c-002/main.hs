fibonaccis = scanl (+) 1 (1:fibonaccis)

fibEven max =
    sum [a | a <- takeWhile (< max) fibonaccis, even a]

main =
    print $ fibEven 4000000
