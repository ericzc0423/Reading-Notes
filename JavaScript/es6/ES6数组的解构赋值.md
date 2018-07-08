### **解构赋值**

- 定义：按照一个数据值的结构，快速解析获取到其中的内容
    1.真实项目中一般都是针对数组或者对象进行结构赋值

+ `数组的解构`

    ```javasript
    let ary = [12,23,34];

    /*
    es6之前
    let a = ary[0],
        b = ary [1],
        c = ary[2];
     */

    let [a,b,c] = ary; //让等号左边出现和右边相同数据结构，左边可创建一些变量快速获取右侧相对应位置的
    console.log(a,b,c);
    let[a] = ary;
    console.log(a)
    let[,,c] = ary;
    console.log(c)
    ```
        2.需求：获取第一项，把剩下的项作为一个数组返回

    ```javascript
    let[a, ...b] = ary;
    console.log(a, b);

    ```
    `...剩余运算符，除了前面以外的项，都放在一个数组中`
        3.
    ```javascrpt
    let ary = [12]
    let [a,b =0] = ary;
    `在解析的时候可以给变量设置默认值；如果当前变量对应结构中的这一项没有值，变量用默认值`
    console.log(a, b); => 12 0
    ```
        4. 数值交换
    ```javascript
    let a = 12,
        b=13;
     [a,b] = [b,a];
    console.log(a, b);
    ```
    ``
+ `对象解构`

    ```javascript
    let obj = {name:'xxx',age:'25'}
    let {sex} =obj
    console.log(sex)
    let {age: ageAA} = obj
    console.log(ageAA)
    ```


