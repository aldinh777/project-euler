function getBritishVocal(num) {
    switch (num) {
        case 0: return ''
        case 1: return 'one'
        case 2: return 'two'
        case 3: return 'three'
        case 4: return 'four'
        case 5: return 'five'
        case 6: return 'six'
        case 7: return 'seven'
        case 8: return 'eight'
        case 9: return 'nine'
        case 10: return 'ten'
        case 11: return "eleven"
        case 12: return "twelve"
        case 13: return "thirteen"
        case 14: return "fourteen"
        case 15: return "fifteen"
        case 16: return "sixteen"
        case 17: return "seventeen"
        case 18: return "eighteen"
        case 19: return "nineteen"
        case 20: return "twenty"
        case 30: return "thirty"
        case 40: return "forty"
        case 50: return "fifty"
        case 60: return "sixty"
        case 70: return "seventy"
        case 80: return "eighty"
        case 90: return "ninety"
    }
    if (num > 999) {
        const thousandth = Math.floor(num / 1000)
        const rest = num - 1000 * thousandth
        const vocalThousandth = getBritishVocal(thousandth) + ' thousand'
        const vocalRest = rest > 0 ? ' and' + getBritishVocal(rest) : ''
        return vocalThousandth + vocalRest
    }
    if (num > 99) {
        const hundredth = Math.floor(num / 100)
        const rest = num - 100 * hundredth
        const vocalHundred = getBritishVocal(hundredth) + ' hundred'
        const vocalRest = rest > 0 ? ' and' + getBritishVocal(rest) : ''
        return vocalHundred + vocalRest
    }
    if (num > 20) {
        const tenth = Math.floor(num / 10) * 10
        const onceth = num % 10
        return getBritishVocal(tenth) + '-' + getBritishVocal(onceth)
    }
}

function numberLetter() {
    let result = 0
    for (let i = 1; i <= 1000; i++) {
        result += getBritishVocal(i).replace(/[ -]/g, '').length        
    }
    return result
}

console.log(numberLetter())
