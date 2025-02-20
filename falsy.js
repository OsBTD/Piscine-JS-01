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