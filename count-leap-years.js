function countLeapYears(date) {
    let c = 0
    for (let i = date.getFullYear()-1; i >= 1; i--) {
        if (isLeapYear(i)) {
            c++
        }
    }
    return c
}
function isLeapYear(date) {
    return (date % 4 === 0 && date % 100 !== 0) || (date % 4 === 0 && date % 100 === 0 && date % 400 === 0)
}

console.log(countLeapYears(new Date('0001-12-01')))

//=== 0)
console.log(countLeapYears(new Date('1664-08-09')))
// === 403)
console.log(countLeapYears(new Date('2020-01-01')))
// === 489)
console.log(countLeapYears(new Date('2048-12-08')))
// === 496)
