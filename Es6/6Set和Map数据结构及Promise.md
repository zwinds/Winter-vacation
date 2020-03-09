# Set和Map数据结构及Promise

## 一、Set
1.set实例的创建

 它类似于数组，但是成员的值都是唯一的，没有重复的值。set本身是一个构造函数，用来生成set数据结构。

 const s = new Set();
 [2,3,5,4,5,2,2].forEach(x => s.add(x));
 console.log(s);  //2 3 5 4

 Set函数可以接收一个数组（具有iterable接口的其他数据结构）作为参数，用来初始化。

 [...new Set(array)]  //去除数组的重复成员

2.set实例的属性和方法

 Set结构的实例有以下属性：

   1) Set.prototype.constructor:构造函数，默认就是Set函数。
   2) Set.prototype.size:返回Set实例的成员总数。  
 
 Set结构的实例有以下方法：

   1) add(value):添加某个值，返回Set结果本身。
   2) delete(value):删除某个值，返回一个布尔值，表示删除是否成功。
   3) has(value):返回一个布尔值，表示该值是否为Set的成员。
   4) clear():清除所有成员，没有返回值。
   5) keys():返回键名的遍历器。
   6) values():返回键值的遍历器。
   7) entries():返回键值对的遍历器。
   8) forEach():使用回调函数遍历每个成员

## 二、Map
1.Map实例的属性和方法

 Map类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各类型的值（包括对象）都可以当做键。
 也就是说，Object结构提供了“字符串--值”的对应，Map结构提供了“值--值”的对应，是一种更完善的Hash结构的实现。如果你需要“键值对”的数据结构，Map比Object更合适。

 Map可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。

 const map = new Map([[name,'张三']，['title','Author']]);

 Map结构的实例有以下属性：

   Set.prototype.size:返回Map实例的成员总数。 

 Map结构的实例有以下方法：

   1) set(key,value):set方法设置键名key对应的键值为value，然后返回整个Map结构。如果key已经有值，则键值会被更新，否则就新生成该键。 
   2) get(key):get方法读取对应的键值，如果找不到key，返回false。
   3) has(key):has方法返回一个布尔值，表示某个键是否在当前Map对象之中。
   4) delete(key):delete方法删除某个键，返回true。如果删除失败，返回false。
   5) clear():清除所有成员，没有返回值。
   6) keys():返回键名的遍历器。 
   7) values():返回键值的遍历器。
   8) entries():返回键值对的遍历器。
   9) forEach():使用回调函数遍历每个成员   

## 三、Interator
1.Interator(遍历器)的概念

 遍历器(Iterator)就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

 Iterator的作用有三个：

    1）为各种数据结构提供一个统一的、简便的访问接口。
    2）使得数据结构的成员能够按某种次序排列。
    3）ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。

 Iterator的遍历过程是这样的：

   1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上就是一个指针对象。
   2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
   2）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
   3）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

2.默认Interator接口

 Iterator接口的目的，就是为所有数据结构提供了一种统一的访问机制，即for...of循环。当使用for...of循环遍历某种数据结构时，该循环会自动去寻找Iterator接口。一种数据结构只要部署了Iterator接口，我们就称这种数据结构是“可遍历的”。可以通过如下方法访问Iterator对象：

 var iterator = iterObj[Symbol.iterator]();

 原生具备Iterator接口的数据结构如下：

-  Array
-  Map
-  Set
-  String
-  TypedArray
-  函数的arguments对象
-  NodeList对象

## 四、Promise
1.promise介绍

 Promise是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了Promise对象。

 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise是一个对象，它可以获取异步操作的消息。Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。

 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

2.基本用法

 Promise构造函数接收一个函数作为参数，该函数的两个参数分别是reolve和reject。它们是两个函数，有JavaScript引擎提供，不用自己部署。

 resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果作为参数传递出去。

 reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作的结果作为参数传递出去。

 如果调用resolve和reject函数时带有参数，那么它们的参数会被传递给回调函数。

 Promise实例生成以后，可以调用then方法分别指定Resolved状态和Rejected状态的回调函数。

 .then(function(){
        //success
     },
     function(){
        //error
     });

3. promise.prototype.then()

 Promise实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为Promise实例添加状态改变时的回调函数。
 then方法的第一个参数是Resolved状态的回调函数，第二个参数（可选）是Rejected状态的回调函数。then方法返回的是一个新的Promise实例（注意：不是原来的Promise实例）。
 因此可以采用链式写法，即then方法后面再调用另一个then方法。如果使用两个then方法，第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。

4. promise.prototype.catch()

 Promise.prototype.catch方法是.then(null,rejection)的别名，用于指定发生错误时的回调函数。
 一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。

 Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获。

5. promise.all()

 Promise.all方法用于将多个Promise实例包装成一个新的Promise实例。

 var p = Promise.all([p1,p2,p3]);

 上面代码中，Promise.all方法接收一个数组作为参数，p1,p2,p3都是Promise实例，p的状态由p1,p2,p3决定，分成两种情况：
 1）只有p1,p2,p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1,p2,p3的返回值组成一个数组，传递给p的回调函数。
 2）只要p1,p2,p3之中有一个被rejected，p的状态就会变成rejectedd，此时第一个被rejected的实例的返回值，会传递给p的回调函数。

6. promise.race()

 promise.race方法同样是将多个Promise实例包装成一个新的Promise。下面代码中，只要p1,p2,p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给p的回调函数。

 var p = Promise.race([p1,p2,p3]);

7. promise.resolve()

 promise.resolve方法将现有对象转为Promise对象，例如：
 var jsPromise = promise.resolve($.ajax('/whatever.json'));

 1) 参数是一个Promise实例
    promise.resolve将不做任何修改、原封不动地返回这个实例。
 2) 参数是一个thenable对象
    thenable对象指的是具有then方法的对象，promise.resolve方法会将这个对象转为Promise对象，然后立即执行thenable对象的then方法。
 3) 参数不是具有then方法的对象，或根本就不是对象
    如果参数是一个原始值，或者是一个不具有then方法的对象，则promise.resolve方法返回一个新的Promise对象，状态为resolved。
 4) 不带有任何参数
    直接返回一个resolve状态的Promise对象。需要注意的是，立即resolve的Promise对象，是在本轮“事件循环”(event loop)的结束时，而不是在下一轮的“事件循环”的开始时。  

8. promise.reject()

 promise.reject方法也会返回一个新的Promise实例，该实例的状态为rejected。

 var p = promise.reject("出错了");
 =>
 var p = new Promise((resolve,reject)=>reject('出错了'));

9. finally()

 finally方法用于指定不管Promise对象最后状态如何都会执行的操作。它接收一个普通的回调函数作为参数，该函数不管怎样都必须执行。

 下面是一个例子，服务器使用Promise处理请求，然后使用finally方法关掉服务器。
 
 server.listen(0).then(function(){
     // run test
 }).finallly(server.stop);
