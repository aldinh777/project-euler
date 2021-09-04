import math

def getLastPair(a, b):
    return math.sqrt(a ** 2 + b ** 2)

def isPythagorasPair(a, b):
    return a ** 2 + b ** 2 == getLastPair(a, b) ** 2

def pythagoreanTripletExplosion(sumTotal):
    a = 1
    while True:
        for b in range(1, a):
            if isPythagorasPair(a, b):
                c = getLastPair(a, b)
                if a + b + c == sumTotal:
                    return int(a * b * c)
        a = a + 1

print(pythagoreanTripletExplosion(1000))
