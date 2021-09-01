findMatch condition list
    | null list                 = 0
    | condition (head list)     = head list
    | otherwise                 = findMatch condition (tail list)

largestPrimeFactor num
    | divider == 0              = num
    | otherwise                 = largestPrimeFactor (div num divider)
    where
        divider = findMatch (\a -> mod num a == 0) [2..(num-1)]

main =
    print $ largestPrimeFactor 600851475143
