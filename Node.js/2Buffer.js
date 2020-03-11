/*
    Buffer的基本操作
    Buffer本质上就是字节数组
    1、构造方法（类）
    2、静态方法
    3、实例方法
*/

// 实例化buf对象
// let buf = new Buffer(5);
// let buf = Buffer.alloc(5);
// console.log(buf);

// let buf = Buffer.from('hello','utf8');
// console.log(buf);

// let buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
// console.log(buf.toString());

// -------------------------------------------
// 静态方法
// console.log(Buffer.isEncoding('utf8'));
// console.log(Buffer.isEncoding('gbk'));

// let buf = Buffer.from('hello');
// console.log(Buffer.isBuffer(buf));
// console.log(Buffer.isBuffer({}));

// let buf = Buffer.from('中国','ascii');
// console.log(Buffer.byteLength(buf));
// console.log(buf.toString());

// let buf1 = Buffer.alloc(3);
// let buf2 = Buffer.alloc(5);
// let buf3 = Buffer.concat([buf1,buf2]);
// console.log(Buffer.byteLength(buf3));

// let buf1 = Buffer.from('tom');
// let buf2 = Buffer.from('jerry');
// let buf3 = Buffer.concat([buf1,buf2]);
// console.log(Buffer.byteLength(buf3));
// console.log(buf3.toString());

// ---------------------------------------
// 实例方法
// let buf = Buffer.alloc(5);
// buf.write('hello',2,2);
// console.log(buf);

// let buf = Buffer.from('hello');
// let buf1 = buf.slice(2,3);
// console.log(buf === buf1);//false
// console.log(buf1.toString());

// toJSON方法不需要显式调用，当JSON.stringify方法调用的时候会自动调用toJSON方法
// const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const buf = Buffer.from('hello');
const json = JSON.stringify(buf);
console.log(json);