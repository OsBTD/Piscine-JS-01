function slice(elem, start, end) {
    let en = end - 1
    if (end === undefined || end > elem.length - 1) {
        en = elem.length - 1
    }
    if (start < 0) {
        start = -start
        start = elem.length - start
    }
    if (end < 0) {
        end = -end
        en = elem.length - end - 1
    }
    let res = ""
    for (let i = start; i <= en; i++) {
        res += '' + elem[i]
    }
    return res

}
function cutFirst(str) {
    let res = ""
    return res = slice(str, 2)
}
function cutLast(str) {
    let res = ""
    return res = slice(str, 0, str.length - 2)
}
function cutFirstLast(str) {
    let res = ""
    return res = slice(str, 2, str.length - 2)
}
function keepFirst(str) {
    let res = ""
    return res = slice(str, 0, 2)
}
function keepLast(str) {
    let res = ""
    return res = slice(str, str.length - 2, str.length)

}
function keepFirstLast(str) {
    let res = ""
    if (str.length <= 4) {
       return  str
    }
    return res = slice(str, 0, 2) + slice(str, str.length - 2, str.length)
}

console.log(cutFirst("123456"))
console.log(cutLast("123456"))
console.log(cutFirstLast("123456"))
console.log(keepFirst("123456"))
console.log(keepLast("123456"))
console.log(keepFirstLast("af"))