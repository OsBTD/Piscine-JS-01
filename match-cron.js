function matchCron(cron, date) {

    let minutes = date.getMinutes()
    let hours = date.getHours()
    let dayofmonth = date.getDate()
    let months = date.getMonth() + 1
    let dayofweek = date.getDay()
    let crones = cron.split(" ")
    return (crones[0] == minutes || crones[0] == '*')
        && (crones[1] == hours || crones[1] == '*')
        && (crones[2] == dayofmonth || crones[2] == '*')
        && (crones[3] == months || crones[3] == '*')
        && (crones[4] == dayofweek || crones[4] == '*')
}

// cron = '* * * * *'
// '5 = exact value'
// '1-5 = range'
// '1,5,3 = list'
// '1-6/2 = step means every 2 hours from 1-6 so 1 to 3 to 5'
// '* = all'

console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))) // -> true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')))// -> true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))) // -> false
//                     | | | | |
//                     | | | | +- Day of the Week   (range: 1-7, 1 is Monday)
//                     | | | +--- Month of the Year (range: 1-12)
//                     | | +----- Day of the Month  (range: 1-31)
//                     | +------- Hour              (range: 0-23)
//                     +--------- Minute            (range: 0-59)
