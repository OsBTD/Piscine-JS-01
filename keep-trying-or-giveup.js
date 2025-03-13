function retry(count, callback) {
    return async function (...args) {
        let x = 0
        while (x <= count) {
            try {
                return await callback(...args)
            } catch (error) {
                if (x == count) {
                    throw error
                }
            }
            x++
        }
    }
}

function timeout(delay, callback) {
    return async function (...args) {
        return Promise.race([
            callback(...args),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), delay))
        ])
    }

}
// return Promise.race([
//     callback(...args),
//     new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), delay))
// ])
