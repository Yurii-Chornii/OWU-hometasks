const x = require('./dir/file');

// x.createUser('Yura', 22)

// console.log(__dirname)
// console.log(__filename)

const fs = require('fs');

const filePath = __dirname + '/dir/text.txt'

// fs.writeFile(filePath, 'Text in new file', err =>{
//     if (err) console.log(err);
// });
//
// fs.appendFile(filePath, '\n Hello ', err => {
//     if (err) console.log(err)
// })
//
// fs.mkdir(`${__dirname}/netflix/megogo/ivi`, {recursive: true}, err => {
//     if (err) console.log(err)
// })
//
//
// fs.rmdir(`${__dirname}/netflix/megogo/ivi`, {recursive: true}, err => {
//     if (err) console.log(err)
// })
//
// fs.readdir(`${__dirname}/dir`, (err, files) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     files.forEach(filename => {
//         console.log(filename)
//         fs.stat(`${__dirname}/dir/${filename}`, (statErr, stats) => {
//             console.log(stats)
//         })
//     })
// })

fs.readdir(`${__dirname}/dir`, (err, files) => {
    if (err){
        console.log(err);
        return;
    }
    files.forEach(filename => {
        console.log(filename)
        fs.stat(`${__dirname}/dir/${filename}`, (statErr, stats) => {
            console.log(stats.isDirectory())
        })
    })
})

