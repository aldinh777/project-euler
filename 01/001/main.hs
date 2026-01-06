sum35 max =
    sum [a | a <- [0..(max-1)], mod a 3 == 0 || mod a 5 == 0]

main = do
    print $ sum35 1000
