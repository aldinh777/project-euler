def theCoolerIsPrime number, primelist
    limitcheck = number
    for i in primelist do
        if i > limitcheck then
            return true
        end
        if number % i == 0 then
            return false
        else
            limitcheck = number / i
        end
    end
    true
end

def primeSumUpto limit
    primes = []
    for i in 2..limit do
        if theCoolerIsPrime(i, primes) then
            primes.push(i)
        end
    end
    primes.sum
end

puts primeSumUpto(2_000_000)
