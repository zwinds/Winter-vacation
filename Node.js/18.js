const http = require('http');
const ss = require('./17.js');
const path = require('path');

http.createServer((req,res)=>{
    // ss.staticServer(req,res,path.join(__dirname,'www'));
    ss.staticServer(req,res,path.join('Cd:\\Users\\zwind\\Desktop\\','test'));//mac读取失败！
}).listen(3000,()=>{
    console.log('running....');
})