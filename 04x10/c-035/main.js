function theCoolerIsPrime(number, primelist) {
    let limitcheck = number
    for (let i of primelist) {
        if (i > limitcheck) {
            return true
        }
        if (number % i === 0) {
            return false
        } else {
            limitcheck = number / i
        }
    }
    return true
}

const primelist = []
for (let i = 2; i < 1_000_000; i++) {
    if (theCoolerIsPrime(i, primelist)) {
        primelist.push(i)
    }
}

function cycleNum(num) {
    const dig = String(num)
    const output = []
    for (let i = 0; i < dig.length; i++) {
        output.push(Number(dig.slice(i) + dig.slice(0, i)))
    }
    return output
}

let circularPrimeCpunt = 0
const primeset = new Set(primelist)

for (const primenum of primelist) {
    if (cycleNum(primenum).every((num) => primeset.has(num))) {
        circularPrimeCpunt++
    }
}

console.log(circularPrimeCpunt)
