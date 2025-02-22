function round(x) {
    if (x > 0) {
        x = x + 0.5
    } else if (x < 0) {
        x = x - 0.5
    }

    return removecomma(x)
}

console.log(round(20.05), round(20.98))
function ceil(x) {
    if (x < 0 || Number.isInteger(x)) {
        return trunc(x)
    }
    if (x > 0) {
        x = x + 1
    }
    return removecomma(x)
}
console.log(ceil(0.95), ceil(7.004), ceil(4))

function floor(x) {
    if (x > 0 || Number.isInteger(x)) {
        return trunc(x)
    }
    if (x < 0) {
        x = x - 1
    }
    return removecomma(x)
}
console.log(floor(5.95), floor(-5.05), floor(-5))

function trunc(x) {
    return removecomma(x)
}

function removecomma(num) {
    let sign = Math.sign(num)
    num = Math.abs(num);
    let res = 0;
    let a = 10000000000000;
    while (num >= 1) {
        if (num >= a) {
            res += a;
            num -= a;
        } else {
            a /= 10;
        }
    }
    return res * sign;
}
// console.log(removecomma(-0))