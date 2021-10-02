def factorial(n):
    return 1 if n <= 1 else n * factorial(n-1)

def digitFactorial(n):
    return sum([int(a) for a in str(factorial(n))])

print(digitFactorial(100))
