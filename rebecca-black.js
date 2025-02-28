function isFriday(date) {
    return date.getDay() === 5
}
function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0
}
function isLeapYear(date) {
    return date.getYear() % 4 === 0
}
function isLastDayOfMonth(date) {
    let month = date.getMonth() + 1
    let next = new Date(date)
    next.setDate(date.getDate() + 1)

    return month !== next.getMonth() + 1
}

console.log(isLastDayOfMonth(new Date('2020-02-29')))
console.log(isLastDayOfMonth(new Date('2020-12-31')))
console.log(isLastDayOfMonth(new Date('2019-02-28')))
console.log(isLastDayOfMonth(new Date('1998-02-28')))
console.log(isLastDayOfMonth(new Date('1980-02-29')))
console.log(isLastDayOfMonth(new Date('2020-12-30')))
console.log(isLastDayOfMonth(new Date('2020-02-28')))
console.log(isLastDayOfMonth(new Date('2019-02-29')))
