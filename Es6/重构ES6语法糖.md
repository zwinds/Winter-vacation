# 20200527重构语法糖版本
## 模板字符串-增强型字符串
### 1.保留书写格式，语义化更好一些
普通字符串
```js
var str = 'life \n is \n shit!!!'
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6q16xkzgj302u02pglm.jpg)

增强型字符串
```js
var str = `life
is
shit！！！`
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6q3at551j302u02pglm.jpg)
### 2.在字符串中添加变量（表达式）
普通
```js
var xm = {
    age:18,
    height:180,
    name: 'xiaoming'
}
var str ='name:' + xm.name + 'age'+ xm.age + 'height'+ xm.height
consle.log(str)
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6qbeuhrlj3078017dfw.jpg)

增强型
```js
var xm = {
    age:18,
    height:180,
    name: 'xiaoming'
}
var {age,name,height}=xm
var str = `name: ${name} age:${age} height: ${height}`
consle.log(str)
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6qg4pnb5j3078017q2x.jpg)

也可以添加一些其他的变量或常量

```js
var x =3 ,y=5;

var str = `${x} + ${y} = ${x+y}`
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6qn8jbwjj308u01qgll.jpg)
```js
var x =3 ,y=5;

var str = `${3} + ${y} = ${x+y}`
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6qn8jbwjj308u01qgll.jpg)
```js
var x =3 ,y=5;

var str = `${false} + ${y} = ${x+y}`
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6qnpkrdxj308u01qq2x.jpg)
```js
function getName(){
    return 'xiaoming'
}
var str = `my name is ${getName()}`
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6qo67v5wj308u01qglk.jpg)

也可以嵌套

```js
var arr = [1,2,3,4,5]

var resStr = `${arr.map(function (item,index) {

return `${item} : ${index} `

})}`
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6quha72fj308u01kwek.jpg)

## 标签模板 - 函数调用的特殊形式
```js
var name = "xiaoming"

var where = "BJ"

function show (){
    consle.log(arguments)
}

show `hello ${name} , welocme to ${where}`

```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf6ze4vgw6j30hf04ddgc.jpg)

标签模板的作用：
+ 过滤HTML字符串-防注入-防XSS

>XSS攻击通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是JavaScript，但实际上也可以包括Java、 VBScript、ActiveX、 Flash 或者甚至是普通的HTML。攻击成功后，攻击者可能得到包括但不限于更高的权限（如执行一些操作）、私密网页内容、会话和cookie等各种内容
```js
function SaferHTML(templateData) {
    let s = templateData[0];
    for (let i = 1; i < arguments.length; i++) {
      let arg = String(arguments[i]);
 
      s += arg.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");
      s += templateData[i]         
    }
    return s
  }
 
  let sender = '<a>alert("abc")</a>';
  let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

  function SaferHTML(templateData) {
    let s = [];
    
    for (let i = 1; i < arguments.length; i++) {
      let arg = String(arguments[i]); 
      
      s[i-1] = arg.replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;");
    }
    return String.raw({ raw: templateData }, ...s);
  }
 
  let sender = '<a>alert("abc")</a>';
  let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

