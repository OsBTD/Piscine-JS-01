
function adder(arr, num) {
    return arr.reduce((acc, value) => acc + value, num ?? 0)
}
function sumOrMul(arr, num) {
    return arr.reduce((acc, value) => value % 2 === 0 ? acc * value : acc + value, num ?? 0)
}
console.log(sumOrMul([1, 2, 3, 5, 8], 5)) // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160

function funcExec(arr, intialfunc) {
    return arr.reduce((acc, func) => func(acc), intialfunc ?? 0)
}

