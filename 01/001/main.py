def sum35(max):
    return sum([a for a in range(max) if (a % 3 == 0) or (a % 5 == 0)])

print(sum35(1000))
