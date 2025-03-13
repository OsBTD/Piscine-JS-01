function throttle(func, delay) {
    let ran = false
    return function (...args) {
        if (ran) {
            return
        } else {
            ran = true
            func(...args)
            setTimeout(() => ran = false, delay)
        }
    }
}
const opThrottle = (func, delay, options = { leading: false, trailing: false }) => {
    let ran = false
    return function (...args) {
        if (ran) {
            return
        }
        if (options['leading']) {
            func(...args)
        }

        ran = true
        setTimeout(() => {
            if (options['trailing']) {
                func(...args)
            } else {
                ran = false
            }
        }, delay)

    }
}

// const throt = throttle(1000, (str) => console.log(str))
// throt('my str')