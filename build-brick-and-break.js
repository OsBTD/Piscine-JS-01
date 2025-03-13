export const build = (num) => {
    let count = 1
    const interval = setInterval(() => {
        if (count <= num) {
            const brick = document.createElement('div')
            brick.id = `brick-${count}`
            if (count % 3 === 2) {
                brick.dataset.foundation = 'true'
            }

            document.body.appendChild(brick)
        } else {
            clearInterval(interval)
        }
        count++
    }, 100)
}

export const repair = (...ids) => {
    ids.forEach(id => {
        const brick = document.getElementById(id)
        brick.dataset.repaired = brick.getAttribute("foundation") ? "in progress" : "true"
    })
}

export const destroy = () => {
    const divs = document.getElementsByTagName('div')
    const bricks = Array.from(divs).filter(elem => elem.id.startsWith('brick-'))
    if (bricks.length > 0) {
        const lastBrick = bricks[bricks.length - 1]
        lastBrick.remove()
    }
}