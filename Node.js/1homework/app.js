const x = require('./dir/file');

// x.createUser('Yura', 22)
// console.log(__dirname)
// console.log(__filename)
//
// const filePath = __dirname + '/dir/text.txt'
//
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
//
// fs.readdir(`${__dirname}/dir`, (err, files) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     files.forEach(filename => {
//         console.log(filename)
//         fs.stat(`${__dirname}/dir/${filename}`, (statErr, stats) => {
//             console.log(stats.isDirectory())
//         })
//     })
// })
//
// fs.unlink(filePath, err => {
//     if (err) console.log(err)
// })
//
// fs.rename(`${__dirname}/netflix`, `${__dirname}/dir/netflix`, err => {
//     if (err) console.log(err)
// })

const fs = require('fs');

const boysFolder = __dirname + '/2000';
const girlsFolder = __dirname + '/1800';

fs.readdir(boysFolder, (err, files) => {
    if (err){
        console.log(err);
        return;
    }
    files.forEach(fileName => {
        fs.readFile(`${boysFolder}/${fileName}`, ((err1, data) => {
            if (err1) console.log(err1);
            const user = JSON.parse(data.toString());
            if(user.gender === 'female'){
                fs.rename(`${boysFolder}/${fileName}`, `${girlsFolder}/${fileName}`, err2 => {
                    if (err2) console.log(err2)
                })
            }
        }))
    })
})

fs.readdir(girlsFolder, (err, files) => {
    if (err){
        console.log(err);
        return;
    }
    files.forEach(fileName => {
        fs.readFile(`${girlsFolder}/${fileName}`, ((err1, data) => {
            if (err1) console.log(err1);
            const user = JSON.parse(data.toString());
            if(user.gender === 'male'){
                fs.rename(`${girlsFolder}/${fileName}`, `${boysFolder}/${fileName}`, err2 => {
                    if (err2) console.log(err2)
                })
            }
        }))
    })
})

