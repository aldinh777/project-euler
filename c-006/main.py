def sumDifSquare(num):
    x = sum(map(lambda a: a ** 2, range(1, num + 1)))
    y = sum(range(1, num + 1)) ** 2
    return y - x

print(sumDifSquare(100))
