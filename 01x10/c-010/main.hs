-- Code from someone at stackoverflow, since i was unable to complete this myself
-- Would use this thing from now on
primes = 2 : filter (isPrime primes) [3,5 ..]
  where
      isPrime (p:ps) x = p * p > x || rem x p /= 0 && isPrime ps x

-- Sorry little one...
theCoolerIsPrime num primelist = testPrime num num primelist
    where
        testPrime limit num primelist
            | null primelist        = True
            | limit <= iter         = True
            | mod num iter == 0     = False
            | otherwise             = testPrime (div num iter) num (tail primelist)
            where
                iter = head primelist

-- While it is indeed faster, but still... not fast enough for this to reach 2M
primeSumUptoButCooler limit = testSum 2 []
    where
        testSum iter primelist
            | iter >= limit                     = sum primelist
            | theCoolerIsPrime iter primelist   = testSum (iter + 1) (primelist ++ [iter])
            | otherwise                         = testSum (iter + 1) primelist

primeSumUpto limit =
    sum $ takeWhile (< limit) primes

main = do
    -- print $ primeSumUptoButCooler 2000000
    print $ primeSumUpto 2000000
