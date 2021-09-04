def isPrime number
    limit = number
    i = 2
    while i < limit
        if number % i == 0
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
    while loopen < at
        number = number + 1
        if isPrime(number)
            loopen = loopen + 1
        end
    end
    number
end

print(primeAt(10001))
