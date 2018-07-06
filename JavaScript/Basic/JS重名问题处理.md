## **重名问题处理**
 > 1. 带var和function关键字声明相同的名字，重名(其实只是一个fn,只是存储的类型不一样)

     ```javascript
     var f = 12;
     function f() {

     }

     ```
 > 2. 关于重名的处理：如果名字重复了，不会重新的声明，但是会重新的定义（重新赋值）不管是变量提升还是代码执行阶段皆是如此

    ``` javascript
    f()
    function f() {
    console.log(1)
    }
    f()
    function f() {
        console.log(2)
    }
    var f=100
    f()
    function f() {
        console.log(3)
    }
    f()
    function f() {
        console.log(4)
    }
    f()
    /app/Docs/Reading-Notes/JavaScript/Basic/js/重名处理.js:11

    ==== OUTPUT ====
    4
    f()
    4
    ^

    TypeError: f is not a function
    ```