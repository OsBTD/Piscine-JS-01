function fusion(object1, object2) {
    let result = { ...object1 }
    for (const key in object2) {
        if (Array.isArray(result[key]) && Array.isArray(object2[key])) {
            result[key] = result[key].concat(object2[key])
        } else if (typeof result[key] == 'string' && typeof object2[key] == 'string') {
            result[key] = result[key] + " " + object2[key]
        } else if (typeof result[key] == 'number' && typeof object2[key] == 'number') {
            result[key] = result[key] + object2[key]
        } else if (typeof result[key] == 'object' && typeof object2[key] == 'object') {
            result[key] = fusion(result[key], object2[key])
        } else {
            result[key] = object2[key]
        }


    }
    return result
}

console.log("Test 1:", fusion({ nbr: 12 }, { nbr: 23 }).nbr, "Expected:", 35);
console.log("Test 2:", fusion({ nbr: 0 }, { nbr: 23 }).nbr, "Expected:", 23);
console.log("Test 3:", fusion({ nbr: 23 }, { nbr: 0 }).nbr, "Expected:", 23);
console.log("Test 4:", fusion({ a: 12, b: 2, c: 43 }, { a: 23, b: 2 }), "Expected:", { a: 35, b: 4, c: 43 });
console.log("Test 5:", fusion({ str: 'hello' }, { str: 'there' }).str, "Expected:", 'hello there');
console.log("Test 6:", fusion({ str: 'hello' }, { str: '' }).str, "Expected:", 'hello ');
console.log("Test 7:", fusion({ a: 'A', b: 'B', c: 'C' }, { a: 'B', b: 'C' }), "Expected:", { a: 'A B', b: 'B C', c: 'C' });
console.log("Test 8:", fusion({ arr: [1, '2'] }, { arr: [2] }).arr, "Expected:", [1, '2', 2]);
console.log("Test 9:", fusion({ arr: [], arr1: [1] }, { arr: [12, 3], arr1: [2, 3], arr2: ['2', '1'] }), "Expected:", { arr: [12, 3], arr1: [1, 2, 3], arr2: ['2', '1'] });
console.log("Test 10:", fusion({ a: { b: 1 } }, { a: 1 }).a, "Expected:", 1);
console.log("Test 11:", fusion({ a: 1 }, { a: { b: 1 } }).a, "Expected:", { b: 1 });
console.log("Test 12:", fusion({ a: [1, 2] }, { a: 1 }).a, "Expected:", 1);
console.log("Test 13:", fusion({ a: 'str' }, { a: 1 }).a, "Expected:", 1);
console.log("Test 14:", fusion({ a: { b: [1, 2], c: { d: 2 } } }, { a: { b: [0, 2, 1], c: { d: 23 } } }), "Expected:", { a: { b: [1, 2, 0, 2, 1], c: { d: 25 } } });