def isPrime(number):
    limit = number
    i = 2
    while i < limit:
        if number % i == 0:
            return False
        else:
            limit = int(number / i)
        i += 1
    return True

def primeAt(at):
    loopen, number = 0, 1
    while loopen < at:
        number += 1
        if isPrime(number):
            loopen += 1
    return number

print(primeAt(10001))
