/*
    获取password和name
    localhost：3000/?username=zhangfeng&password=12345
    主要是字符串拼接
*/
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
    let obj = url.parse(req.url,true);
    res.end(obj.query.username + '=========' + obj.query.password);
}).listen(3000,()=>{
    console.log('running....');
})