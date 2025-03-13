import fs from 'fs'
let arr = []

if (process.argv.length >= 3) {
    const dir = process.argv[2]
    let processedFiles = 0
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(err)
        } else {
            const totalFiles = files.length
            if (totalFiles === 0) {
                fs.writeFile('vip.txt', '', (err) => {
                    if (err) {
                        console.error('Error writing to vip.txt:', err);
                    } else {
                        console.log('Results written to vip.txt');
                    }
                })
            }
            files.forEach(file => {
                const filepath = `${dir}/${file}`
                fs.readFile(filepath, 'utf8', (err, data) => {
                    if (err) {
                        console.error(err)
                    } else {
                        try {
                            const parsed = JSON.parse(data)
                            if (parsed['answer'] == 'yes') {
                                // console.log('yes', file)
                                // console.log(parsed['answer'])

                                const split = file.split('_')
                                arr.push([split[1].slice(0, -5), split[0]])
                            }
                            // else {
                            //     console.log('no', file)
                            // }
                        } catch (parseErr) {
                            console.log(parseErr)
                        }

                        // console.log(data)
                    }
                    processedFiles++;
                    if (processedFiles === totalFiles) {
                        arr.sort((a, b) => {
                            if (a[0] === b[0]) {
                                return a[1].localeCompare(b[1]);
                            }
                            return a[0].localeCompare(b[0]);
                        });

                        arr.forEach((item, index) => {
                            arr[index] = (`${index + 1}. ${item[0]} ${item[1]}`);
                        });
                        fs.writeFile('vip.txt', arr.join('\n'), err => {
                            if (err) {
                                console.error('Error writing to vip.txt:', err);
                            } else {
                                console.log('Results written to vip.txt');
                            }
                        });
                    }

                })

            });
            // console.log(files.length)

        }

    })

} else {
    console.error('need to provide filename')
}
