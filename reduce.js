function fold(arr, func, acc) {
    let res = acc
    for (let i = 0; i < arr.length; i++) {
        res = (func(res, arr[i]))
    }
    return res
}
function foldRight(arr, func, acc) {
    let res = acc
    for (let i = arr.length - 1; i >= 0; i--) {
        res = (func(res, arr[i]))
    }
    return res
}
function reduce(arr, func) {
    if (arr.length < 1) {
        throw new Error('error')
    }
    let res = arr[0]
    for (let i = 1; i < arr.length; i++) {
        res = (func(res, arr[i]))
    }
    return res
}
function reduceRight(arr, func) {
    if (arr.length <= 1) {
        throw new Error('error')
    }
    let res = arr[arr.length - 1]
    for (let i = arr.length - 2; i >=0; i--) {
        res = (func(res, arr[i]))
    }
    return res
}