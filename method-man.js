function words(s) {
    return s.split(' ')
}
function sentence(s) {
    return s.join(' ')
}
function yell(s) {
    return s.toUpperCase()
}
function whisper(s) {
    return '*'+s.toLowerCase()+'*'
}

function capitalize(s) {
    return s[0].toUpperCase()+s.slice(1).toLowerCase()
}
const s = "h hh"
console.log(words(s))
const c = ["hhh", "hh", "hh"]
console.log(sentence(c))
const d = "hhh"
console.log(yell(d))
const e = "HHHHH"
console.log(whisper(e))
const g = "HHHHH"
console.log(capitalize(g))
