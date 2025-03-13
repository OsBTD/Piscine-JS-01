export const generateLetters = () => {
    const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let fontsize = 0
    let fontwidth = 300
    for (let i = 1; i <= 120; i++) {
        fontsize = i + 10
        if (40 < i && i <= 80) {
            fontwidth = 400
        } else if (i > 80) {
            fontwidth = 600
        }
        const div = document.createElement('div')
        div.textContent = (Alphabet[Math.floor(Math.random() * Alphabet.length)])
        div.setAttribute('style', `font-size: ${fontsize}px;` + ` font-weight: ${fontwidth}`)
        document.body.append(div)


    }

}