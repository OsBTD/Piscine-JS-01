function sunnySunday(date) {
    const weekday = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    const newEpoch = new Date('0001-01-01');
    const ms = date - newEpoch
    let toDay = Math.floor(ms / (1000 * 60 * 60 * 24))
    return weekday[toDay % 6]
}

console.log(sunnySunday(new Date('0001-01-01')))
// === 'Monday')
console.log(sunnySunday(new Date('0001-01-02')))
// === 'Tuesday')
console.log(sunnySunday(new Date('0001-01-03')))
// === 'Wednesday')
console.log(sunnySunday(new Date('0001-01-04')))
// === 'Thursday')
console.log(sunnySunday(new Date('0001-01-05')))
// === 'Friday')
console.log(sunnySunday(new Date('0001-01-06')))
// === 'Saturday')
console.log(sunnySunday(new Date('0001-01-07')))
// === 'Monday')
console.log(sunnySunday(new Date('0001-12-01')))
// === 'Friday')
console.log(sunnySunday(new Date('1664-08-09')))
// === 'Saturday')
console.log(sunnySunday(new Date('2020-01-01')))
// === 'Monday')
console.log(sunnySunday(new Date('2048-12-08')))
// === 'Thursday')

