function invert(obj) {
    let result = {}
    for (const [key, value] of Object.entries(obj)) {
        result[value] = key
    }
    return result
}