function pick(obj, keys) {
    let result = {}
    if (typeof keys == 'string') {
        if (obj.hasOwnProperty(keys)) {
            result[keys] = obj[keys]
        }

    } else if (Array.isArray(keys)) {
        for (const key of keys) {
            if (obj.hasOwnProperty(key)) {
                result[key] = obj[key]
            }
        }

    }
    return result
}
function omit(obj, keys) {
    let result = {}
    if (typeof keys == 'string') {
        for (const key in obj) {
            if (key != keys) {
                if (obj.hasOwnProperty(key)) {
                    result[key] = obj[key]
                }
            }
        }

    } else if (Array.isArray(keys)) {
        for (const key in obj) {
            if (!keys.includes(key)) {
                result[key] = obj[key]
            }
        }


    }
    return result
}


// console.log("Test 1:", pick({ firstName: 'James', lastName: 'Bond', age: 25, email: 'jamesbond@hotmail.com' }, ['firstName', 'lastName']), "Expected:", { firstName: 'James', lastName: 'Bond' });
// console.log("Test 2:", pick({ brand: 'ford', motor: 'v8', year: 2000 }, ['brand', 'year']), "Expected:", { brand: 'ford', year: 2000 });
// console.log("Test 3:", pick({ firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false }, 'ageVerified'), "Expected:", { ageVerified: false });
// console.log("Test 4:", pick({ brand: 'lenovo', ram: '32GB', processor: 'i7 8th Gen' }, 'graphic'), "Expected:", {});
// console.log("Test 5:", omit({ drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' }, ['grinders', 'saws']), "Expected:", { drill: 'bosh' });
// console.log("Test 6:", omit({ board: 'monopoly', cards: 'poker', dice: 'roulette' }, ['board', 'cards']), "Expected:", { dice: 'roulette' });
// console.log("Test 7:", omit({ England: 'english', Spain: 'spanish', Portugal: 'portuguese' }, 'Spain'), "Expected:", { England: 'english', Portugal: 'portuguese' });
// console.log("Test 8:", omit({ samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia' }, 'iphone'), "Expected:", { samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia' });
// console.log("Test 9:", pick({ something: 5, __proto__: { d: 6 } }, ['proto', 'something']), "Expected:", { something: 5 });
// console.log("Test 10:", omit({ something: 5, __proto__: { d: 6 } }, 'something'), "Expected:", {});