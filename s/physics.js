function getAcceleration(x) {
    if (x['Δv'] !== undefined && x['Δt'] !== undefined) {
        return x['Δv'] / x['Δt']

    } else if (x['f'] !== undefined && x['m'] !== undefined) {
        return x['f'] / x['m']
    } else if (x['d'] !== undefined && x['t'] !== undefined) {
        return (x['d'] * 2) / (x['t'] * x['t'])
    } else {
        return "impossible"
    }
}


