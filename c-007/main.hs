isPrime num = testPrime 2 num num
    where
        testPrime iter limit num
            | limit <= iter         = True
            | mod num iter == 0     = False
            | otherwise             = testPrime (iter + 1) (div num iter) num

primeAt at = testPrimeAt 0 at 2
    where
        testPrimeAt iter maxIter numcheck
            | iter == maxIter       = numcheck - 1
            | isPrime numcheck      = testPrimeAt (iter + 1) maxIter (numcheck + 1)
            | otherwise             = testPrimeAt iter maxIter (numcheck + 1)

main =
    print $ primeAt 10001
