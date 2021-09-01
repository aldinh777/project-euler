def fibEvenProc(max):
    sum, prev, next = 0, 0, 1
    while next < max:
        current = prev + next
        if current % 2 == 0:
            sum += current
        prev, next = next, current
    return sum

print(fibEvenProc(4_000_000))
