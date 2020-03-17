/*
    get参数处理-url核心模块
*/
// const url = require('url');
// parse方法的作用就是把URL字符串转化为对象
// let str = 'http://www.baidu.com/abc/qqq?flag=123&keyword=java';
// let ret = url.parse(str,true);
// console.log(ret.query.keyword);

// format的作用就是把对象转化为标准的URL字符串
// let obj = {
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?flag=123&keyword=java',
//   query: 'flag=123&keyword=java',
//   pathname: '/abc/qqq',
//   path: '/abc/qqq?flag=123&keyword=java',
//   href: 'http://www.baidu.com/abc/qqq?flag=123&keyword=java' 
// };
// let ret1 = url.format(obj);
// console.log(ret1);