```

## 函数的拓展
### 函数参数的默认值 解构赋值

## 1:解构
ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructing）。
例如：let [a,b,c] = [1,2,3];
 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
 如果结构不成功，变量的值就等于undefined。
 另一种情况是不完全解构，即等号左边的模式只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。

## 2.数组的解构赋值

let [a,b,c] = [1,2,3];

1）不完全解构：

  let [a,[b],d] = [1,[2,3],4]; //a=1;b=2;d=4

2）集合解构：

  let[head,...tail] = [1,2,3,4]; //head=1;tail=[2,3,4]

3）默认值（当匹配值严格等于undefined时，默认值生效）：

  let [x,y='b'] = ['a']; //x = 'a',y = 'b'

4）默认值也可以为函数：

  function f(){ console.log('aaa'); }
  let [x=f()] = [1];

## 3.对象的解构赋值

1）对象的属性没有次序，变量必须与属性同名，才能取到正确的值

    let {foo,bar} = {foo:'aaa',bar:'bbb'}; //foo='aaa';bar='bbb'

 2）如果变量名与属性名不一致，必须写成下面这样。

     var {foo:baz} = {foo:'aaa',bar:'bbb'}; // baz='aaa'    

 3）这实际上说明，对象的解构赋值是下面形式的简写。

     let {foo:foo,bar:bar} = {foo:'aaa',bar:'bbb'};

 4）嵌套结构

     let obj = {p:['Hello',{y:'World'}]};
     let {p:[x,{y}]} = obj;  // x='Hello';y='World'  

 5）默认值（默认值生效的条件是，对象的属性值严格等于undefined）

     var {x:y=3} = {}; // y=3

4.字符串的解构赋值

 1）解构时，字符串被转换成了一个类似数组的对象。

   const [a,b,c,d,e] = 'hello'; //a=h;b=e;c=l;d=l;e=o

 2）也可以对数组的属性解构

   let {length:len} = 'hello'; // len=5 

5.数值和布尔值的解构赋值

解构时，如果等号右边是数值和布尔值，则会先转为对象。

  let {toString:s} = 123; // s===Number.prototype.toString true
  let {toString:s} = true; // s===Boolean.prototype.toString true

6.函数参数的解构赋值

 1）基本语法

   function add([x,y]){return x+y;}
   add([1,2]);

 2）默认值

   function move({x=0,y=0}){
       return [x,y];
   }  
   move({x:3,y:8}); //[3,8]
   move({x:3}); //[3,0]
   move({}); //[0,0]
   move(); //[0,0]

7.常见用途

 1）交换变量的值

    let x = 1; 
    let y = 2; 
    [x,y] = [y,x];

 2）从函数返回多个值
```js
    function example(){
       return [1,2,3];
    }
    let [a,b,c] = example();   
```
 3）函数参数的定义
   ```js 
    function f([x,y,z]){...}
    f([1,2,3]);
```
 4）提取JSON数据
 ```js
    let jsonData = {id:42,status:'OK',data:[867,5309]};
    let {id,status,data:number} = jsonData;   
```
 5）输入模块的指定方法

    const {SourceMapConsumer,SourceNode} = require("source-map");

 6）函数参数的默认值         

    jQuery.ajax = function(url,{
      async = true,cache = true,global = true,
      beforeSend = function(){},
      complete = function(){},
      //...more config
    }){//...do stuff};

    指定参数的默认值，就避免了在函数体内部再写var foo = config.foo||'default foo';这样的语句。

 7）遍历map结构
```js
    var map = new Map();
    map.set('first','hello');
    map.set('second','world');
    for(let [key,value] of map){
       console.log(key + "is" + value);
    }
```

## REST参数（拓展运算符）
```js
function fn(...arg){
    console.log(arg)
}

fn(1,2,3,4,5)
arg = [1,2,3,4,5]
...arg = 1,2,3,4,5

```
也就是说： ...arg将数组的外壳去掉了
那么就可以有如下的应用
```js
var arr = [1,2,3,4,5]
fn.call(null, ...arr)
fn.apply(null,[1,2,3,4,5])

function fn(...args){
    console.log(args)
}
```
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gf70lesjzaj30hf080glx.jpg)

## 箭头函数
ES6允许使用“箭头”（=>）定义函数

1）基本用法：
```js
 var f = v => v;
 等价于
 var f = function(v){
    return v;
 }
```
 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
 如果箭头函数的代码块部分多于一条语句，就要使用大括号将他们括起来，并且使用return语句返回。

 2）this

 箭头函数里面没有自己的this，而是引用外层的this。
```js
 //ES6
 function foo(){
    setTimeout(()=>{
       console.log('id:',this.id);
    },1000);
 }

 //ES5
 function foo(){
    var _this = this;
    setTimeout(function(){
       console.log('id:',_this.id);
    },1000);
 }
```
 不能作为构造函数，没有内部属性arguments。