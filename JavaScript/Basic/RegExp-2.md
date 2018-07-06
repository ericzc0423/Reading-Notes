### **RegExp[]**

[xyz] [^xyz] [a-z] [^a-z]

* 中括号中出现的元字符一般都是代表本身含义的
```script javascript
let reg = /^.$/; //=>一个正则设置了^ $，那么代表的含义其实就是XXX
reg.test()
let reg = /^[.]+ $/;
reg.test('......')

```
*中括号出现的两位数，不是两位数，而是两个数字中的任意一个

```javascript

let reg = / /; //不加^ $代表字符串只要包含xxx即可
let reg = /^[18]$/;
console.log(reg.test('18'))
console.log(reg.test('1'))
console.log(reg.test('8'))

let reg=/^[12-65]$/ //这个正则的意思是1或者2〜6或者5
console.log(reg.test('1'));
console.log(reg.test('2'));
console.log(reg.test('6'));
console.log(reg.test('5'));

```
+ `测试题： 18-65之间`
    - 18-19 1[89]
    - 20-59 [2-5]
    - 60-65 6[0-5]
```javascript
let reg = /^((1[89])|([2-5]\d)|(6[0-5]))$/

console.log(reg.test(64));
console.log(reg.test(37));
console.log(reg.test(17));

```
+ `测试题： 编写一个规则，匹配 "[object AAA]"`
```javascript
let reg = /^\[object .+\]$/
console.log(reg.test('[object AAA]'));
```

