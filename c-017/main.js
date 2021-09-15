const numbers = require('./numbers.json')

function numberLetter() {
    let result = 0
    for (let i in numbers) {
        const word = numbers[i].split('').filter(s => s !== ' ' && s !== '-').join('')
        result += word.length
    }
    return result
}

console.log(numberLetter())
