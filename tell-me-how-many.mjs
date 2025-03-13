import fs from 'fs'

if (process.argv.length >= 2) {
    fs.readdir(process.argv[2], (err, file) => {
        if (err) {
            console.error(err)
        } else {
            console.log(file.length)
        }
    })
} else {
    console.error('need to provide filename')
}