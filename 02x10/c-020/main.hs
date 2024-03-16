factorial n = product [1..n]

factorialDigitSum n = sum [read [ch] :: Int | ch <- show $ factorial n]

main = do
    print $ factorialDigitSum 100
