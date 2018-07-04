##**JS中的判断语句**##

1. if/else if/else

```javascript

var num =12

if(num >10){
    num++
} else if (num >=0 && num<=10){
    num --;
} else {
    num +=2;
}

console.log(num)

```

**关于条件可怎么写？***
```javascript
// >= / <= / ==常规比较

if(0){
//=>不管在条件判断中写什么，最后总要把其计算出TRUE/FALSE来判断条件是否成立（把其它类型的值转换为布尔类型，只有 0/NaN/''/null/undefined是false,其余都为true)
}

if('3px'+3){
//=>在JS中，+ - * / 5都是数学运算，除+以外，其运算的时候，如果遇到了非数字类型的值，首先会转换为数字类型(Number)，然后再进行运算。
//=>在JS中除了数字相加，还有字符串拼接的作用（如果运算中遇到了字符串，则为字符串拼接，而不是数学相加）
}

```

###在JS中用来检测数据类型的方式

>- typeof
>- instanceof
>- constructor
>- Object.prototype.toString.call()


```javascript
Syntext: typeof [value] =>检测value的数据类型
返回值： 使用typeof检测出来的结果是一个字符串，字符串包含着对应的数据类型，如
"number"/"string"/"boolen"/"undefined"/"object"/"function"

typeof null => "object"
typeof 检测数组/正则/对象，最后返回的都是"object"，也就是基于这种方式无法细分对象
```

面试题：
``` javascript
console.log(typeof []) //=> "object"
console.log(typeof typeof[]) //=> typeof "object" => "string"
```

面试题：
```javascript
var num = parseInt('width:35.5px'); => num is NaN
```