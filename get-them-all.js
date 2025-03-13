
export function getArchitects() {
    const arch = document.body.getElementsByTagName('a')
    const notarch = document.body.getElementsByTagName('span')
    return [Array.from(arch), Array.from(notarch)]
}
export function getClassical() {
    const arch = document.body.getElementsByTagName('a')
    const classical = Array.from(arch).filter(element => element.className.includes('classical'))
    const notclassical = Array.from(arch).filter(element => !element.className.includes('classical'))
    return [classical, notclassical]

}
export function getActive() {
    const arch = document.body.getElementsByTagName('a')
    const active = Array.from(arch).filter(element => element.className.includes('classical active'))
    const notactive = Array.from(arch).filter(element => !element.className.includes('classical active'))
    return [active, notactive]
}
export function getBonannoPisano() {
    const BonannoPisano = document.querySelector('#BonannoPisano')
    const notBonanno = document.querySelectorAll('a.classical.active:not(#BonannoPisano)')

    return [BonannoPisano, notBonanno]
}