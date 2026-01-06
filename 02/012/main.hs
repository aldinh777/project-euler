calculateFactorSize num limit divider total
    | divider >= limit           = total
    | mod num divider == 0      = nextCalculation
    | otherwise                 = calculateWith limit total
    where
        nextLimit = div num divider
        calculateWith lim = calculateFactorSize num lim (divider + 1)
        nextCalculation
            | div num divider == divider    = calculateWith nextLimit (total + 1)
            | otherwise                     = calculateWith nextLimit (total + 2)

factorSize num = calculateFactorSize num num 1 0

factorSizeOver size num = factorSize num <= size

factorTriangleOver size =
    head $ dropWhile (factorSizeOver size) (scanl (+) 1 [2..])

main = do
    print $ factorTriangleOver 500
