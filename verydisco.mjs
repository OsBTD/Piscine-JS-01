const arg = process.argv[2]
const split = arg.split(' ')
export const newword = []

split.forEach(word => {
    const middle = Math.floor(word.length / 2)
    const part1 = word.slice(0, middle)
    const part2 = word.slice(middle)
    newword.push(part2 + part1)
})
console.log(newword.join(' '))


