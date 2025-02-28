function format(date, symbols) {
    const regex = /(yyyy|GGGG|MMMM|MMM|EEEE|MM|HH|hh|mm|ss|dd|y|G|M|d|E|H|h|m|s|a)/g;

    // Weekday switch
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const replacements = {
        'yyyy': String(Math.abs(date.getFullYear())).padStart(4, "0"),
        'y': String(Math.abs(date.getFullYear())),
        'GGGG': date.getFullYear() < 0 ? 'Before Christ' : 'Anno Domini',
        'G': date.getFullYear() < 0 ? 'BC' : 'AD',
        'MMMM': months[date.getMonth()],
        'MMM': months[date.getMonth()].slice(0, 3),
        'EEEE': days[date.getDay()],
        'MM': String(date.getMonth() + 1).padStart(2, "0"),
        'HH': String(date.getHours()).padStart(2, "0"),
        'hh': String(date.getHours() % 12 || 12).padStart(2, "0"),
        'mm': String(date.getMinutes()).padStart(2, "0"),
        'ss': String(date.getSeconds()).padStart(2, "0"),
        'dd': String(date.getDate()).padStart(2, "0"),
        'y': String(Math.abs(date.getFullYear())),
        'G': date.getFullYear() < 0 ? 'BC' : 'AD',
        'M': String(date.getMonth() + 1),
        'd': String(date.getDate()),
        'E': days[date.getDay()].slice(0, 3),
        'H': String(date.getHours()),
        'h': String(date.getHours() % 12 || 12),
        'm': String(date.getMinutes()),
        's': String(date.getSeconds()),
        'a': date.getHours() < 12 ? 'AM' : 'PM'
    };
    return symbols.replace(regex, match => replacements[match]);
}
// const d = new Date('7 January 1985, 3:08:19')

// format(d, 'HH(mm)ss [dd] <MMM>') // -> '03(08)19 [07] <Jan>'
// const landing = new Date('July 20, 1969, 20:17:40')
// const returning = new Date('July 21, 1969, 17:54:12')
// const eclipse = new Date(-585, 4, 28)
// const ending = new Date('2 September 1945, 9:02:14')
// console.log("landing" + format(landing) + "\n" + "returning" + format(returning) + "\n" + "eclipse" + format(eclipse) + "\n" + "ending" + format(ending) + "\n")
// console.log(format(eclipse, 'y'))
//, '585'))
// console.log(format(landing, 'y'))
//, '1969'))
// console.log(format(eclipse, 'yyyy'))
//, '0585'))
// console.log(format(landing, 'yyyy'))
//, '1969'))
// console.log(format(eclipse, 'yyyy G'))
//, '0585 BC'))
// console.log(format(landing, 'yyyy G'))
//, '1969 AD'))
// console.log(format(eclipse, 'yyyy GGGG'))
//, '0585 Before Christ'))
// console.log(format(landing, 'yyyy GGGG'))
//, '1969 Anno Domini'))


//unicode date field symbols YYYY 

// y = year = 2017 2 1 201 
// yyyy 2017 0002 0001 0201

// G = era = AD and BC
// GGGG Anno Domini and Before christ 

// M = month = 9 12
// MM 09 12
// MMM Sep
// MMMM September

// d = monthday = 1
// dd 01

// E = weekday = Tue
// EEEE Tuesday 

// h = hour = 1 12
// hh 01 12 
// H = hours 24 = 1 23
// HH = 01 23

// m = minute 9 59
// mm 09 59

// s = seconds 8 12
// ss 01 12 


// a = am/pm 
