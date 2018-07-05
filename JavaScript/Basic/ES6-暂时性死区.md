```javascript
var a = 12;
if(true){
console.log(a)
let a = 13
 //基于let创建变量，会把大部分{}当做一个私有的块级作用域（类似于函数的私有作用域），在这里也是重新检测语法规范，看一下是否是基于新语法创建的变量，如果是按照新语法解析

}
```
console.log(typeof a);//=>"undefined" 在原有浏览器渲染机制下，基于typeof等逻辑运算检测一个未被专用明过的变量，不会报错，返回UNDEFINED, 称为暂时性死区

console.log(typeof a);
let a //如果当前变量是基于ES6语法处理，在没有声明这个变量的时候，使用typeof检测会直接报错，不会是undefined，解决原有浏览器暂时性死区问题。