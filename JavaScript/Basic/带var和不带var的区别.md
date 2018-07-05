### **带var和不带var的区别**

- 带var

> `在全局作用域声明一个变量，也相当于给window全局对象设置了一个属性，变量的值就是属性值`（私有作用域中的声明的私有变量和window没关系
```javascript
console.log(a)//undefined
console.log(window.a)//undefined ->1.没有属性A 2.有这个属性，但是没有值
var a = 12
console.log(a)//12=>全局变量A
console.log(window.a)//=>windows的一个属性A => 12

a=13;
console.log(window.a) //=>13
window.a = 14
console.log(a) //=>14

```
> `全局变量和window中的属性存在"映射关系"`

- 不带var
> 本质是window的属性
```javascript
//console.log(a) //=>a is not defined
console.log(window.a) //=> undefined
console.log('a' in window) // => false

a = 12; //=>windw.a=12 !`此时a不是变量，而是将window.a设置为12`
console.log(a) //=>12
console.log(window.a)

getElementById()=window.getElementById()
eval()=window.eval()
alert()=window.alert

```

``` javascript
var a =12,
    b = 13; // var a, var b

var a = b = 12// b不带var，a带var  => var a = 12, b =12

```

`测试题 - 带var不带var`（课件36:00）
```javascript

console.log(a,b);
var a = 12,
    b = 12;
function fn(){
    console.log(a, b);
    var a = b =13;
    console.log(a, b);
}

fn();
console.log(a, b);

```
结果
===
undefined undefined

undefined 12

13 13

12 13

===
