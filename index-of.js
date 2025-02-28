
function indexOf(arr, elem, index) {
    let idx = index
    if (index === undefined) {
        idx = 0
    }
    for (let i = idx; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i
        } else if (i === arr.length - 1 && arr[i] !== elem) {
            return -1
        }
    }

}

// console.log(indexOf(['t', 0, 0, 't'], 't', 1))


function lastIndexOf(arr, elem, index) {
    let idx = index
    if (index === undefined) {
        idx = arr.length - 1
    }
    for (let i = idx; i >= 0; i--) {
        if (arr[i] === elem) {
            return i
        } else if (i === 0 && arr[i] !== elem) {
            return -1
        }
    }
}
console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))

function includes(arr, elem, index) {
    let idx = index
    if (index === undefined) {
        idx = 0
    }
    let yup = false

    let i = 0
    while (i < arr.length) {
        if (arr[i] !== elem) {
            i++
        } else {
            yup = true
            return true
        }
        if (i === arr.length && !yup && arr[i] !== elem) {
            return false
        }
    }
}

// console.log(includes([1, 2, 3, 3, 3], 3))
