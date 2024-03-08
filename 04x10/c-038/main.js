function isPandigital2(str) {
    let matcher = '0'
    while (str.length > 0) {
        if (str.match(matcher)) {
            return false
        }
        matcher = str[0]
        str = str.slice(1)
    }
    return true
}

const results = []

for (let i = 1; i <= 9999; i++) {
    let cat = ''
    let n
    for (n = 1; cat.length < 9; n++) {
        cat += i * n
    }
    if (cat.length === 9 && isPandigital2(cat)) {
        results.push(Number(cat))
    }
}

console.log(Math.max(...results))
