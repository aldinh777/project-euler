def largestPrimeFactor(num):
    for i in range(2, num):
        if num % i == 0:
            return largestPrimeFactor(int(num / i))
    return num

print(largestPrimeFactor(600_851_475_143))
