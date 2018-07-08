## **用来改变某一个函数中THIS关键字的每时向**
``call apply bind``

    ```javascript
    window.name = 'test';
    let fun = function (){
    console.log(this.name)
    };

    let obj = {
        name: "OBj",
        fn: fn
    }

    let oo = { name: "OO"};
    fn.call(oo) //=> this:oo, OO
    fn.call(obj) // => this:obj

    fn();//=> this: window "test"
    obj.fn(); //=> this:obj "OBJ"


    ```

- call

    + 语法

        1. [fn].call([this],[param]...)
            a.fn.call:当前实例（函数fn）通过原型链的查找机制，找到function.prototype上的call方法 => function call() {[]native code}
            b. fn.call()：把找到call方法执行
            c.当call方法执行的时候，内部处理了一些事情
                - 首先把要操作函数中this关键字变为call方法第一个传递的实参值
                - 把call方法和二个及第二个以后的实参获取到
                - 把要操作的函数执行，并且把第二个以后的传递进来的实参传给函数

                ```javascript
                //this.call
                Function.prototype.call= function () {
                    let param1 = arguments[0],
                        paramOther = []; =>把ARG中除第一个以外的实参获取到
                    //=>this:fn当前要操作的函数（函数类的第一个实例）
                    /*
                    把fn中的THIS关键字修改为PARAM1 => 把THIS(call中）的this关键字修改为param1
                    把fn执行，把paramaOther传递给fn
                     */
                    this(paramOther) => fn(paramOther)
                }
                fn.call(name:'xxx')

                ```







- apply
- bind

```javascript
````