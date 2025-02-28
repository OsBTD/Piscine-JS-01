function chunk(arrr, int) {
    let chunk = []
    let arr = []
    var counter = 0

    for (let i = 0; i < arrr.length; i++) {
        chunk.push(arrr[i])
        counter++
     
        if (counter === int) {
            arr.push(chunk)
  
            counter = 0
            chunk = []
        }

    }
    if (chunk.length !== 0) {
        arr.push(chunk)
    }
    return arr

}

console.log(chunk([4, 1, 1, 12, 21], 3))