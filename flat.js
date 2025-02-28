
function flat(arr, depth = 1) {
    let result = []

    // if (depth === undefined) {
    //     depth = 0
    // }
    // if (depth >= arr.length) {
    //     depth = arr.length -1
    // }
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i])
            console.log("not array", result)

        } else {
            console.log("is array", result, arr[i], depth, i)

            if (depth > 0) {
                console.log("within depth", result, depth, i, arr[i])
                result.push(...flat(arr[i], depth - 1))
                console.log("within depth after", result, depth, i, arr[i])


            } else {
                result.push(arr[i])
                console.log("outside depth", result)

            }

        }

    }
    return result
}
const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(flat([1], [1]));

