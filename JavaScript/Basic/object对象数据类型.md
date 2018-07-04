###**Object对象数据类型**###

> 普通对象

>- 由大括号包起来

>- 由零到多组属性名和属性值（键值对）组成

`属性是用来描述当前对象特殊的，属性名是当前具备这个特殊，属性值是对这个特征的描述(键[key]，值[value])`

```javascript
 var obj = {
    name:'eric',
    age:10
 }

 // =>对象的操作，对键值对的增删改查

【获取】
obj.name
obj['name'] 一般来说，对象的属性名都是字符串格式的（属性值不固定，任何格式都可以）

【增/改]
JS对象中属性名不允许重复，是唯一的
obj.name='Eric'
obj['age']=28
obj.sex='M'

obj
{name: "eric", age: 10, sex: "M"}

[删]
1. 彻底删除:对象中不存在这个属性了
delete obj.sex
true
obj
{name: "eric", age: 10}

2.假删除：并没有移除这个属性，只是当前属性的值为空
obj.sex='null'
"null"
obj
{name: "eric", age: 10, sex: "null"}

----
在获取属性值的时候，如果当前对象有这个属性名，则可以正常取到值（哪怕是null)，如果没有这个属性名，则获取的结果是undefined

obj.friend
undefined
```

###思考题###

```javascript
var obj = {
    name:'Eric',
    age:20
}
var name = 'eric'
obj.name=Eric
obj['name']=Eric
obj[name] = undefined //是一个变量不是值，它代表本身存的值

```


一个对象中属性名不仅仅是字符串格式的，也可以是数字格式的

```javascript
    var obj = {
    name='Eric',
    0:100
    }
    obj[0]=>100
    obj.0=>100
```
----
当我们存储的属性名不是字符吕也不是数字的时候，浏览器会先把这个值转换为字符串(toString),然后再存储

obj[{}]=300; 先把({}).toString()后的结果作为对象属性名存储进来 obj['[object Object]']=300

obj[{}] 获取的时候也是先把对象转换为字符串'[object Object]'，然后获取之前存储的300


