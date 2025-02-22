function triangle(char, nb) {
    let str = ""
    for (let i = 0; i < nb; i++) {
        for (let j = 0; j <= i; j++) {
            str += char
        }
        str += '\n'
    }
    str = str.slice(0,-1)
    return str
}

console.log(triangle("*", 5))