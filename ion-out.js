function ionOut(s) {
    let regex = new RegExp("t(?=ion)", "i")

    let pattern = 'ion'
    let result = []
    let arr = s.split(" ")

    for (const word of arr) {
        if (regex.test(word)) {
            let notion = word.replace(new RegExp(`${pattern}[,.!?]*`, 'i'), '')
            result.push(notion)
        } 

    }
    return result
}

console.log(ionOut("attention, direction,"))