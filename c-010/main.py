def theCoolerIsPrime(number, primelist):
    limitcheck = number
    for i in primelist:
        if i > limitcheck:
            return True
        if number % i == 0:
            return False
        else:
            limitcheck = number / i
    return True

def primeSumUpto(limit):
    primes = []
    for i in range(2, limit):
        if theCoolerIsPrime(i, primes):
            primes.append(i)
    return sum(primes)

print(primeSumUpto(2_000_000))
