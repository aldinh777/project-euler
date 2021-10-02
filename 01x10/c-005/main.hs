allReducable num reducer = all (== 0) [mod num a| a <- [1..reducer]]

reduceResult num reducer
    | null result               = num
    | otherwise                 = reduceResult (head result) reducer
    where
        result = [div num a| a <- reverse [2..reducer], allReducable (div num a) reducer]

smallestDivisible reducer
    | reducer == 1              = 1
    | otherwise                 = reduceResult result reducer
    where
        result = smallestDivisible (reducer - 1) * reducer

main = do
    print $ smallestDivisible 20
