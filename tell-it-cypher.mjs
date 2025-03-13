import fs from 'fs'

const args = process.argv.slice(2)

if (args.length < 2) {
    console.error('args needed')
    process.exit(1)
}

const [file, operation, newfile] = args

const output = newfile || (operation === 'encode' ? 'cypher.txt' : 'clear.txt')


fs.readFile(file, (err, data) => {
    if (err) {
        console.error("cant read file", err)
        process.exit(1)
    }
    // console.log(`file ${file}, len ${data.length}`)
    // console.log(data)

    let result;
    if (operation === 'encode') {
        result = Buffer.from(data).toString('base64')
        // console.log(`to base64, result, data.length`)
    } else {
        try {
            result = Buffer.from(data.toString(), 'base64')
            // console.log(`from base64, result, data.length`)
        } catch (e) {
            console.error('bad base64 stuff')
            process.exit(1)
        }
    }

    // console.log(`result`)

    fs.writeFile(output, result, (err) => {
        if (err) {
            console.error(`cant write file: ${err.message}`)
            process.exit(1);
        }
        // console.log(`saved to ${output}, ${result.length}`)
        console.log(`File saved as ${output}`)
    })
})