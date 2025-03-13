function flow(arr) {
    return function (...values) {
        let acc = arr[0](...values)
        for (const func of arr.slice(1)) {
            acc = func(acc)
        }
        return acc
    }

}