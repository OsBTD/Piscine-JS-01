function filterEntries(obj, func) {
    return Object.fromEntries(Object.entries(obj).filter(([k, v]) => func([k, v])))
}

function mapEntries(obj, func) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => func([k, v])))
}

function reduceEntries(obj, func, res = undefined) {
    return Object.entries(obj).reduce((acc, [k, v]) => func(acc, [k, v]), res);
}
function totalCalories(obj) {
    return reduceEntries(obj, (acc, [key, gram]) => {
        return Math.round((acc+(nutritionDB[key].calories*gram/100))*10)/10
    },0)
}

function lowCarbs(obj) {
    return filterEntries(obj , ([k , v])=> {
        return  (nutritionDB[k].carbs*v/100) <50
    })
}


function cartTotal(obj) {
    return mapEntries(obj ,([k ,v])=> {
        const nut = nutritionDB[k]
        return [k , {
            calories : (nut.calories || 0)*v /100,
            protein :Math.round(((nut.protein || 0)*v /100)*1000)/1000,
            carbs : (nut.carbs || 0)*v /100,
            sugar : (nut.sugar || 0)*v /100,
            fiber : (nut.fiber || 0)*v /100,
            fat : Math.round(((nut.fat || 0)*v /100)*1000)/1000,
        }
    ]})
}