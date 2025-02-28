function letterSpaceNumber(s) {
    let regex = new RegExp("[a-z]\\s\\d(?!\\w)","gi")
    return s.match(regex) || []
}
console.log(letterSpaceNumber('example 1, example 20'))
// output: ['e 1']
