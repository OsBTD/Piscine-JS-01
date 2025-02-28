function nasa(n) {
    let str = ""
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            str += "NASA "
        } else if (i % 5 === 0) {
            str += "SA "

        } else if (i % 3 === 0) {
            str += "NA "
        } else {
            str += i + " "

        }

    }


    return str.trim()

}


console.log(nasa(15))