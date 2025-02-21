function slice(elem, start, end) {
    let en = end - 1
    if (end === undefined || end > elem.length - 1) {
        en = elem.length - 1
        console.log(en)
    }
    if (start < 0) {
        start = -start
        start = elem.length - start
    }
    if (end < 0) {
        end = -end
        en = elem.length - end - 1
    }
    console.log(en)
    let res = []
    for (let i = start; i <= en; i++) {
        res.push(elem[i])
    }
    if (typeof elem === 'string')  {
        return res.join('')
    } else {
        return res
    }
}

console.log(slice('abcdef', 0, 2), slice('abcdef', 2), slice('abcdef', 0, -2), slice([1, 2, 3, 4, 5, 6], 2))