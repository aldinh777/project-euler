def allReducable num, reducer
    for i in 1..reducer
        if num % i != 0
            return false
        end
    end
    true
end

def reduceResult num, reducer
    for i in (2..reducer).reverse_each
        if allReducable(num/i, reducer)
            return reduceResult(num/i, reducer)
        end
    end
    num
end

def smallestDivisible reducer
    result = 1
    for i in 2..reducer
        result = reduceResult(result*i, i)
    end
    return result
end

puts smallestDivisible 20
