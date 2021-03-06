## **`函数(function)`**

* 什么是函数

    + 在JS中，函数就是一个方法（一个功能体），基于函数一般都是为了实现某个功能
    + 代码复用

**函数诞生的目的就是为了实现封状**：把实现一个功能的代码封装到一个函数中，后期想要实现这个功能，只要把函数执行即可，不必要再次编写重复代码，超到了``低耦合高内聚``(减少页面中的冗余代码，提高代码的重复使用率）的作用
=====
ES3标准中：
//=>创建函数
function f([arg]){
    函数体：实现功能的JS代码
}
//函数执行
f()
=====

ES6标准中创建箭头函数：
let f(变量名)=([arg]) =>{
    函数体
}
f()

```javascript
let fn=()=>{
    let total=10;
}
fn();
```
【创建函数】
+ 函数也是引用类型，首先会开辟一个新的堆内存，把函数体中的代码当做"字符串"存储到内存中（对象向内存中存储的是键值对）
+ 把开辟的堆内存地址赋值给函数名（变量名）此时我们输出fn代表当前函数本身，但fn()是执行函数

【函数执行】

* 目的：把之前存储到堆内存中的代码字符串变为真正的JS代码自上而下执行，从而实现就有的功能
1. 函数执行，首先会形成一个私有的作用域（一个供代码执行的环境，也就是一个栈内存）
2. 把之前在堆内存中存储的字符串复制一份过来，变为真正的JS代码，在新开辟的作用域中自上而下执行


### 函数中的参数
- 参数是函数的入口： 当我们在函数中封装一个功能，发现一些原料不确定，需要执行函数的时候用户传递进来才可以，此时我们就基于参数的机制，提供出入口即可

```javascript
//=>此处的参数叫做形参：入口，形参是变量(n/m就是变量）
function sum(n,m){
    //=>n和m分别对应要求和的两个数字
    var total = 0;
    total = n + m;
    console.log(total);
}
//=>此处函数执行传递的值是实参：实参是具体的数字值
sum(a,b)
```

`return`