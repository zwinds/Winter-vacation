/*
    大文件操作（流式操作）
    fs.createReadStream(path[, options])
    fs.createWriteStream(path[, options])
*/

const path = require('path');
const fs = require('fs');

let spath = path.join(__dirname,'../03-source','file.zip');
let dpath = path.join('C:\\Users\\www\\Desktop','file.zip');

// let readStream = fs.createReadStream(spath);
// let writeStream = fs.createWriteStream(dpath);

// 基于事件的处理方式
// $('input[type=button]').on('click',function(){
//     console.log('hello');
// });
// let num = 1;
// readStream.on('data',(chunk)=>{
//     num++;
//     writeStream.write(chunk);
// });

// readStream.on('end',()=>{
//     console.log('文件处理完成'+num);
// });
// -----------------------------------

// pipe的作用直接把输入流和输出流
// readStream.pipe(writeStream);

// ----------------------------------
fs.createReadStream(spath).pipe(fs.createWriteStream(dpath));