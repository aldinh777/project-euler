def allReducable(num, reducer):
    for i in range(1, reducer + 1):
        if num % i != 0:
            return False
    return True

def reduceResult(num, reducer):
    for i in range(reducer, 1, -1):
        if allReducable(num/i, reducer):
            return reduceResult(num/i, reducer)
    return num

def smallestDivisible(reducer):
    result = 1
    for i in range(2, reducer):
        result = reduceResult(result*i, i)
    return int(result)

print(smallestDivisible(20))
