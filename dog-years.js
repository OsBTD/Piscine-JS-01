function dogYears(name, age) {
    switch (name) {
        case 'earth':
            age = age / 31557600 * 7
            return Number(age.toFixed(2))
        case 'mercury':
            age = age / (31557600 * 0.2408467) * 7
            return Number(age.toFixed(2))

        case 'venus':
            age = age / (31557600 * 0.61519726) * 7
            return Number(age.toFixed(2))

        case 'mars':
            age = age / (31557600 * 1.8808158) * 7
            return Number(age.toFixed(2))

        case 'jupiter':
            age = age / (31557600 * 11.862615) * 7
            return Number(age.toFixed(2))

        case 'saturn':
            age = age / (31557600 * 29.447498) * 7
            return Number(age.toFixed(2))

        case 'uranus':
            age = age / (31557600 * 84.016846) * 7
            return Number(age.toFixed(2))


        case 'neptune':
            age = age / (31557600 * 164.79132) * 7
            return Number(age.toFixed(2))
    }
}

console.log(dogYears("earth", 1000000000))
console.log(dogYears("mercury", 2134835688))