def factorsLengthOver(num, maxnum):
    totalFactor = 0
    limit = num
    i = 1
    while i < limit:
        if num % i == 0:
            if num / i == i:
                totalFactor += 1
            else:
                totalFactor += 2
            limit = num / i
            if totalFactor > maxnum:
                return True
        i += 1
    return False

def triangleFactorOver(maxFactor):
    triangle = 0
    i = 1
    while True:
        triangle += i
        if factorsLengthOver(triangle, maxFactor):
            break
        i += 1
    return triangle

print(triangleFactorOver(500))
