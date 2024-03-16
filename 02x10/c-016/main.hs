sum2power num =
    sum $ map (\x -> read [x] :: Int) $ show (round $ 2 ** num)

main = do
    print $ sum2power 1000
