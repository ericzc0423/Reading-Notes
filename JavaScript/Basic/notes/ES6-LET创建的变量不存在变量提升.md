### **ES6中基于LET/CONST等方式创建变量或者函数，不存在提升机制
    `示例`
    ```javascript
    console.log(a);//ReferenceError: a is not defined
    let a = 12
    ```

- 切断了全局全量和window属性映射机制

- 在相同的作用域中，基于LET不能声明相同名字的变量（不管用什么方式在当前作用域下声明了变量，再次使用LET创建都会报错）
    `示例`
    ```javascript
    let a = 12
    var a = 13
    ===OutPut===
    SyntaxError: Identifier 'a' has already been declared

    ```
- 虽然没有变量提升机制，但是在当前作用域代码自上而下执行之前，浏览器会做一个重复性检测（语法检测）：自上而下查找当前作用域下所有变量，一旦发现有重复的，直接抛出异常，代码也不会执行了。（虽然没有把变量提前声明定义，但是浏览器已经记住了，当前作用域下有哪些变量）

- `基于ES6中的LET来创建变量，是存在块级作用域的（类似于私有作用域）`