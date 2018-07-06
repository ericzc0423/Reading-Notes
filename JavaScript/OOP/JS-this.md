## **this**

- 给当前元素的某个事件绑定方法，当事件触发方法扫行的时候，方法中的this是当前操作的元素对象

    ```javascript
        oBox.onclick = function(){
            //=> this:oBox
        }
    ```
- 普通函数执行，函数中的THI取决于执行的主体，谁执行的，this就是谁（执行主体：方法执行，看方法名前面是有'.'，有的话点前面是谁this就是信，没有this就是window；
    ```javascript
        function f(){
            console.log(1);
        }
        var obj = {
            f:f;
        }

        //执行的是相同的方法
        obj.f();//this:obj
        f();//this:window

        //自执行函数执行，方法中的this是window
        〜function(){
            //=>this:window
        }();

    ```