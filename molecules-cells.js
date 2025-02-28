function DNA(s) {
    let str = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'C') {
            str += 'G'
        } else if (s[i] === 'G') {
            str += 'C'
        } else if (s[i] === 'A') {
            str += 'T'
        } else if (s[i] === 'U') {
            str += 'A'
        } else {
            str += s[i]
        }
    }
    return str.trim()

}


function RNA(s) {
    let str = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'G') {
            str += 'C'
        } else if (s[i] === 'C') {
            str += 'G'
        } else if (s[i] === 'T') {
            str += 'A'
        } else if (s[i] === 'A') {
            str += 'U'
        } else {
            str += s[i]
        }
    }
    return str.trim()
}


console.log(RNA('GCTA'), DNA('CGAU'))