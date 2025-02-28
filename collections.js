function arrToSet(arr) {
    return new Set(arr)
}
// const arr1 = [1,2,3,4,4,5]
// console.log(arrToSet(arr1))

function arrToStr(arr) {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        str += "" + arr[i]
    }
    return str
}

// const arr3 = [1, 2, 3, 4, 5, 5]
// console.log(arrToStr(arr3))

function setToArr(set) {
    return Array.from(set)
}
// let sett = new Set([1,2,3])
// console.log(setToArr(sett))

function setToStr(set) {
    return Array.from(set).join("")
}
// let sett = new Set([1, 2, 3])
// console.log(setToStr(sett))

function strToArr(str) {
    return Array(...str) 
}

function strToSet(str) {
    return new Set(str)
}


function mapToObj(map) {
    return Object.fromEntries(map)
}


function objToArr(obj) {
    let lol = Object.values(obj)
    return Array.from(lol)
}
const obj1 = {
    u: 1,
    j: 2
}
console.log(objToArr(obj1))


function objToMap(obj) {
    let Mapp = new Map()
    const keys = Object.keys(obj)
    const values = Object.values(obj)

    for (let i = 0; i < keys.length; i++) {
        Mapp.set(keys[i], values[i])
    }
    return Mapp
}

function arrToObj(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        const index = String(i)
        obj[index] = arr[i]
    }
    return obj
}


function strToObj(str) {

    let obj = {}
    for (let i = 0; i < str.length; i++) {
        const index = String(i)
        obj[index] = str[i]
    }
    return obj
}


function superTypeOf(x) {
    let ismap = x instanceof Map
    let isset = x instanceof Set
    if (typeof x === 'string') {
        return 'String'
    } else if (typeof x === 'number' || x === NaN || typeof x === 'bigint') {
        return 'Number'
    } else if (typeof x === 'boolean') {
        return 'Boolean'
    } else if (typeof x === 'object' && !Array.isArray(x) && typeof x !== 'undefined' && !ismap && !isset && x !== null) {
        return 'Object'

    } else if (typeof x === 'undefined') {
        return 'undefined'

    } else if (typeof x === 'function') {
        return 'Function'
    } else if (typeof x === 'symbol') {
        return 'Symbol'

    } else if (Array.isArray(x)) {
        return 'Array'
    } else if (isset) {
        return 'Set'

    } else if (ismap) {
        return 'Map'

    } else if (x == null) {
        return 'null'

    }
}
