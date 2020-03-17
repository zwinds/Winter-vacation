/*
    post参数处理
    //使用了postman工具
*/
const querystring = require('querystring');
const http = require('http');

// parse方法的作用就是把字符串转成对象
// let param = 'username=lisi&password=123';
// let param = 'foo=bar&abc=xyz&abc=123';
// let obj = querystring.parse(param);
// console.log(obj);
// // stringify的作用就是把对象转成字符串
// let obj1 = {
//     flag : '123',
//     abc : ['hello','hi']
// }
// let str1 = querystring.stringify(obj1);
// console.log(str1);

http.createServer((req,res)=>{
    if(req.url.startsWith('/login')){
        let pdata = '';
        req.on('data',(chunk)=>{
            // 每次获取一部分数据
            pdata += chunk;
        });

        req.on('end',()=>{
            // 这里才能得到完整的数据
            console.log(pdata);
            let obj = querystring.parse(pdata);
            res.end(obj.username+'-----'+obj.password);
        });
    }
}).listen(3000,()=>{
    console.log('running...');
})