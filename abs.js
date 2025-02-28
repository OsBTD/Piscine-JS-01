function isPositive(x) {
    return x > 0
}

function abs(x) {
    if (x != 0 && isPositive(x)) {
        return x
    } else if (x != 0 && !isPositive(x)) {
        return x * -1
    } else if (x === 0) {
        return 0
    }
}

const x = 156
const y = -98
const o = 0
console.log(isPositive(y))
console.log(abs(o)) 