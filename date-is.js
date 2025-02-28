function isValid(date) {
    return !isNaN(date) && (date instanceof Date || typeof date === 'number')
}
function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2
}
function isBefore(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 < date2

}
function isFuture(date) {
    let now = new Date()
    return isValid(date) && isAfter(date, now)

}
function isPast(date) {
    let now = new Date()
    return isValid(date) && isBefore(date, now)

}

console.log(isValid(new Date()), isValid(Date.now()))