## **for循环**
>- 作用：按照一定规律，重复去做某件事情，此时我们就需要用循环来处理了

```javascript
var ary=[12,23,34]
for (var i = 0 ; i <ary.length;i++){
}


```
* FOR循环的语法组成

   + 定义初始值
   + 设定循环成立的条件
   + 条件成立会执行循环体中的内容
   + 执行步长累加的操作


* For 循环的循环体中，经常出现两个常用的关键字
    + continue: 继续
    + break: 中断

```javascript
for (var i=0; i <10; i+++){
    if(i<5){
    i++;
    continue; //=>结束本轮循环(循环体中continue后面代码将不再执行，继续执行下一轮循环)
    }
    if(i>7){
    i +=2;
    break;
    }
    i +=3


```
