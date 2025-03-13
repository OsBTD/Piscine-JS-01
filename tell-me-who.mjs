import fs from 'fs'

if (process.argv.length > 2) {
    fs.readdir(process.argv[2], (err, file) => {
        if (err) {
            console.error('can\'t read file')
        } else {
            for (let i = 0; i < file.length; i++) {
                file[i] = [file[i].slice(0, -5).split('_')[1], file[i].slice(0, -5).split('_')[0]]
            }
            const arr = file.sort()
            for (let i = 0; i < arr.length; i++) {
               console.log(i+1+'. '+ arr[i][0]+' '+arr[i][1])
           }

        }
    })
} else {
    console.error('enter file name')
}