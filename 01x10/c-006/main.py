def sumDifSquare(num):
    x = sum([a ** 2 for a in range(1, num + 1)])
    y = sum(range(1, num + 1)) ** 2
    return y - x

print(sumDifSquare(100))
