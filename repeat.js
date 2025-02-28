function repeat(s, x) {

    let result = ""
    for (let i = 0; i < x; i++) {
        result += "" + s
    }
    return result
}


const s = "ll"
const x = 3
console.log(repeat(s, x))