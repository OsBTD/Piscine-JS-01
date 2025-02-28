function findExpression(n) {
    // let expression = "1"
    let x = 1
    if (x < n / 2) {
        console.log('mul2')
        x = x * 2
    } else if (x > n + 4) {
        console.log('add4', x)
        x = x - 4
        console.log('mul2', x)
    }
    



}


console.log(findExpression(15))
// console.log(findExpression(14))
// console.log(findExpression(60))
// console.log(findExpression(100))
// console.log(findExpression(100))
// console.log(findExpression(280))
// console.log(findExpression(110))
// console.log(findExpression(144))
// console.log(findExpression(200))
// console.log(findExpression(104))
// // console.log(findExpression(7), undefined)
// // console.log(findExpression(63), undefined)
// // console.log(findExpression(23), undefined)
// // console.log(findExpression(103), undefined)

