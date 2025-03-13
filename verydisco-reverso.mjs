import fs from "fs"


if (process.argv.length > 2) {
    const fileName = process.argv[2]

    fs.readFile(fileName, (err, data) => {
        if (err !== null) {
            console.error("couldn't read file")
        }
        reverso(data)
    })

} else {
    console.error('filename neede')
    
}

const reverso = (data) => {
    let temp = ''
    data.toString().split(' ').forEach(word => {
        temp += word.slice(Math.floor(word.length / 2)) + word.slice(0, Math.floor(word.length / 2)) + ' '
    });
    console.log(temp.trim());
}