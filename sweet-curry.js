function mult2(curry) {
    return function (curry2) {
        return curry * curry2
    }
}
function add3(curry) {
    return function (curry2) {
        return function (curry3) {
            return curry + curry2 + curry3
        }
    }

}
function sub4(curry) {
    return function (curry2) {
        return function (curry3) {
            return function (curry4) {
                return curry - curry2 - curry3 - curry4
            }
        }
    }

}