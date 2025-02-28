function dayOfTheYear(date) {
    let year = date.getFullYear()
    if (year < 1) year = 1;
    year = new Date(year.toString().padStart(4, "0") + "-01-01");
    const numberofdays = (date - year) / (1000 * 60 * 60 * 24)
    return numberofdays + 1

}
console.log(dayOfTheYear(new Date('0001-01-01')))
// === 1)
console.log(dayOfTheYear(new Date('1664-08-09')))
// === 222)
console.log(dayOfTheYear(new Date('1600-12-31')))
// === 366)
console.log(dayOfTheYear(new Date('2020-06-22')))
// === 174)
console.log(dayOfTheYear(new Date('2048-12-08')))
// === 343)
console.log(dayOfTheYear(new Date('2048-11-08')))
// === 313)
