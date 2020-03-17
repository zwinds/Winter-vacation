/*
    初步实现服务器功能
*/
const http = require('http');
// // 创建服务器实例对象
// let server = http.createServer();
// // 绑定请求事件
// server.on('request',(req,res)=>{
//     res.end('hello');
// });
// // 监听端口
// server.listen(3000);
// -----------------------------

http.createServer((req,res)=>{
    res.end('ok');
}).listen(3000,'localhost',()=>{
    // localhost可以指定为当前IP地址，更换之后：192.168.0.106:3000
    console.log('running...');
});