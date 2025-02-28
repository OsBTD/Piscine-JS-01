function firstDayWeek(week, year) {

    let firstday = new Date(year, 0, 1)
    firstday.setFullYear(Number(year))
    let firstMonday = new Date(firstday)
    while (firstMonday.getDay() !== 1) {
        firstMonday.setDate(firstMonday.getDate() - 1)
    }
    let result = new Date(firstMonday)

    if (week > 1) {
        result.setDate(firstMonday.getDate() + (7 * (week - 1)))
    } else {
        if (firstMonday.getFullYear() !== year) {
            result = firstday
        } else {
            result = firstMonday
        }
    }

    let d = result.getDate()
    let m = result.getMonth() + 1
    let y = result.getFullYear()
    return String(d).padStart(2, '0') + '-' + String(m).padStart(2, '0') + '-' + String(y).padStart(4, '0')
}
// console.log(firstDayWeek('2000'))

console.log(firstDayWeek(1, '1000'), '01-01-1000')
console.log(firstDayWeek(52, '1000'), '22-12-1000')
console.log(firstDayWeek(2, '0001'), '08-01-0001')
console.log(firstDayWeek(43, '1983'), '17-10-1983')
console.log(firstDayWeek(23, '0091'), '04-06-0091')
console.log(firstDayWeek(2, '2017'), '02-01-2017')

