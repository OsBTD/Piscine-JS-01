function reverse(arr) {
    const res = []
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }

    if (typeof arr === 'string') {
        return res.join('')
    } else {
        return res
    }
}

console.log(reverse([1,2,3,4,5], "hhh"))