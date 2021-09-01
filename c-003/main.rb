def largestPrimeFactor num
    for i in 2...num
        if num % i == 0 then
            return largestPrimeFactor(num / i)
        end
    end
    num
end

puts largestPrimeFactor 600_851_475_143
