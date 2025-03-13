function citiesOnly(arr) {
    return arr.map(x => x.city)
}
console.log(citiesOnly([
    {
        city: 'Los Angeles',
        temperature: '  101 °F   ',
    },
    {
        city: 'San Francisco',
        temperature: ' 84 ° F   ',
    },
]) // -> ['Los Angeles', 'San Francisco']
)

function upperCasingStates(arr) {
    return arr.map(state => {
        return state.split(' ').map(x => {
            return x.charAt(0).toUpperCase() + x.slice(1)
        }).join(' ')
    })
}
function fahrenheitToCelsius(arr) {
    return arr.map(temp => Math.floor((Number(temp.slice(0, temp.length - 2) - 32) * 5) / 9) + '°C')
} const g = [
    '30°C',
    '37°C',
    '5°C',
    '12°C',
    '-13°C',
    '21°C',
    '-19°C'
]
function trimTemp(arr) {
    return arr.map(obj => {
        obj['temperature'] = obj.temperature.replaceAll(" ", "")
        return obj
    })
}
function tempForecasts(arr) {
    return arr.map(obj => {
        const temp = trimTemp([obj])[0]
        return fahrenheitToCelsius([trimTemp([obj])[0].temperature]) + `elsius in ${obj.city}, ${upperCasingStates([obj.state])[0]}`
    })

}