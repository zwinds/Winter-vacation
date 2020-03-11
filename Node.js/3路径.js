/*
    路径操作
*/
const path = require('path');

// 获取路径的最后一部分
// console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));

// 获取路径
// console.log(__dirname);、、文件路径
// console.log(path.dirname('/abc/qqq/www/abc'));

// 获取扩展名称
// console.log(path.extname('index.html'));

// 路径的格式化处理
// path.format() obj->string
// path.parse()  string->obj

// let obj = path.parse(__filename);
// console.log(obj.base);
/*
{ root: 'E:\\', 文件的跟路径
  dir: 'E:\\node\\day02\\02-code',文件的全路径
  base: '02.js',文件的名称
  ext: '.js',扩展名
  name: '02' 文件名称
}
*/
// let objpath = {
//     root : 'd:\\',
//     dir : 'd:\\qqq\\www',
//     base : 'abc.txt',
//     ext : '.txt',
//     name : 'abc'
// };
// let strpath = path.format(objpath);
// console.log(strpath);

// 判断是否为绝对路径
// console.log(path.isAbsolute('/foo/bar'));
// console.log(path.isAbsolute('C:/foo/..'));

// 拼接路径（..表示上层路径；.表示当前路径）,在连接路径的时候会格式化路径
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '../../'));

// 规范化路径
// console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
// console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));

// 计算相对路径
// console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
// console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));

// 解析路径
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

// 两个特殊属性
console.log(path.delimiter);//表示路径分隔符（windows是\ Linux是/）
console.log(path.sep);//环境变量分隔符(windows中使用; linux中使用:)