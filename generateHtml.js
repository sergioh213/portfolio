const fs = require("fs")

function generateHtml(path, fn){
    // setTimeout(function () {
        fs.readdir(path, (err, files)=>{
            if (err) {
                console.log("THIS IS THE ERROR: ", err);
                fn(err)
                return
            }
            const htmlStart = (`
            <!doctype html>
            <html>
            <title>Colors</title>
            <body>
            `)

            var htmlBody = ""

            const htmlEnd = (`
            </body>
            </html>
            `)
            for (var i = 0; i < files.length; i++) {
                htmlBody += ("<h1><a href='/" + files[i] + "/'>" + files[i] + "</a></h1> \n")
                // console.log("Just logging each file in the LOOP: ", files[i]);
            }
            var html = htmlStart + htmlBody + htmlEnd
            // console.log("This is what the RESULT is: ", html);
            fn(null, html)
        })
    // }, 1000);
}

module.exports = generateHtml
// module.exports.generateHtml = generateHtml
//
// const getDirInfo = dir => {
//     const dirInfo = {};
//     const items = fs.readdirSync(dir);
//     items.forEach(function(item) {
//         const itemPath = `${dir}/${item}`;
//         const stats = fs.statSync(itemPath);
//         if (stats.isDirectory()) {
//             dirInfo[item] = getDirInfo(itemPath);
//         } else {
//             dirInfo[item] = stats.size;
//         }
//     });
//     return dirInfo;
// };
//
// let dirInfo = getDirInfo(`${__dirname}/files`);
//
// dirInfo = JSON.stringify(dirInfo, null, 4);
//
// fs.writeFile('files.json', dirInfo, () => console.log('done'));

//////////////////////////////////////////////

// var fs = require('fs');
//
// read(__dirname + '/files');
//
// function read(path) {
//     fs.readdir(path, function(e, files) {
//         if (e) {
//             console.log(e);
//             return process.exit();
//         }
//         console.log(`${path} contains ${files.join(', ')}`);
//         files.forEach(function(file) {
//             fs.stat(path + '/' + file, function(e, data) {
//                 if (e) {
//                     console.log(e);
//                     process.exit();
//                 }
//                 data.isDirectory() && read(path + '/' + file);
//             });
//         });
//     });
// }
