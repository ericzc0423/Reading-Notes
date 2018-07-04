Node中 buffer是16进制
let buffer = Buffer.allocUnsafe(100)
//不推荐使用
let buffer = Buffer.alloc(100)
//比较耗性能，但是推荐使用

深拷贝，浅拷贝
浅拷贝就是两个对象的存放的窨是一样的如,slice
深拷贝，两个对象毫无关系

```javascript

//深拷贝
var obj = {name:{name:'hello'}}
var newobj = Object.assign({},obj)
obj.name.name='eric'
console.log(newobj)

//浅拷贝
var obj = {name:"eric"}
var arr = [obj,2, 3 ]
var newArry = arr.slice(0)
console.log(newArry)
arr[0].name='hello'
console.log(newArry)
[ { name: 'hello' }, 2, 3 ]

```