def isPrime number
    limit = number
    i = 2
    while i < limit do
        if number % i == 0 then
            return false
        else
            limit = number / i.to_i
        end
        i = i + 1
    end
    true
end

def primeAt at
    loopen, number = 0, 1
    while loopen < at do
        number = number + 1
        if isPrime(number) then
            loopen = loopen + 1
        end
    end
    number
end

puts primeAt(10001)
