def sum2power(power):
    return sum([int(a) for a in str(pow(2, power))])

print(sum2power(1_000))
