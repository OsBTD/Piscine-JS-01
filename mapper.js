function map(arr, func) {
  let  acc = []
    for (let i = 0; i < arr.length; i++) {
        acc.push(func(arr[i], i , arr))
    }
    return acc
}
function flat(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i])

        } else {
            result.push(...arr[i])
        }
    }
    return result
}

function flatMap(arr, func) {
    return flat(map(arr, func))
}
