function bigger(x, y) {
    if (x >= y) {
        return true
    } else {
        return false
    }
}
function max(x, y) {
    if (bigger(x, y)) {
        return x
    } else {
        return y
    }
}
function min(x, y) {
    if (bigger(x, y)) {
        return y
    } else {
        return x
    }
}

const x = 49
const y = 49

console.log(max(x,y))
console.log(min(x,y))