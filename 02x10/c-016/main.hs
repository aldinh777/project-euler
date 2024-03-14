import Data.Char (ord)

charToi ch = ord ch - 48

sum2power num =
    sum $ map charToi $ show (round $ 2 ** num)

main = do
    print $ sum2power 1000
