### less

- 它是CSS预编译语言，和它类似的还有sass/stylus

- CSS是标记语言，不是编程语言，没有类、实例、函数、变量
而Less等预编译语言就是让CSS具备面向对象编程的思想；但是浏览器不能直接识别和渲染less代码
需要我们把less代码编译为正常的css，再交给浏览器渲染解析


### less的编译

- 在开发环境下编译（产品没有开发完，正在开发中，这个是开发环境

    + 导入less.js即可

    ```javascript
    html
    <link rel="stylesheet/less" href="css/demo.less">
    <script src="js/less.js"></script>
    ```

- 在生产环境下编译（产品开发完成了，需要部署到服务器上）
    +项目上线后，不能把less部署，这样用户每一次打开页面都需要重新编译，非常耗性能，我们部署到服务器上的是编译后的css

     1. node安装less模块

     ```
      npm install less -g
     ````

     2.node编译less
     ```
     lessc demo1.less demo1.min.css -x
        ```

- 目前基于webpack和框架实现工程化开发的时候，我们都是在webpack配置文件中，配置出less编译（需要安装less/less-loader等模块）,这样不管是开发环境下预览，还是部署到生产环境下，都是基于webpack中的less模块编译的

### less语法
- 变量

1. 用变量存储一个公共值，后期需要使用这个值，直接调变量即可，以后如果值需要修改，只需要更改变量的值，那以所有用到这个变量的地方都跟着修改了
2. Mixin混合

    + 基本使用
    + extend继承
    + 命名空间和作用埕
    + ！important