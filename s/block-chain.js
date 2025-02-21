// const hashCode = str =>
//     (
//         [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
//     ).toString(36)

function blockChain(data, prev = { index: 0, hash: "0" }) {

    const result = {
        index: prev.index + 1,
        hash: hashCode((prev.index + 1).toString() + prev.hash + JSON.stringify(data)),
        data: data,
        prev: prev,
        chain: function (newdata) {
            return blockChain(newdata, this)
        },
    }
    return result

}


// const data = {
//     index: 1,
//     data: { a: 1 },
//     prev: { index: 0, hash: '0' },
//     hash: '1103f27',
// }
// const data2 = {
//     index: 3,
//     data: { b: 2},
//     prev: { index: 1, hash: '1' },
//     hash: '1103f26',
// }

// console.log(blockChain(data, data2))