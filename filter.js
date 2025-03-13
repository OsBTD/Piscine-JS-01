function filter(arr, func) {
    let acc = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) acc.push(arr[i])
    }
    return acc
}
function reject(arr, func) {
    let acc = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) acc.push(arr[i])

    } return acc

}
function partition(arr, func) {
    return [filter(arr, func), reject(arr, func)]
}