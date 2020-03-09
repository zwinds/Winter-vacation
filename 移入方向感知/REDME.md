# 需求：鼠标移入方向感知

## 分析： 浏览器绑定事件通过冒泡或捕获机制来向上，向下传播事件。将一个元素的事件，委托给另外一个元素来执行这个事件

## 思路

————————————————
版权声明：部分参照CSDN博主「Y__Cheng」的原创文章
原文链接：<https://blog.csdn.net/qq_33744228/article/details/80403495>

- 1：给li绑定鼠标移入移出事件
- 2：获取鼠标移入的位置（有用）,例:(x,y)
- 3：获取图片距离浏览器的位置（有用），top，left，height+top,left+width
- 4：将鼠标坐标与图片距离浏览器的位置相减，例如 x-top,x-(height+top)…
- 5：通过差值获取到最小值，这个最小值就是判断从那个方向移入移出的关键
- 6：获取到了方向，就开始释放想要的动画

## 首先给所有li绑定事件

### 方法一 for循环(性能杀手)

```js
var Li = document.getElementsByTagName('li');
for (var i = 0,j = Li.length;i<j;i++) {
  Li[i].index = i;                     // 将每次的i存入到li[i]定义的自定义变量index中
  Li[i].onmouseenter= function (){
   console.log(this.index);
     }
}
```

### 方法二 forEach(作用与数组，类似for循环)

```js
var Li = document.getElementsByTagName('li');
[].forEach.call(Li,function (ele,index){   //由于这里的li是伪数组，所以不能使用forEach需要使用到call达到效果
  ele.onmouseenter=function (){
   console.log(1)
  }
})

```

### 方法三 事件委托（减少性能消耗）

```js
var Box = document.getElementById('box')  
oBox.addEventListener('mouseenter',function (e){    //给li的父元素绑定时间，然后通过捕获将事件传播
 if (e.target.tagName.toLowerCase() == "li") {
    console.log(1)
    }
},true)

```

## 后续获取部分

```js

var oBox = document.getElementById('box')
    var oLi = document.getElementsByTagName('li');

    oBox.addEventListener('mouseenter',function (e){
  if (e.target.tagName.toLowerCase() == "li") {
   move(e)                   // 这里将获取的方法重新封装一个move方法
   }
 },true)
    function move(e) {
  var e = e || window.event
  var target = e.target
  //获取鼠标x,y坐标
    var x = e.clientX
    var y = e.clientY
    //获取图片距离浏览器位置
    var t = target.offsetTop
    var b = t + target.offsetHeight
    var l = target.offsetLeft
    var r = l + target.offsetWidth
    //获取鼠标与图片距离浏览器位置的差值（注意有负值，需要绝对值 Math.abs）
    var chaYT = Math.abs(y - t)
    var chaYB = Math.abs(y - b)
    var chaXL = Math.abs(x - l)
    var chaXR = Math.abs(x - r)
    //取得最小值
    var min = Math.min(chaYT, chaYB, chaXL, chaXR)
    //判断方向
    switch(min){
    case chaYT:
    console.log('上')
     break;
    case chaYB:
    console.log('下')
    break;
   case chaXL:
    console.log('左')
            break;
    case chaXR:
    console.log('右')
        }
 }

```

## case中可以放入你封装好的动画

动画就是动态改变css,与animate
例如：

```js
#container li:hover img{
    transform:scale(1.1);//根据级别放大缩小：scale 等级; 级别;
}
```

## 图片排序的时候

让上面呈现三张图片的话

```js
#container{
    column-count:3;//将 div 元素中的文本分为三列，并规定列间 30 像素的间隔。
}
```
