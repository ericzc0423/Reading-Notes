## "ES6的箭头函数"

+普通函数
```
var fn = function fn() {};
fn();
```
ES6箭头函数
```
let fn = () =>{

};
fn()
```

`只有一个形参，我们可以省略（）`
```
let fn1 =(x) =>{
    console.log(x);
}
fn1(10)
let fn = x =>{
    console.log(x);

}
fn(20)
```
`函数体只有一句话，并且是return，我们可以省略大括号`

```
let fn = (x,y) => x+y;
console.log(fn(10,20)
```


```
let  fn = x => y => x+y;
对应
var fn = function fn(x) {
  return function (y) {
    return x + y;
  };
};
```

## 箭头函数和普通函数的区别
1.箭头函数中没有arguements
 ```
 let fn2 = (...arg) =>{
     console.log(arguments);//报错，arguments is not defined
     console.log(arg); //=> 可以使用剩余运算来替代，而且ARG是一个数组
 }
 fn(10,20,30,40)
```

2.箭头函数中没有自己的执行主体(THIS)，它的THIS是继承上下文中的this
