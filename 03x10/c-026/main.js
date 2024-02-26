let it = 0
function repricocalistization(str, min) {
    for (let i = min; i < str.length; i++) {
        const a = str.slice(0, i)
        const b = str.slice(i, i * 2)
        for (let j = 0; j < i; j++) {
            const ax = a.slice(j, i)
            const bx = b.slice(0, i - j)
            it++
            if (ax === bx) {
                const cx = str.slice(i, str.length)
                const lenx = cx.length - (cx.length % ax.length)
                const dx = cx.slice(0, lenx)
                const reglen = [...dx.matchAll(ax)].length
                const correct = ax.length === dx.length / reglen
                if (correct) {
                    return ax
                }
            }
        }
    }
    return ''
}

function manualDivision(a, b, at = 0) {
    const c = Math.floor(a / b)
    const d = a % b
    if (d === 0 || at >= 2000) {
        return c
    } else {
        return c + (at === 0 ? '.' : '') + manualDivision(d * 10, b, at + 1)
    }
}

function lengthestReciprocal() {
    let maxrep = '0'
    let result = 0
    for (let i = 2; i < 1000; i++) {
        const m = manualDivision(1, i)
        const rep = repricocalistization(m, maxrep.length)
        if (rep.length > maxrep.length) {
            maxrep = rep
            result = i
        }
    }
    return result
}

console.log(lengthestReciprocal())
console.log(it.toLocaleString())
