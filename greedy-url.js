function getURL(dataSet) {
    const regex = /https?:\/\/\S+/g
    return dataSet.match(regex)
}
function greedyQuery(dataSet) {
    const urls = getURL(dataSet)
    const regex = /\?(\S+=\S+&){2,}\S+=\S+/
    return urls.filter(url => regex.test(url))
}
function notSoGreedy(dataSet) {
    const urls = getURL(dataSet)
    const regex = /\?(?:[^\s&=]+=[^\s&]+&){1,2}[^\s&=]+=[^\s&]+$/
    return urls.filter(url => regex.test(url))
}