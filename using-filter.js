
function filterShortStateName(arr) {
    return arr.filter(word => word.length < 7)
}
// const words = 'fff';
// console.log(filterShortStateName(words));

function filterStartVowel(arr) {
    const regex = /^[aeiou]/i
    return arr.filter(word => regex.test(word))
}

function filter5Vowels(arr) {
    const regex = /[aeiou]/gi
    return arr.filter(word => word.match(regex).length >= 5)
}
// console.log(filter5Vowels(words));

function filter1DistinctVowel(arr) {
    return arr.filter(word => {
        return new Set(word.toLowerCase().match(/[aeiou]/gi)).size === 1
    })
}
console.log(filter1DistinctVowel([
    'Alabama',
    'Alaska',
    'Arkansas',
    'Kansas',
    'Maryland',
    'Mississippi',
    'New Jersey',
    'Tennessee',
]))

// console.log(filter1DistinctVowel(words));

function multiFilter(arr) {
    return arr.filter(obj => obj['capital'].length >= 8 && !/^[aeiou]/i.test([obj['name']]) && /[aeiou]/gi.test([obj['tag']]) && obj['region'] !== 'South')
}