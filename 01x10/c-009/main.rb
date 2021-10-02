def getLastPair a, b
    return Math.sqrt(a ** 2 + b ** 2)
end

def isPythagorasPair a, b
    return a ** 2 + b ** 2 === getLastPair(a, b) ** 2
end

def pythagoreanTripletExplosion sumTotal
    a = 1
    loop do
        for b in 1..a do
            if isPythagorasPair(a, b) then
                c = getLastPair(a, b)
                if a + b + c == sumTotal then
                    return (a * b * c).to_i
                end
            end
        end
        a = a + 1
    end
end

puts pythagoreanTripletExplosion(1000)
