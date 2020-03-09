# ES6笔记 let与const

## 一、let命令
ES6新增了let命令，用来声明变量。用法类似于var，但是也存在新特性：

1）let所声明的变量，只在let命令所在的代码块有效。适用于for循环。

   {let a = 10;var b = 1;}
   //a  a is not defined
   //b  1

2）不存在变量提升。

   console.log{bar};
   let bar = 2;
   //报错ReferenceError:bar is not defined

3）暂时性死区。

   在代码块内，使用let命令变量之前，该变量都是不可用的。

```js
   var tmp = 123;
   if(true){
        tmp = 'abc'; //ReferenceError
        let tmp;
   }
```

4）不允许重复声明。

``
    function(){let a =10;let a = 1;} //报错

2.块级作用域

let实际上为JavaScript新增了块级作用域。外层作用域无法读取内层作用域的变量，内层作用域可以定义外层作用域的同名变量。

 let foo = 1;
 {
    let foo = 2; //定义同名变量
    let bar = "one";
 }
 console.log{foo}; //1
 console.log(bar); //报错

 块级作用域的出现，实际上使得广泛应用的立即执行函数表达式(IIFE)不再必要了。

## 二、const命令

1. 基本用法

const声明一个只读的变量。一旦声明，常量的值就不能改变。

contst PI = 3.1415; PI = 3; //TypeError:Assignment to constant variable.

1）const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

 const foo; //SyntaxErroe:Missing initializer in const declaration

2）块级作用域

  只在声明所在的块级作用域内有效。

3）暂时性死区

  在代码块内，使用let命令声明变量之前，该变量是不可用。

  if(true){
     console.log(MAX); //ReferenceError const MAX = 5;
  }

4）不允许重复声明
```js
   var message = 'Hello!';
   let age = 25;
   //以下两行都会报错
   const message = 'Goodbye!';
   const age = 30;
```
