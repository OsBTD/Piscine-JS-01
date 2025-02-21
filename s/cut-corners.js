function round(x) {
    if (x > 0) {
        x = x + 0.5
    } else if (x < 0) {
        x = x - 0.5
    }

    return removecomma(x)
}

// console.log(round(20.05), round(20.98))
function ceil(x) {
    if (x < 0 || Number.isInteger(x)) {
        return removecomma(x)
    }
    if (x > 0) {
        x = x + 1
    }
    return removecomma(x)
}
// console.log(ceil(0.95), ceil(7.004), ceil(4))

function floor(x) {
    if (x > 0 || Number.isInteger(x)) {
        return removecomma(x)
    }
    if (x < 0) {
        x = x - 1
    }
    return removecomma(x)
}
// console.log(floor(5.95), floor(-5.05), floor(-5))

function trunc(x) {
    return removecomma(x)
}
// console.log(trunc(-0.2))
function removecomma(x) {
    let y = x
    let float = 0
    if(x <0){
        x = -x
    }
    while(x>=1){
        let y =1
        while(y <= x){
            y*=10
        }
        x -= y /10
    }
   float = x
   return y = y-float
}


console.log(removecomma(3.263213215))