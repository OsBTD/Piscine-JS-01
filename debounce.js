const debounce = (func, delay) => {
    let timeoutID

    return function (...args) {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => func(...args), delay)
    }
}

const opDebounce = (func, delay, option = { leading: false }) => {
    let timeoutID
    return function (...args) {
        if (option['leading']) {
            func(...args)
            option['leading'] = false
        }
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => func(...args), delay)
    }
}