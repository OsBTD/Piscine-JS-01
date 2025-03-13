import { newword } from './verydisco.mjs'
import fs from 'fs'

fs.writeFile('verydisco-forever.txt', newword.join(' '), (err) => {
    if (err) {
        console.error('error writing to file:', err)
    } else {
        console.log('result successfully written')
    }
})
