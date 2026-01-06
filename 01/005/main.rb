def allReducable num, reducer
    for i in 1..reducer do
        if num % i != 0 then
            return false
        end
    end
    true
end

def reduceResult num, reducer
    for i in (2..reducer).reverse_each do
        if allReducable(num/i, reducer) then
            return reduceResult(num/i, reducer)
        end
    end
    num
end

def smallestDivisible reducer
    result = 1
    for i in 2..reducer do
        result = reduceResult(result*i, i)
    end
    result
end

puts smallestDivisible(20)
