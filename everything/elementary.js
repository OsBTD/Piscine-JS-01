function multiply(x, y) {
    let res = 0
    let isnegative = false

    if (x < 0 && y < 0) {
        y = -y
        x = -x
    } else if (x < 0) {
        x = -x
        isnegative = true
    } else if (y < 0) {
        y = -y
        isnegative = true
    }

    for (let i = 1; i <= y; i++) {
        res = res + x
    }
    if (isnegative) {
        res = -res
        return res


    } else {
        return res

    }
}
console.log("multiplication", multiply(123, 22))

function divide(x, y) {
    let isnegative = false
    if (x < 0 && y < 0) {
        y = -y
        x = -x
    } else if (x < 0) {
        x = -x
        isnegative = true
    } else if (y < 0) {
        y = -y
        isnegative = true
    }

    let res = x
    var count = 0
    for (let i = y; i >= 1; i--) {
        while (res >= y) {
            res = res - y
            count++

        }
    }
    if (isnegative) {
        count = -count
        return count
    } else {
        return count

    }

}
console.log("division", divide(3, 22))

function modulo(x, y) {
    let res = x

    res = divide(x, y)

    if (multiply(res, y) === x) {
        return 0
    } else {
        return x - multiply(res, y)
    }
}
console.log("modulo", modulo(9, 2))
