collatzRule num
    | even num      = div num 2
    | otherwise     = num * 3 + 1

collatzChain num
    | num == 1              = [1]
    | num == 2              = [2, 1]
    | otherwise             = num : collatzChain collatz
    where
        collatz = collatzRule num

chainList limit = [(a, length $ collatzChain a) | a <- [1..limit]]

compareTupple (indexA, valueA) (indexB, valueB)
    | valueA > valueB   = (indexA, valueA)
    | otherwise         = (indexB, valueB)

getKeyFromTupple (key, _) = key

longestCollatzChainBelow limit = getKeyFromTupple $ foldl compareTupple (0, 0) $ chainList limit

main = do
    print $ longestCollatzChainBelow 1_000_000
