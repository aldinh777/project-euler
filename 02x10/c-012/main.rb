def factorsLengthOver num, maxnum
    totalFactor = 0
    limit = num
    i = 1
    while i < limit do
        if num % i == 0 then
            if num / i == i then
                totalFactor += 1
            else
                totalFactor += 2
            end
            limit = num / i
            if totalFactor > maxnum then
                return true
            end
        end
        i += 1
    end
    false
end

def triangleFactorOver maxFactor
    triangle = 0
    i = 1
    loop do
        triangle += i
        break if factorsLengthOver(triangle, maxFactor)
        i += 1
    end
    triangle
end

puts triangleFactorOver(500)
