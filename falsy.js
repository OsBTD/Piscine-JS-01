let x = [NaN, 0, undefined, null, "", 125, "yes", obj={}, set = new Set(), map = new Map([])]
for (let i = 0; i < x.length; i++) {
    if (x[i]) {
        console.log(x[i], "is truthy")
    } else {
        console.log(x[i], "is falsy")

    }

}

if (x === 0) {
    console.log("1")

}

const x1 = Infinity
const y = Number.MAX_VALUE
const x2 = -Infinity
const y1 = Number.MIN_VALUE
if (x1 > y) {
    console.log("infinity")
} else {
    console.log("max")
}

if (y1 > x2) {
    console.log("-infinity")
} else {
    console.log("min")
}