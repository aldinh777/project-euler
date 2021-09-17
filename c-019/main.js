function numberOfSundays() {
    let sundays = 0
    for (let year = 1901; year <= 2000; year++) {
        for (let month = 0; month < 12; month++) {
            const theDay = new Date(year, month, 1)
            if (theDay.getDay() === 0) {
                sundays++
            }
        }
    }
    return sundays
}

console.log(numberOfSundays())
