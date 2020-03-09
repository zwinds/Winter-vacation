# 第六章 Class
## 1、介绍

JavaScript语言中，生成实例对象的传统方法是通过构造函数ES6提供了更接近传统语言的写法，引入了class（类）概念，作为对象的模板。通过class关键字，可以定义类。
基本上，ES6的class可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的class写法只是让对象原型的写法更加清晰更像面向对象编程的语法而已。所以ES6的类，完全可以看作构造函数的另一种写法。

class Point{
constructor(x,y){
this.x = x;
this.y = y;
}
toString(){
return ‘(’ + this.x + ‘,’ + this.y + ‘)’;
}
}

## 2、方法

在类中可以直接定义方法，实际上类的所有方法都定义在类的prototype属性上面。在类的实例上面调用方法，其实就是调用原型上的方法。

class Point{
  constructor(){//...}
  toString(){//...}
  toValue(){//...}
}

由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地向类添加多个方法。

class Point{
   constructor(){//...}
}
Object.assign(Point.prototype,{
  toString(){},
  toValue(){}
});

## 3、constructor方法

constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显示定义，一个空的constructor方法会被默认添加。

class Point{}
=>
class Point {costructor(){}}

类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

## 4、静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来直接调用，这就称为“静态方法”。

class Foo{
   static classMethod(){return 'hello';}
}
Foo.classMethod(); //'hello'

如果静态方法包含this关键字，这个this值得是类，而不是实例。

## 5、实例属性

类的实例属性可以定义在构造函数中。

class Person{
   constructor(id,name,age){
       this.id = id;
       this.name = name;
       this.age = age;
   }
}

## 6、静态属性

直接在类上定义的属性是静态属性。

class Foo{
   //...
}
Foo.prop = 1;
Foo.prop; //1

目前，只有这种写法可行，因为ES6明确规定，class内部只有静态方法，没有静态属性。

## 7、继承

class可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承要清晰和方便很多。

class Animal{
   constructor(name){
      this.name = name;
   }
   sayName(){
      console.log("my name is",this.name);
   }
}
class Dog extends Animal{
    //...
}

子类必须在constructor方法中调用super方法，否则新建实例时会报错。
这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
如果不调用super方法，子类就得不到this对象。子类构造函数可以省略。
在子类构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。

## 8、super

super这个关键字，既可以当做函数使用，也可以当做对象使用。在这两种情况下，它的用法完全不同。

1）函数

  子类B的构造函数之中的super()，代表调用父类的构造函数。super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)。

2）对象
    
   在普通方法中，指向弗雷德原型对象；在静态方法中，指向父类。由于super指向父类的原型对象，所以定义在父类实例上上午方法或属性，是无法通过super调用的。

   ES6规定，通过super调用父类的方法时，super会绑定子类的this。

   super.print();
   =>
   super.print.call(this);

   不能直接打印super，因为无法得知super到底是函数还是对象。

## 9、类的prototype属性和__proto__属性

 class作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链：
 1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
 2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

 class A {}
 class B extends A {}
 B.__proto__ === A; //true
 B.prototype.__proto__ === A.prototype; //true

 类的继承是按照下面的模式实现的。

 class A {}
 class B {}
  //B的实例继承A的实例
 Object.setPrototypeOf(B.prototype,A.prototype);
  //B的实例继承A的静态属性
 Object.setPrototypeOf(B,A);
 const b = new B();
