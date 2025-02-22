function checklastelements(s, elem) {
    if (s.slice((s.length - elem.length )-1) === elem) {
        console.log('1')
        return true
       
    } else {
        console.log('3')
        return false
    }
}
function split(str, dividor) {
    let temp = ""
    // let res = []
    for (let i = 0; i < str.length; i++) {
        if (!checklastelements(temp, dividor.length)) {
            temp += str[i]
            console.log(temp)
        } else {
            temp = temp.slice(temp.length - dividor.length)
            console.log('2', temp)
        }
    }

    return temp
}
console.log('split', split('ggg - ddd - b', " - "))


// let res = []
// let temp = ""
// let indexs = []
// let mapp = new Map();
// for (let i = 0; i < str.length; i++) {
//     mapp.set(i, false)
//     if (str[i] === dividor[0]) {
//         mapp.set(i, true)
//         for (let j = 1; j < dividor.length; j++) {
//             if (str[i + j] === dividor[j]) {
//                 mapp.set(i+j, true)
//                 continue
//             } 
//         }
//     } 
// }
// return mapp

// for (let i = 0; i < str.length; i++) {
//     if (str[i] !== dividor) {
//         temp += str[i]
//     } else {
//         res.push(temp)
//         temp = ""
//     }

// }
// res.push(temp)
// return res
// return indexs
// }

function join(arr, joiner) {
    let res = ""
    for (let i = 0; i < arr.length; i++) {
        res += arr[i] + joiner
    }
    return res
}

// console.log('join', join([1,2,3,4,5], " "))

// function includes(arr, elem, index) {
//     let idx = index
//     if (index === undefined) {
//         idx = 0
//     }
//     let yup = false

//     let i = 0
//     while (i < arr.length) {
//         if (arr[i] !== elem) {
//             i++
//         } else {
//             yup = true
//             return true
//         }
//         if (i === arr.length && !yup && arr[i] !== elem) {
//             return false
//         }
//     }
// }





// function join(arr) {
//     let res = ""

// }
// let s = "jjjjjjkkkhhhh"
// console.log("jjjjjjkkkhhhh".includes("kkk"));
