-- i've lost my mind, it works, i don't even know how?
-- but it works, so i wouldn't even ask
gridlist x
    | x == 1    = [1 | a <- [1..]]
    | otherwise = scanl (+) (head beeflist * 2) $ tail beeflist
    where
        beeflist = tail $ gridlist (x - 1)

latticeRoutes grid = head $ gridlist grid

main = do
    print $ latticeRoutes 20
