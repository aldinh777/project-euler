-- Infinite List of Pythagoras Pair
infinagon = pythagon 1 1
    where
        pythagon oom pah
            | oom < pah         = pythagon (oom + 1) 1
            | oompah oom pah    = [oom, pah, l' oom pah] : pythagon oom (pah + 1)
            | otherwise         = pythagon oom (pah + 1)
        oompah oom pah = (oom ** 2) + (pah ** 2) == l' oom pah ** 2
        l' oom pah = sqrt $ (oom ** 2) + (pah ** 2)

pythagoreanTripletExplosion sumtotal =
    round $ head [product a| a <- infinagon, sum a == sumtotal]

main = do
    print $ pythagoreanTripletExplosion 1000
