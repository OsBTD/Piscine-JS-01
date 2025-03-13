function filterKeys(obj, func) {
    let filterred = {}
    for (const key in obj) {
        if (func(key)) {
            filterred[key] = obj[key]
        }
    }
    return filterred
}
function mapKeys(obj, func) {
    let res = {}
    for (const key in obj) {
        res[func(key)] = obj[key]
    }
    return res
}
function reduceKeys(obj, func, init = "") {
    let acc = init
    let first = true
    console.log(acc)

    for (const key in obj) {
        if (acc === undefined) {
            acc = key
        } else {
            acc = func(acc, key)

        }


        console.log(acc)

    }
    // console.log(Object.entries(obj)[0][0])
    // console.log(Object.entries(obj))
    return acc

}
// const nutritionDB = {
//     tomato: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 },
//     vinegar: { calories: 20, protein: 0.04, carbs: 0.6, sugar: 0.4, fiber: 0, fat: 0 },
//     oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
//     onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
//     garlic: { calories: 149, protein: 6.4, carbs: 33, sugar: 1, fiber: 2.1, fat: 0.5 },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1, fiber: 0, fat: 12.89 },
//     sugar: { calories: 387, protein: 0, carbs: 100, sugar: 100, fiber: 0, fat: 0 },
//     orange: { calories: 49, protein: 0.9, carbs: 13, sugar: 12, fiber: 0.2, fat: 0.1 },
// }

// console.log("Test 1:", filterKeys({ vinegar: 80, sugar: 100, oil: 50, onion: 200, garlic: 22, paprika: 4 }, (k) => k.length <= 6), "Expected:", { sugar: 100, oil: 50, onion: 200, garlic: 22 });
// console.log("Test 2:", filterKeys({ vinegar: 80, sugar: 100, oil: 50, onion: 200, garlic: 22, paprika: 4 }, (k) => /onion/.test(k)), "Expected:", { onion: 200 });
// console.log("Test 3:", mapKeys({ vinegar: 80, sugar: 100, oil: 50, onion: 200, garlic: 22, paprika: 4 }, (k) => `✔️${k}`), "Expected:", { '✔️vinegar': 80, '✔️sugar': 100, '✔️oil': 50, '✔️onion': 200, '✔️garlic': 22, '✔️paprika': 4 });
// console.log("Test 4:", mapKeys(filterKeys({ vinegar: 80, sugar: 100, oil: 50, onion: 200, garlic: 22, paprika: 4 }, (k) => k === 'onion'), (k) => (k = 'orange')), "Expected:", { orange: 200 });
// console.log("Test 5:", mapKeys(filterKeys(nutritionDB, (k) => k === 'tomato'), (k) => `${k}DB`), "Expected:", { tomatoDB: { calories: 18, protein: 0.9, carbs: 3.9, sugar: 2.6, fiber: 1.2, fat: 0.2 } });
console.log("Test 6:", reduceKeys({ vinegar: 80, sugar: 100, oil: 50, onion: 200, garlic: 22, paprika: 4 }, (acc, cr) => acc.concat(', ', cr)), "Expected:", 'vinegar, sugar, oil, onion, garlic, paprika');
// console.log("Test 7:", reduceKeys({ vinegar: 80, sugar: 100, oil: 50, onion: 200, garlic: 22, paprika: 4 }, (acc, cr) => `${acc}${cr}:`, ':'), "Expected:", ':vinegar:sugar:oil:onion:garlic:paprika:');
// console.log("Test 8:", reduceKeys(nutritionDB, (acc, cr) => (acc == null ? cr : `${acc}:${cr}`), null), "Expected:", 'tomato:vinegar:oil:onion:garlic:paprika:sugar:orange');
// console.log("Test 9:", reduceKeys({ vinegar: 80, sugar: 100, oil: 50, onion: 200, garlic: 22, paprika: 4 }, (acc, cr) => (acc == null ? cr : `${acc}:${cr}`), undefined), "Expected:", 'vinegar:sugar:oil:onion:garlic:paprika');
// console.log("Test 10:", reduceKeys({ vinegar: 80, sugar: 100, oil: 50, onion: 200, garlic: 22, paprika: 4 }, (acc, cr) => (acc += (cr.length <= 4) & 1), 0), "Expected:", 1);