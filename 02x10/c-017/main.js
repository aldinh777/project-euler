const numbers = require('./numbers.json')

function numberLetter() {
    let result = 0
    for (let i in numbers) {
        result += numbers[i].replace(/[ -]/g, '').length
    }
    return result
}

console.log(numberLetter())
