/*
    中间件的挂载方式和执行流程
    use方法
    路由方式:get post put delete
*/
const express = require('express');
const app = express();

// app.get('/abc',(req,res,next)=>{
//     console.log(1);
//     // 跳转到下一个路由
//     next('route');
// },(req,res)=>{
//     console.log(2);
//     res.send('abc');
// });

// app.get('/abc',(req,res)=>{
//     console.log(3);
//     res.send('hello');
// });
// --------------------------------
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/example', [cb0, cb1, cb2]);

app.listen(3000,()=>{
    console.log('running...');
});