function fibEvenProc(max) {
    let sum = 0, prev = 0, next = 1
    while (next < max) {
        const current = prev + next
        if (current % 2 == 0) {
            sum += current
        }
        prev = next
        next = current
    }
    return sum
}

console.log(fibEvenProc(4_000_000))
