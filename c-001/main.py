def sum35(max):
    array = range(max)
    array = filter(lambda a: (a % 3 == 0) or (a % 5 == 0), array)
    return sum(array)

print(sum35(1000))
