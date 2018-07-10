>前端页面的组成部分

    - html结构(标记语言）
    - CSS 层叠样式表(标记语言)
    - JS 专门用来控制页面上跟用户的交互行为（弱类型的脚本语言）

### JS组成部分


> ECMAscript: 变量 语句 函数

> DOM: 文档对象模型（Document Object Model)存放的都是操作DOM的内容

> BOM: 浏览器对象模型（Brower Object Model） window.history

###JS的引入方式

> CSS 引入方式

    -行内式，`优先级比较高`
    <div id="dvi1" style="color:" ...></div>
    -外链式
    <link rel="stylesheet" href="css/reset.min.css">
    -内嵌式
    <style text="css">

    </style>

> JS 引入方式
    -行内式 把JS直接写到元素内
    <div id="div1" .... onclick="alert(1)">
    -外链式
    <script src=""></script>
    -内嵌式
    <script>
    //div1 代表上边的div1元素；可以直接用ID代表这个元素；这种写法只有在标准浏览器下支持，代版本的浏览器不支持
    div1.onclick= function(){
        alert(1)
    }
    </script>
