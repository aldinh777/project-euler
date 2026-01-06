def collatzRule(num):
    return num // 2 if num % 2 == 0 else num * 3 + 1

def fillChain(num, dic):
    stack = [num]
    collatz = num
    while dic.get(collatz) == None:
        stack.append(collatz)
        collatz = collatzRule(collatz)
    while len(stack):
        pop = stack.pop()
        moreChain = dic.get(collatzRule(pop)) + 1
        dic[pop] = moreChain

def largestChain(limit):
    chainLength = {1: 1}
    for i in range(2, limit + 1):
        fillChain(i, chainLength)
    largestIndex = 0
    largestValue = 0
    for i, val in chainLength.items():
        if val > largestValue:
            largestValue = val
            largestIndex = i
    return largestIndex

print(largestChain(1_000_000))
